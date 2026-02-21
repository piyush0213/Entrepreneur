"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/SectionReveal";

const skills = [
    {
        icon: "🗣️",
        title: "Communication",
        description:
            "Master the art of persuasion, negotiation, and powerful speaking that commands attention.",
    },
    {
        icon: "👑",
        title: "Leadership",
        description:
            "Learn to inspire, lead, and build teams that execute at the highest level.",
    },
    {
        icon: "💎",
        title: "Sales",
        description:
            "Understand human psychology and close deals with confidence and integrity.",
    },
    {
        icon: "📈",
        title: "Marketing",
        description:
            "Build brands, create demand, and attract customers using proven strategies.",
    },
    {
        icon: "🧠",
        title: "Psychology",
        description:
            "Decode human behavior, build influence, and understand what drives decisions.",
    },
    {
        icon: "⚡",
        title: "Mindset",
        description:
            "Develop unshakable confidence, discipline, and the mental toughness of a winner.",
    },
];

function SkillCard({
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
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
            }}
            className="glass-card gold-border-glow p-8 cursor-default group"
        >
            <div className="text-3xl mb-5 w-14 h-14 flex items-center justify-center rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300 group-hover:shadow-gold-glow-sm">
                {icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {title}
            </h3>
            <p className="text-white/40 group-hover:text-white/60 leading-relaxed text-sm transition-colors duration-300">
                {description}
            </p>
        </motion.div>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="section-padding relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.04)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <SectionReveal className="text-center mb-20">
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        The Curriculum
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Skills You Will </span>
                        <span className="text-gold-gradient">Master</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        Every module is designed to give you practical, real-world skills
                        that translate directly into results.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.title} {...skill} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
