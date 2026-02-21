"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
    {
        icon: "🎯",
        title: "No Clear Direction",
        description:
            "Most people drift through life without a strategy, following someone else's blueprint instead of creating their own.",
    },
    {
        icon: "📚",
        title: "Outdated Education",
        description:
            "The traditional system teaches you to be an employee — not a leader, not a builder, not a creator of value.",
    },
    {
        icon: "💰",
        title: "Trading Time for Money",
        description:
            "Working harder in the wrong system will never create freedom. You need the right skills and the right vehicle.",
    },
    {
        icon: "🧠",
        title: "Untrained Mindset",
        description:
            "Without the mental frameworks for success, fear, doubt, and procrastination will keep you stuck forever.",
    },
];

function ProblemCard({
    icon,
    title,
    description,
    index,
}: {
    icon: string;
    title: string;
    description: string;
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
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card gold-border-glow p-8 md:p-10 cursor-default transition-all duration-500"
        >
            <div className="text-4xl mb-5 w-16 h-16 flex items-center justify-center rounded-xl bg-gold/10 shadow-gold-glow-sm">
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">
                {title}
            </h3>
            <p className="text-white/50 leading-relaxed">{description}</p>
        </motion.div>
    );
}

export function ProblemSection() {
    return (
        <section id="problem" className="section-padding relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <SectionReveal className="text-center mb-20">
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        The Problem
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Why Most People </span>
                        <span className="text-gold-gradient">Stay Stuck</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        The world doesn&apos;t reward the average. It rewards those who
                        develop extraordinary skills and take extraordinary action.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {problems.map((problem, i) => (
                        <ProblemCard key={problem.title} {...problem} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
