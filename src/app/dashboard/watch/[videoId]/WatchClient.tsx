"use client";

import { motion } from "framer-motion";
import { ProtectedVideoPlayer } from "@/components/ProtectedVideoPlayer";
import Link from "next/link";

interface WatchClientProps {
    videoId: string;
    title: string;
    description: string;
    userEmail: string;
}

export function WatchClient({ videoId, title, description, userEmail }: WatchClientProps) {
    return (
        <div className="min-h-screen pt-20 pb-16">
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-b from-black via-black-light to-black -z-10" />

            <div className="max-w-5xl mx-auto px-6">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8"
                >
                    <Link
                        href="/dashboard"
                        className="text-gold/50 hover:text-gold text-sm transition-colors inline-flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Dashboard
                    </Link>
                </motion.div>

                {/* Video Player */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <ProtectedVideoPlayer videoId={videoId} userEmail={userEmail} />
                </motion.div>

                {/* Video Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-8"
                >
                    <h1 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    <p className="text-white/40 text-base leading-relaxed max-w-3xl">
                        {description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
