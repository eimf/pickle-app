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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            {/* Header */}
            <header className="p-4 border-b border-white/10">
                <div className="container mx-auto flex items-center justify-between">
                    <button
                        onClick={handleSignOut}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm"
                    >
                        Sign Out
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4">
                <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-glass">
                    <h2 className="text-3xl font-bold mb-6">
                        Welcome, {user?.name ?? user?.email ?? "User"}!
                    </h2>
                    <p className="text-white/70 mb-8">
                        You have successfully signed in to your PickleCristoBall
                        account.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3 text-neon-cyan">
                                Your Profile
                            </h3>
                            <div className="space-y-2 text-white/80">
                                <p>
                                    <span className="text-white/50">Name:</span>{" "}
                                    {user?.name || "—"}
                                </p>
                                <p>
                                    <span className="text-white/50">
                                        Email:
                                    </span>{" "}
                                    {user?.email}
                                </p>
                            </div>
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
