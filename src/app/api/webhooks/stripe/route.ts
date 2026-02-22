import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import Stripe from "stripe";

export async function POST(req: Request) {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature");

    if (!sig) {
        return NextResponse.json(
            { error: "Missing signature" },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        console.error("Webhook signature verification failed:", err);
        return NextResponse.json(
            { error: "Invalid signature" },
            { status: 400 }
        );
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            const userId = session.metadata?.userId;
            const plan = session.metadata?.plan;

            if (!userId || !plan) break;

            const now = new Date();
            const periodEnd = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

            // Create or update subscription
            await db.subscription.upsert({
                where: { userId },
                create: {
                    userId,
                    plan,
                    status: "active",
                    razorpaySubscriptionId: session.payment_intent as string,
                    currentPeriodStart: now,
                    currentPeriodEnd: periodEnd,
                },
                update: {
                    plan,
                    status: "active",
                    razorpaySubscriptionId: session.payment_intent as string,
                    currentPeriodStart: now,
                    currentPeriodEnd: periodEnd,
                },
            });

            // Record payment
            await db.payment.create({
                data: {
                    userId,
                    amount: session.amount_total || 0,
                    currency: session.currency || "usd",
                    status: "success",
                    razorpayPaymentId: session.payment_intent as string,
                    razorpayOrderId: session.id,
                    plan,
                },
            });
            break;
        }

        case "payment_intent.payment_failed": {
            const paymentIntent = event.data.object as Stripe.PaymentIntent;
            await db.payment.updateMany({
                where: { razorpayPaymentId: paymentIntent.id },
                data: { status: "failed" },
            });
            break;
        }
    }

    return NextResponse.json({ received: true });
}
