import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: "#050505",
                    light: "#0a0a0a",
                    card: "#0d0d0d",
                    border: "#1a1a1a",
                },
                gold: {
                    DEFAULT: "#D4AF37",
                    light: "#FFD700",
                    dark: "#B8960C",
                    muted: "#A8922C",
                },
            },
            fontFamily: {
                serif: ["Playfair Display", "Georgia", "serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)",
                "gold-gradient-text": "linear-gradient(90deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)",
                "dark-gradient": "linear-gradient(180deg, #050505 0%, #0a0a0a 50%, #050505 100%)",
                "glass-gradient": "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(255,215,0,0.05) 100%)",
            },
            boxShadow: {
                "gold-glow": "0 0 20px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.1)",
                "gold-glow-lg": "0 0 40px rgba(212,175,55,0.4), 0 0 80px rgba(212,175,55,0.2)",
                "gold-glow-sm": "0 0 10px rgba(212,175,55,0.2)",
                "card": "0 8px 32px rgba(0,0,0,0.4)",
            },
            animation: {
                "shimmer": "shimmer 3s ease-in-out infinite",
                "pulse-gold": "pulseGold 2s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                shimmer: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                pulseGold: {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.3)" },
                    "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.3)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 20px rgba(212,175,55,0.2)" },
                    "100%": { boxShadow: "0 0 40px rgba(212,175,55,0.5), 0 0 80px rgba(212,175,55,0.2)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
