"use client";

import { motion } from "framer-motion";

const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: 0.5 + i * 0.04,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

export function HeroSection() {
    const title = "The Life Of An  Entrepreneur";

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black-light to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)]" />

            {/* Animated gold ring accent */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-gold/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-gold/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-gold/20 bg-gold/5"
                >
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold text-xs md:text-sm font-medium tracking-widest uppercase">
                        Exclusive Program
                    </span>
                </motion.div>

                {/* Title with stagger */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] mb-8">
                    {title.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block text-shimmer"
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={letterVariants}
                            style={{ display: char === " " ? "inline" : "inline-block" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="text-xl md:text-2xl lg:text-3xl text-gold/80 font-light tracking-wide mb-6"
                >
                    Learn Skills. Build Confidence. Earn Money.
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.8 }}
                    className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Step into the world of entrepreneurship. Master the skills that
                    separate the top 1% from everyone else and build a life of freedom,
                    confidence, and wealth.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    <a href="#pricing" className="btn-gold text-base md:text-lg pulse-cta">
                        Join Now
                    </a>
                    <a href="#skills" className="btn-outline-gold text-base md:text-lg">
                        Explore Program
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
                >
                    <div className="w-1 h-2 rounded-full bg-gold/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
