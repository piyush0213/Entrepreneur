"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/SectionReveal";

const benefits = [
    "Access to all monthly updated content and materials",
    "Live group coaching calls with expert mentors",
    "Exclusive member-only community and networking",
    "Weekly accountability check-ins and challenges",
    "Priority invitations to workshops and events",
    "Monthly progress assessment and personalized feedback",
    "Early access to new modules and feature releases",
    "Direct messaging access to mentors and coaches",
];

function CheckItem({ text, index }: { text: string; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-30px" });

    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5"
            >
                <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </motion.div>
            <span className="text-white/60">{text}</span>
        </motion.li>
    );
}

export function QualificationSection() {
    return (
        <section className="section-padding relative">
            <div className="relative z-10 max-w-4xl mx-auto">
                <SectionReveal className="text-center mb-16">
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        Membership
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Monthly </span>
                        <span className="text-gold-gradient">Qualification</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl mx-auto">
                        As long as you&apos;re a member, you get access to everything — constantly
                        updated, constantly improving.
                    </p>
                </SectionReveal>

                <div className="glass-card p-8 md:p-12">
                    <ul>
                        {benefits.map((benefit, i) => (
                            <CheckItem key={benefit} text={benefit} index={i} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
