"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    tier: string;
    category: string;
    isLocked: boolean;
}

interface DashboardClientProps {
    user: { name: string; email: string; image: string };
    subscription: {
        plan: string;
        status: string;
        currentPeriodEnd: string | null;
    } | null;
    videos: Video[];
}

export function DashboardClient({ user, subscription, videos }: DashboardClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [verifying, setVerifying] = useState(false);

    const isActive = subscription?.status === "active";
    const planLabel = subscription?.plan === "master" ? "Master Pack" : "Learner Pack";

    // Auto-verify payment on redirect from Stripe
    useEffect(() => {
        const sessionId = searchParams.get("session_id");
        const payment = searchParams.get("payment");

        if (payment === "success" && sessionId && !isActive) {
            setVerifying(true);
            fetch("/api/payments/verify-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ session_id: sessionId }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        // Reload page to get updated subscription data
                        router.refresh();
                    }
                })
                .catch(console.error)
                .finally(() => setVerifying(false));
        }
    }, [searchParams, isActive, router]);

    return (
        <div className="min-h-screen pt-20 pb-16">
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-b from-black via-black-light to-black -z-10" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04)_0%,transparent_50%)] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        {user.image && (
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-14 h-14 rounded-full border-2 border-gold/30"
                            />
                        )}
                        <div>
                            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">
                                Welcome, <span className="text-gold-gradient">{user.name.split(" ")[0]}</span>
                            </h1>
                            <p className="text-white/40 text-sm">{user.email}</p>
                        </div>
                    </div>

                    {/* Subscription Status */}
                    {verifying ? (
                        <div className="glass-card gold-border-glow p-6 rounded-xl inline-flex items-center gap-4">
                            <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                            <div>
                                <p className="text-gold font-medium">Activating your subscription...</p>
                                <p className="text-white/30 text-xs mt-1">Verifying payment with Stripe</p>
                            </div>
                        </div>
                    ) : isActive ? (
                        <div className="glass-card gold-border-glow p-6 rounded-xl inline-flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                            <div>
                                <p className="text-white font-medium">
                                    {planLabel} — <span className="text-emerald-400">Active</span>
                                </p>
                                {subscription.currentPeriodEnd && (
                                    <p className="text-white/30 text-xs mt-1">
                                        Renews {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="glass-card border border-yellow-500/20 p-6 rounded-xl">
                            <p className="text-yellow-400 font-medium mb-2">No Active Subscription</p>
                            <p className="text-white/40 text-sm mb-4">
                                Subscribe to unlock exclusive content and start your journey.
                            </p>
                            <a href="/#pricing" className="btn-gold text-sm inline-block">
                                View Plans
                            </a>
                        </div>
                    )}
                </motion.div>

                {/* Video Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="font-serif text-2xl font-bold text-white mb-8">
                        Your Content Library
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video, i) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                            >
                                {video.isLocked ? (
                                    <div className="glass-card rounded-xl overflow-hidden opacity-60 group">
                                        <div className="relative aspect-video">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover filter blur-[2px]"
                                            />
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                                <div className="text-center">
                                                    <svg className="w-10 h-10 text-gold/50 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="text-gold/60 text-xs uppercase tracking-wider">
                                                        {video.tier === "master" ? "Master Pack" : "Subscribe"} Required
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <span className="text-gold/40 text-xs uppercase tracking-wider">{video.category}</span>
                                            <h3 className="text-white/50 font-semibold mt-1 text-sm">{video.title}</h3>
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={`/dashboard/watch/${video.id}`}>
                                        <div className="glass-card rounded-xl overflow-hidden group hover:gold-border-glow transition-all duration-300 cursor-pointer">
                                            <div className="relative aspect-video overflow-hidden">
                                                <img
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-white/60 text-xs">
                                                    {video.duration}
                                                </div>
                                                {/* Play button */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="w-14 h-14 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <span className="text-gold/60 text-xs uppercase tracking-wider">{video.category}</span>
                                                <h3 className="text-white font-semibold mt-1 text-sm group-hover:text-gold transition-colors">
                                                    {video.title}
                                                </h3>
                                                <p className="text-white/30 text-xs mt-2 line-clamp-2">{video.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
