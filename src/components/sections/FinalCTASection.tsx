"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FinalCTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_60%)]" />
            <motion.div
                animate={
                    isInView
                        ? { scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }
                        : {}
                }
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5"
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-6 block">
                        Your Move
                    </span>

                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="text-white">The Only Question Is:</span>
                        <br />
                        <span className="text-shimmer">Are You Ready?</span>
                    </h2>

                    <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Six months from now, you&apos;ll wish you started today. Don&apos;t let
                        another day pass watching others build the life you deserve.
                        Your transformation starts with one decision.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <a
                        href="#pricing"
                        className="btn-gold text-lg md:text-xl px-12 py-5 pulse-cta inline-block"
                    >
                        Start Your Journey Now
                    </a>
                    <p className="text-white/20 text-sm mt-6">
                        Join 50,000+ entrepreneurs who chose to level up.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
