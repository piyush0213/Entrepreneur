"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";

const checkIcon = (
    <svg className="w-5 h-5 text-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const accessBlocks = [
    {
        title: "Step-by-Step Learning",
        description: (
            <>
                You will get <strong className="text-white">access to 100+ video courses</strong> and well-structured
                tutorials covering everything from the fundamentals of modern business to{" "}
                <strong className="text-white">niche money-making strategies.</strong>
            </>
        ),
        checks: [
            "Easy-to-follow program for financial success",
            "New high income skills",
            "Hyper advanced learning application",
        ],
        image: "https://framerusercontent.com/images/WFSJh0SPfkYfWx6XtirFMSdivIY.webp?width=640&height=452",
        imageAlt: "Step-by-step learning platform on multiple devices",
        imagePosition: "left" as const,
    },
    {
        title: "Daily Live Sessions with Millionaire Coaches",
        description: (
            <>
                <p className="mb-4">
                    Each of our <strong className="text-white">professors have made over $1M USD profit</strong> using the
                    methods they teach inside of our curriculum.
                </p>
                <p className="mb-4">
                    They are hyper-motivated, <strong className="text-white">experienced professionals</strong> who will
                    provide you with organized coursework, daily new lessons and constant{" "}
                    <strong className="text-white">mentoring throughout your entrepreneurship.</strong>
                </p>
                <p>
                    From learning how to make your first dollar,{" "}
                    <strong className="text-white">
                        to scaling to a multi million dollar business, THE LIFE OF AN ENTREPRENEUR is unmatched.
                    </strong>
                </p>
            </>
        ),
        checks: [],
        image: "https://framerusercontent.com/images/rtAqc4QjnylNpWdunND5E3NvH9s.webp?width=640&height=459",
        imageAlt: "Live coaching sessions with millionaire mentors",
        imagePosition: "right" as const,
    },
    {
        title: (
            <>
                An Exclusive Community with{" "}
                <span className="text-gold">113K+</span> Like-Minded Students
            </>
        ),
        description: (
            <>
                Our online community is a supportive, high-focus environment. Everyone is on the
                same mission: acquiring an abundance of wealth.
            </>
        ),
        checks: [
            <>Network with <strong className="text-white">113,000+ people</strong> on the same mission</>,
            <>Make <strong className="text-white">like-minded friends</strong> on your financial journey</>,
            <><strong className="text-white">Celebrate your wins</strong> with people who understand ambition</>,
        ],
        image: "https://framerusercontent.com/images/5qeJmi3ALthM0cIa4OXf6Fm2K9M.webp?width=640&height=529",
        imageAlt: "Exclusive community of like-minded entrepreneurs",
        imagePosition: "left" as const,
    },
];

export function AccessSection() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section heading */}
                <SectionReveal className="text-center mb-20 md:mb-28">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <svg className="w-7 h-7 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide">
                            You Will Get{" "}
                            <span className="text-gold-gradient font-black">Access To</span>
                        </h2>
                    </div>
                </SectionReveal>

                {/* Content blocks */}
                <div className="space-y-24 md:space-y-32">
                    {accessBlocks.map((block, index) => (
                        <SectionReveal key={index} delay={0.1}>
                            <div
                                className={`flex flex-col gap-10 md:gap-16 items-center ${block.imagePosition === "left"
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Image */}
                                <motion.div
                                    className="w-full md:w-1/2 flex-shrink-0"
                                    initial={{
                                        opacity: 0,
                                        x: block.imagePosition === "left" ? -60 : 60,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <div className="relative rounded-2xl overflow-hidden gold-border-glow">
                                        <img
                                            src={block.image}
                                            alt={block.imageAlt}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                        />
                                        {/* Subtle gold shimmer overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/5 pointer-events-none" />
                                    </div>
                                </motion.div>

                                {/* Text content */}
                                <motion.div
                                    className="w-full md:w-1/2"
                                    initial={{
                                        opacity: 0,
                                        x: block.imagePosition === "left" ? 60 : -60,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                                >
                                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide mb-6 leading-tight">
                                        {block.title}
                                    </h3>

                                    <div className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
                                        {block.description}
                                    </div>

                                    {block.checks.length > 0 && (
                                        <div className="space-y-4">
                                            {block.checks.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3 glass-card px-5 py-4 rounded-xl"
                                                    initial={{ opacity: 0, y: 15 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: 0.3 + i * 0.1,
                                                        duration: 0.5,
                                                    }}
                                                >
                                                    {checkIcon}
                                                    <span className="text-white/70 text-sm md:text-base font-medium">
                                                        {item}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                {/* CTA at bottom */}
                <SectionReveal delay={0.2} className="text-center mt-20">
                    <a href="#pricing" className="btn-gold text-lg pulse-cta inline-block">
                        Join The Life Of An Entrepreneur
                    </a>
                    <p className="mt-4 text-white/30 text-sm flex items-center justify-center gap-2">
                        <span className="text-gold">$</span>
                        Lock-in your price before it increases.{" "}
                        <span className="text-gold font-semibold">Act fast.</span>
                    </p>
                </SectionReveal>
            </div>
        </section>
    );
}
