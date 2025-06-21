"use client";

import { useState } from "react";
import { User, Menu, X } from "lucide-react";
import PickleballLogo from "./PickleballLogo";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-white/80 hover:text-neon-cyan transition-colors duration-300 font-medium hover:animate-glow"
                    >
                        Tournaments
                    </Link>
                </nav>

                {/* Profile Icon */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSignedIn(!isSignedIn)}
                        className="p-2 rounded-full bg-glass-gradient border border-white/20 backdrop-blur-sm hover:shadow-neon-cyan transition-all duration-300 group"
                    >
                        <User className="w-5 h-5 text-neon-cyan group-hover:animate-pulse" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-full bg-glass-gradient border border-white/20 backdrop-blur-sm hover:shadow-neon-pink transition-all duration-300"
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5 text-neon-pink" />
                        ) : (
                            <Menu className="w-5 h-5 text-neon-pink" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden backdrop-blur-lg bg-black/30 border-t border-white/20">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-white/80 hover:text-neon-cyan transition-colors duration-300 font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tournaments
                        </Link>
                        <Link
                            href="/profile"
                            className="text-white/80 hover:text-neon-green transition-colors duration-300 font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            My Profile
                        </Link>
                        {!isSignedIn && (
                            <Link
                                href="/signin"
                                className="text-white/80 hover:text-neon-pink transition-colors duration-300 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
