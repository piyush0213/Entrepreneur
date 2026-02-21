"use client";

export function Footer() {
    return (
        <footer className="relative pb-10 pt-20 px-6">
            {/* Gold divider */}
            <div className="gold-divider mb-12" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-xl font-bold text-gold-gradient mb-1">
                            The Life Of An Entrepreneur
                        </h3>
                        <p className="text-white/30 text-sm">
                            Learn Skills. Build Confidence. Earn Money.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {[
                            {
                                label: "Twitter",
                                path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                            },
                            {
                                label: "Instagram",
                                path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm2 12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-7a3 3 0 100 6 3 3 0 000-6zm4.5-.5a1 1 0 100-2 1 1 0 000 2z",
                            },
                            {
                                label: "YouTube",
                                path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
                            },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href="#"
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
                            >
                                <svg
                                    className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors duration-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d={social.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="gold-divider mt-10 mb-6" />
                <div className="text-center">
                    <p className="text-white/20 text-sm">
                        © {new Date().getFullYear()} The Life Of An Entrepreneur. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
