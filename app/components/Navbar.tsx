"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavbarProps = {
    onSearchClick?: () => void;
};

export function Navbar({ onSearchClick }: NavbarProps) {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md"
        >
            <nav className="mx-auto max-w-6xl px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center transition-transform group-hover:scale-105">
                            <span className="text-background font-bold text-sm">TS</span>
                        </div>
                        <span className="text-lg font-semibold text-foreground">ToolScout</span>
                    </Link>

                    {/* Navigation links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#what" className="text-sm text-muted hover:text-foreground transition-colors">
                            About
                        </Link>
                        <Link href="#categories" className="text-sm text-muted hover:text-foreground transition-colors">
                            Categories
                        </Link>
                        <Link href="#submit" className="text-sm text-muted hover:text-foreground transition-colors">
                            Submit
                        </Link>
                    </div>

                    {/* Search button */}
                    <button
                        onClick={onSearchClick}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-card-border bg-card-bg/50 text-muted hover:text-foreground hover:border-accent/50 transition-all group"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-sm hidden sm:inline">Search tools...</span>
                        <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-card-bg text-xs text-muted border border-card-border">
                            <span className="text-[10px]">⌘</span>K
                        </kbd>
                    </button>
                </div>
            </nav>
        </motion.header>
    );
}
