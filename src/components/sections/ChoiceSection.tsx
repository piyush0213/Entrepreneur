"use client";

import { SectionReveal } from "@/components/SectionReveal";

export function ChoiceSection() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)]" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <SectionReveal className="text-center mb-12">
                    <span className="text-gold/60 text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                        It&apos;s Up To You
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                        <span className="text-white">The Choice Is </span>
                        <span className="text-gold-gradient">Yours</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        Watch what&apos;s possible when you decide to take control of your
                        future. The only thing standing between you and success is one
                        decision.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                    <div className="glass-card gold-border-glow p-2 md:p-3 rounded-2xl max-w-4xl mx-auto">
                        <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                src="https://player.vimeo.com/video/861012892?badge=0&autopause=0&player_id=0&app_id=58479"
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                allowFullScreen
                                title="The Choice Is Yours"
                            />
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}
