"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import PickleballLogo from "@/components/PickleballLogo";

export default function Dashboard() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const user = session?.user;

    // Redirect to sign-in if unauthenticated once loading finishes
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/signin");
        }
    }, [status, router]);

    const handleSignOut = () => {
        signOut({ callbackUrl: "/signin" });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin h-12 w-12 border-4 border-neon-cyan border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 px-4">
            {/* Header */}
            <header className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-4 mb-8 max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-white animate-glow">
                        {user?.name ?? "User"}
                    </h2>
                    {user?.email && (
                        <span className="text-neon-cyan text-sm">
                            {user.email}
                        </span>
                    )}
                </div>
                <button
                    onClick={handleSignOut}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
                >
                    Sign Out
                </button>
            </header>

            {/* Main Content */}
            <main className="container mx-auto max-w-6xl py-8 px-4">
                <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-glass">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3 text-neon-cyan">
                                Tournaments History
                            </h3>
                            <p className="text-white/60">
                                No tournaments history. Check back soon!
                            </p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3 text-neon-pink">
                                Upcoming Tournaments
                            </h3>
                            <p className="text-white/60">
                                No tournaments scheduled. Check back soon!
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
