"use client";

import { useState } from "react";
import { User } from "lucide-react";
import PickleballLogo from "./PickleballLogo";
import Link from "next/link";

export default function Header() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-glass">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo and Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <PickleballLogo className="w-10 h-10 group-hover:animate-spin transition-transform duration-500" />
                    <div className="flex flex-col">
                        <span className="text-neon-cyan font-bold text-xl animate-glow tracking-wider">
                            PICKLEBALL
                        </span>
                        <span className="text-neon-pink text-sm font-semibold -mt-1 animate-glow">
                            TOURNAMENTS
                        </span>
                    </div>
                </Link>

                {/* Profile Icon */}
                <div className="flex items-center gap-4 ml-auto">
                    <button
                        onClick={() => {
                            if (isSignedIn) {
                                setIsSignedIn(false);
                                window.location.href = "/profile";
                            } else {
                                window.location.href = "/signin";
                            }
                        }}
                        className="p-2 rounded-full bg-glass-gradient border border-white/20 backdrop-blur-sm hover:shadow-neon-cyan transition-all duration-300 group"
                    >
                        <User className="w-5 h-5 text-neon-cyan group-hover:animate-pulse" />
                    </button>
                </div>
            </div>
        </header>
    );
}
