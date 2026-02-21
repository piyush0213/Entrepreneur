"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/SectionReveal";

export function TransformationSection() {
    const lineRef = useRef(null);
    const isInView = useInView(lineRef, { once: true, margin: "-100px" });

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Animated gold line divider */}
                <div ref={lineRef} className="relative mb-16 flex items-center justify-center">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
                    />
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute w-3 h-3 rounded-full bg-gold shadow-gold-glow"
                    />
                </div>

                <SectionReveal>
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-6 block">
                        The Solution
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        <span className="text-gold-gradient">Life Of An Entrepreneur</span>
                        <br />
                        <span className="text-white">Is Designed to Change That</span>
                    </h2>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                        This isn&apos;t another course. This is a complete transformation
                        system — designed to rewire your thinking, sharpen your skills, and
                        equip you with the tools to build real wealth and lasting confidence.
                    </p>
                </SectionReveal>

                {/* Visual transformation effect */}
                <SectionReveal delay={0.4}>
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                        {[
                            { label: "From Lost", sublabel: "To Focused" },
                            { label: "From Broke", sublabel: "To Building" },
                            { label: "From Stuck", sublabel: "To Unstoppable" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >
                                <div className="text-white/30 text-sm line-through mb-2">{item.label}</div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + i * 0.2 }}
                                    className="text-gold font-serif font-bold text-lg md:text-xl"
                                >
                                    {item.sublabel}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
