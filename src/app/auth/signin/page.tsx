"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black-light to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md mx-auto px-6"
            >
                <div className="glass-card gold-border-glow p-10 rounded-2xl text-center">
                    {/* Logo / Title */}
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient mb-3">
                        Welcome Back
                    </h1>
                    <p className="text-white/40 text-sm mb-10">
                        Sign in to access your exclusive content
                    </p>

                    {/* Google Sign In */}
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-white/80 group-hover:text-white font-medium transition-colors">
                            Continue with Google
                        </span>
                    </button>

                    <p className="text-white/20 text-xs mt-8">
                        Only verified Google accounts are accepted.
                        <br />
                        No fake signups allowed.
                    </p>

                    {/* Back to home */}
                    <a
                        href="/"
                        className="inline-block mt-6 text-gold/50 hover:text-gold text-sm transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
