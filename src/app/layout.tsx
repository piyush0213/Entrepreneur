import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { Providers } from "@/components/Providers";
import { AuthButton } from "@/components/AuthButton";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "The Life Of An Entrepreneur — Learn Skills. Build Confidence. Earn Money.",
    description:
        "Join The Life Of An Entrepreneur and master the skills that build real-world success. Leadership, sales, marketing, psychology, and more — designed to transform your future.",
    keywords: [
        "entrepreneur",
        "business skills",
        "leadership",
        "sales training",
        "marketing",
        "personal development",
        "online education",
    ],
    openGraph: {
        title: "The Life Of An Entrepreneur",
        description: "Learn Skills. Build Confidence. Earn Money.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <Providers>
                    {/* Fixed auth nav */}
                    <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
                        <AuthButton />
                    </nav>
                    <CursorGlow />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
