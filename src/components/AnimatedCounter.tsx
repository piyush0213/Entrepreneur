"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    label: string;
}

export function AnimatedCounter({
    end,
    suffix = "",
    prefix = "",
    duration = 2,
    label,
}: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 4); // ease-out-quart
            setCount(Math.floor(eased * end));
            if (progress < 1) {
                animationId = requestAnimationFrame(animate);
            }
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isInView, end, duration]);

    return (
        <motion.div
            ref={ref}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold-gradient mb-2">
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </div>
            <div className="text-sm md:text-base text-white/60 uppercase tracking-widest">
                {label}
            </div>
        </motion.div>
    );
}
