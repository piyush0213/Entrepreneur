import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getStripe, PLANS, PlanKey } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session?.user?.id || !session?.user?.email) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const plan = body.plan as PlanKey;

        if (!plan || !PLANS[plan]) {
            return NextResponse.json(
                { error: "Invalid plan" },
                { status: 400 }
            );
        }

        // Check if user already has an active subscription
        const existingSubscription = await db.subscription.findUnique({
            where: { userId: session.user.id },
        });

        if (existingSubscription?.status === "active") {
            return NextResponse.json(
                { error: "You already have an active subscription" },
                { status: 400 }
            );
        }

        const selectedPlan = PLANS[plan];

        // Create Stripe Checkout Session
        const checkoutSession = await getStripe().checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            customer_email: session.user.email,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: selectedPlan.name,
                            description: selectedPlan.description,
                        },
                        unit_amount: selectedPlan.priceInCents,
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                userId: session.user.id,
                plan: plan,
            },
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#pricing`,
        });

        return NextResponse.json({ url: checkoutSession.url });
    } catch (error) {
        console.error("Create checkout error:", error);
        return NextResponse.json(
            { error: "Failed to create checkout session" },
            { status: 500 }
        );
    }
}
