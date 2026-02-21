"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function ResultsSection() {
    return (
        <section id="results" className="section-padding relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <SectionReveal className="text-center mb-20">
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        Proof
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Real Skills → </span>
                        <span className="text-gold-gradient">Real Results</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        This is what happens when you commit to mastering skills that
                        actually matter in the real world.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
                    <AnimatedCounter end={50000} suffix="+" label="Students Enrolled" />
                    <AnimatedCounter end={97} suffix="%" label="Completion Rate" />
                    <AnimatedCounter end={12} suffix="+" label="Skill Modules" />
                    <AnimatedCounter end={500} suffix="+" label="Hours of Content" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            quote:
                                "This program didn't just teach me skills — it changed who I am. I went from completely lost to running my own business.",
                            name: "Alex M.",
                            role: "Business Owner",
                        },
                        {
                            quote:
                                "The communication and sales modules alone were worth 100x the price. I closed my first $10k deal within 3 months.",
                            name: "Sarah K.",
                            role: "Sales Professional",
                        },
                        {
                            quote:
                                "I've taken dozens of courses. Nothing compares. The mindset training here is on another level entirely.",
                            name: "James R.",
                            role: "Entrepreneur",
                        },
                    ].map((testimonial, i) => (
                        <SectionReveal key={testimonial.name} delay={i * 0.15}>
                            <div className="glass-card p-8 h-full flex flex-col">
                                <div className="text-gold/30 text-4xl font-serif mb-4">&ldquo;</div>
                                <p className="text-white/60 leading-relaxed flex-1 mb-6 text-sm">
                                    {testimonial.quote}
                                </p>
                                <div>
                                    <div className="font-serif font-bold text-white">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-gold/50 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
