import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const { session_id } = body;

        if (!session_id) {
            return NextResponse.json(
                { error: "Missing session ID" },
                { status: 400 }
            );
        }

        // Retrieve the checkout session from Stripe
        const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

        if (checkoutSession.payment_status !== "paid") {
            return NextResponse.json(
                { error: "Payment not completed" },
                { status: 400 }
            );
        }

        const userId = checkoutSession.metadata?.userId;
        const plan = checkoutSession.metadata?.plan;

        if (!userId || !plan) {
            return NextResponse.json(
                { error: "Invalid session metadata" },
                { status: 400 }
            );
        }

        // Verify this session belongs to the current user
        if (userId !== session.user.id) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 }
            );
        }

        // Check if already activated (prevent duplicate activations)
        const existing = await db.subscription.findUnique({
            where: { userId },
        });

        if (existing?.status === "active") {
            return NextResponse.json({
                success: true,
                message: "Subscription already active",
            });
        }

        const now = new Date();
        const periodEnd = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

        // Activate subscription
        await db.subscription.upsert({
            where: { userId },
            create: {
                userId,
                plan,
                status: "active",
                razorpaySubscriptionId: checkoutSession.payment_intent as string,
                currentPeriodStart: now,
                currentPeriodEnd: periodEnd,
            },
            update: {
                plan,
                status: "active",
                razorpaySubscriptionId: checkoutSession.payment_intent as string,
                currentPeriodStart: now,
                currentPeriodEnd: periodEnd,
            },
        });

        // Record payment
        await db.payment.create({
            data: {
                userId,
                amount: checkoutSession.amount_total || 0,
                currency: checkoutSession.currency || "usd",
                status: "success",
                razorpayPaymentId: checkoutSession.payment_intent as string,
                razorpayOrderId: checkoutSession.id,
                plan,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Subscription activated",
        });
    } catch (error) {
        console.error("Verify session error:", error);
        return NextResponse.json(
            { error: "Verification failed" },
            { status: 500 }
        );
    }
}
