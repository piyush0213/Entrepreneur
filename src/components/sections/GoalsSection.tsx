"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";

export function GoalsSection() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.04)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Text content — left */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight uppercase">
                            <span className="text-white">Achieve Your </span>
                            <span className="text-gold-gradient font-black">Goals</span>
                        </h2>

                        <div className="space-y-6 text-white/50 text-base md:text-lg leading-relaxed">
                            <p>
                                <strong className="text-white">Money-making is a skill.</strong>{" "}
                                Like every other skill it can be learned, and the speed at which it
                                is learned depends on your coaches and the learning environment you
                                are taught in.
                            </p>

                            <p>
                                <strong className="text-white">
                                    Our coaches know the business models they teach,
                                </strong>{" "}
                                they know what it takes to be profitable, and they are the first to
                                identify and utilize new disruptive technologies and strategies
                                whenever they appear.
                            </p>

                            <p>
                                <strong className="text-white">THE LIFE OF AN ENTREPRENEUR</strong>{" "}
                                is the ultimate all-in-one learning platform guiding you from making
                                your first dollar online to{" "}
                                <strong className="text-white">
                                    scaling into a multi-million dollar business.
                                </strong>
                            </p>

                            <p>
                                <span className="text-gold font-semibold">
                                    There is no better place on the planet
                                </span>{" "}
                                <strong className="text-white">
                                    to learn how to make money online today.
                                </strong>
                            </p>
                        </div>
                    </motion.div>

                    {/* Image — right */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden gold-border-glow">
                            <img
                                src="https://framerusercontent.com/images/TSHdHn9kwxNGmPfuU3O453Q.png?width=850&height=837"
                                alt="Students achieving their financial goals"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
