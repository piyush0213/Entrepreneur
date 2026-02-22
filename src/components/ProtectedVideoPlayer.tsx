"use client";

import { useEffect, useRef, useState } from "react";

interface ProtectedVideoPlayerProps {
    videoId: string;
    userEmail: string;
}

export function ProtectedVideoPlayer({ videoId, userEmail }: ProtectedVideoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sourceUrl, setSourceUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Fetch video source from protected API
    useEffect(() => {
        async function fetchVideo() {
            try {
                const res = await fetch(`/api/videos/${videoId}`);
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || "Failed to load video");
                }
                const data = await res.json();
                setSourceUrl(data.sourceUrl);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load video");
            } finally {
                setLoading(false);
            }
        }
        fetchVideo();
    }, [videoId]);

    // Anti-piracy protections
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            return false;
        };

        // Block keyboard shortcuts (PrintScreen, F12, Ctrl+Shift+I, etc.)
        const handleKeyDown = (e: KeyboardEvent) => {
            // PrintScreen
            if (e.key === "PrintScreen") {
                e.preventDefault();
                navigator.clipboard.writeText("");
                document.body.style.filter = "blur(20px)";
                setTimeout(() => {
                    document.body.style.filter = "none";
                }, 1000);
            }

            // F12 (Dev Tools)
            if (e.key === "F12") {
                e.preventDefault();
            }

            // Ctrl+Shift+I (Dev Tools)
            if (e.ctrlKey && e.shiftKey && e.key === "I") {
                e.preventDefault();
            }

            // Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && e.key === "J") {
                e.preventDefault();
            }

            // Ctrl+U (View Source)
            if (e.ctrlKey && e.key === "u") {
                e.preventDefault();
            }

            // Ctrl+S (Save)
            if (e.ctrlKey && e.key === "s") {
                e.preventDefault();
            }

            // Ctrl+P (Print)
            if (e.ctrlKey && e.key === "p") {
                e.preventDefault();
            }
        };

        // Blur video on tab/window switch (anti-recording)
        const handleVisibilityChange = () => {
            const iframe = containerRef.current?.querySelector("iframe");
            if (document.hidden && iframe) {
                iframe.style.filter = "blur(30px)";
            } else if (iframe) {
                iframe.style.filter = "none";
            }
        };

        // Disable drag
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        document.addEventListener("dragstart", handleDragStart);

        // Disable text selection on the page while watching
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            document.removeEventListener("dragstart", handleDragStart);
            document.body.style.userSelect = "";
            document.body.style.webkitUserSelect = "";
        };
    }, []);

    if (loading) {
        return (
            <div className="w-full aspect-video rounded-2xl bg-white/5 flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                    <span className="text-white/40 text-sm">Loading secure player...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full aspect-video rounded-2xl bg-red-500/5 border border-red-500/20 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-400 font-medium mb-2">{error}</p>
                    <a href="/dashboard" className="text-gold/60 hover:text-gold text-sm transition-colors">
                        ← Back to Dashboard
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Video player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden gold-border-glow">
                {sourceUrl && (
                    <iframe
                        src={sourceUrl}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Protected Content"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
                    />
                )}

                {/* Invisible watermark overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-10 select-none"
                    style={{
                        background: "transparent",
                        mixBlendMode: "overlay",
                    }}
                >
                    <div
                        className="w-full h-full flex items-center justify-center opacity-[0.03] text-white text-xs rotate-[-20deg]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                                -45deg,
                                transparent,
                                transparent 200px,
                                rgba(255,255,255,0.02) 200px,
                                rgba(255,255,255,0.02) 201px
                            )`,
                        }}
                    >
                        <span className="whitespace-nowrap">
                            {userEmail} • Licensed Content
                        </span>
                    </div>
                </div>

                {/* Anti-screenshot overlay — becomes visible during screen capture */}
                <div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                        background: "transparent",
                        backdropFilter: "none",
                    }}
                />
            </div>

            {/* Security notice */}
            <div className="mt-4 flex items-center gap-2 text-white/20 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>This content is protected. Screenshots and screen recording are disabled.</span>
            </div>
        </div>
    );
}
