"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion";

export function AuthButton() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
        );
    }

    if (session?.user) {
        return (
            <div className="flex items-center gap-3">
                <a
                    href="/dashboard"
                    className="text-gold/70 hover:text-gold text-sm font-medium transition-colors"
                >
                    Dashboard
                </a>
                <button
                    onClick={() => signOut()}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors cursor-pointer"
                >
                    Sign Out
                </button>
                {session.user.image && (
                    <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="w-9 h-9 rounded-full border border-gold/30"
                    />
                )}
            </div>
        );
    }

    return (
        <motion.button
            onClick={() => signIn("google")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/20 bg-gold/5 hover:bg-gold/10 transition-colors cursor-pointer"
        >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                    fill="#D4AF37"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                    fill="#D4AF37"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                    fill="#B8960C"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                    fill="#B8960C"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
            </svg>
            <span className="text-gold text-sm font-medium">Sign In</span>
        </motion.button>
    );
}
