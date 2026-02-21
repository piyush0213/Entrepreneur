"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const visionItems = [
    {
        title: "Unshakable Confidence",
        description:
            "Walk into any room knowing you have the skills, knowledge, and mindset to dominate.",
    },
    {
        title: "Financial Freedom",
        description:
            "Multiple income streams, investments, and the ability to create money on demand.",
    },
    {
        title: "A Powerful Network",
        description:
            "Surrounded by winners, builders, and like-minded entrepreneurs who push you forward.",
    },
    {
        title: "Complete Control",
        description:
            "Your time, your decisions, your life — built on your terms, not someone else's.",
    },
];

export function VisionSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="section-padding relative overflow-hidden">
            {/* Parallax background accent */}
            <motion.div
                style={{ y }}
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)]"
            />

            <div className="relative z-10 max-w-5xl mx-auto">
                <SectionReveal className="text-center mb-20">
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        Your Future
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Imagine </span>
                        <span className="text-gold-gradient">6 Months From Now</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        Close your eyes. Picture the person you&apos;ll become when you
                        commit fully to your growth.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {visionItems.map((item, i) => (
                        <SectionReveal
                            key={item.title}
                            delay={i * 0.15}
                            direction={i % 2 === 0 ? "left" : "right"}
                        >
                            <div className="glass-card p-8 md:p-10 flex items-start gap-6 group cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 group-hover:shadow-gold-glow-sm transition-all duration-300">
                                    <span className="text-gold font-serif font-bold text-xl">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
