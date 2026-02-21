"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/SectionReveal";

const plans = [
    {
        name: "Learner Pack",
        price: "49",
        period: "/month",
        description: "Perfect for those ready to start their transformation.",
        features: [
            "Access to all core skill modules",
            "Weekly live training sessions",
            "Community access",
            "Downloadable resources",
            "Email support",
            "Mobile app access",
        ],
        highlighted: false,
        cta: "Get Started",
    },
    {
        name: "Master Pack",
        price: "99",
        period: "/month",
        description: "For those committed to mastering every skill at the highest level.",
        badge: "Most Recommended",
        features: [
            "Everything in Learner Pack",
            "1-on-1 mentorship sessions",
            "Advanced masterclass library",
            "Exclusive networking events",
            "Priority support 24/7",
            "Certificate of completion",
            "Lifetime community access",
            "Bonus: Sales Mastery Course",
        ],
        highlighted: true,
        cta: "Join Master Pack",
    },
];

function PricingCard({
    plan,
    index,
}: {
    plan: (typeof plans)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            className={`relative rounded-2xl overflow-hidden ${plan.highlighted
                    ? "gold-border-glow"
                    : "border border-white/10"
                }`}
        >
            {/* Background */}
            <div
                className={`p-8 md:p-10 h-full flex flex-col ${plan.highlighted
                        ? "bg-gradient-to-b from-gold/10 via-gold/5 to-transparent"
                        : "bg-black-card"
                    }`}
            >
                {/* Badge */}
                {plan.badge && (
                    <div className="mb-6">
                        <span className="px-4 py-1.5 bg-gold-gradient text-black text-xs font-bold uppercase tracking-wider rounded-full">
                            {plan.badge}
                        </span>
                    </div>
                )}

                {/* Header */}
                <div className="mb-8">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                        {plan.name}
                    </h3>
                    <p className="text-white/40 text-sm mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-gold text-lg">$</span>
                        <span className="text-5xl md:text-6xl font-serif font-bold text-gold-gradient">
                            {plan.price}
                        </span>
                        <span className="text-white/30 text-sm">{plan.period}</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="gold-divider mb-8" />

                {/* Features */}
                <ul className="space-y-4 flex-1 mb-10">
                    {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                            <svg
                                className="w-5 h-5 text-gold shrink-0 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="text-white/60 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#"
                    className={`w-full text-center ${plan.highlighted
                            ? "btn-gold pulse-cta"
                            : "btn-outline-gold"
                        }`}
                >
                    {plan.cta}
                </a>
            </div>
        </motion.div>
    );
}

export function PricingSection() {
    return (
        <section id="pricing" className="section-padding relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <SectionReveal className="text-center mb-20">
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        Investment
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Choose Your </span>
                        <span className="text-gold-gradient">Path</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        Invest in yourself today. The return on these skills compounds for
                        a lifetime.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {plans.map((plan, i) => (
                        <PricingCard key={plan.name} plan={plan} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
