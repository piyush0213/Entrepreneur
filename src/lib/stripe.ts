import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
});

export const PLANS = {
    learner: {
        name: "Learner Pack",
        priceInCents: 4900, // $49
        description: "Access to all core skill modules and weekly live sessions.",
    },
    master: {
        name: "Master Pack",
        priceInCents: 9900, // $99
        description: "Full access with 1-on-1 mentorship and advanced masterclasses.",
    },
} as const;

export type PlanKey = keyof typeof PLANS;
