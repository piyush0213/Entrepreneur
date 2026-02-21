"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "left" | "right";
    delay?: number;
}

export function SectionReveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
}: SectionRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directionMap = {
        up: { y: 60, x: 0 },
        left: { y: 0, x: -60 },
        right: { y: 0, x: 60 },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: directionMap[direction].y,
                x: directionMap[direction].x,
            }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, x: 0 }
                    : {
                        opacity: 0,
                        y: directionMap[direction].y,
                        x: directionMap[direction].x,
                    }
            }
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}
