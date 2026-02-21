"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

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
    const title = "The Life Of An Entrepreneur";
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const playerRef = useRef<Player | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (iframeRef.current) {
            playerRef.current = new Player(iframeRef.current);
            playerRef.current.setVolume(0);
        }
        return () => {
            playerRef.current?.destroy();
        };
    }, []);

    const toggleSound = () => {
        if (!playerRef.current) return;
        if (isMuted) {
            playerRef.current.setVolume(1);
            setIsMuted(false);
        } else {
            playerRef.current.setVolume(0);
            setIsMuted(true);
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* ===== DESKTOP: Background video (hidden on mobile/tablet) ===== */}
            <div className="absolute inset-0 z-0 hidden lg:block">
                <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/902932460?autoplay=1&loop=1&badge=0&autopause=0&title=0&byline=0&portrait=0&player_id=0&app_id=58479"
                    className="absolute w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ border: "none", pointerEvents: "none" }}
                    allow="autoplay; fullscreen"
                    title="Background Video"
                />
            </div>

            {/* ===== MOBILE/TABLET: Gradient backgrounds (hidden on desktop) ===== */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black-light to-black lg:hidden" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] lg:hidden" />

            {/* Dark overlay — always visible but stronger on desktop for video readability */}
            <div className="absolute inset-0 z-[1] bg-black/70 hidden lg:block" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

            {/* Sound toggle — desktop only */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                onClick={toggleSound}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-gold/30 bg-black/50 backdrop-blur-md items-center justify-center hover:border-gold/60 hover:bg-black/70 transition-all duration-300 group cursor-pointer hidden lg:flex"
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? (
                    <svg className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
                    </svg>
                )}
            </motion.button>

            {/* Animated gold ring accent */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-gold/10 z-[2]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-gold/5 z-[2]"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 lg:pt-0">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm"
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
                    className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
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

                {/* ===== MOBILE/TABLET: Inline video (hidden on desktop) ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 2.8, duration: 1 }}
                    className="mt-14 max-w-2xl mx-auto lg:hidden"
                >
                    <div className="glass-card gold-border-glow p-2 rounded-2xl">
                        <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                src="https://player.vimeo.com/video/902932460?badge=0&autopause=0&title=0&byline=0&portrait=0&player_id=0&app_id=58479"
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowFullScreen
                                title="The Life Of An Entrepreneur"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden lg:flex"
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
