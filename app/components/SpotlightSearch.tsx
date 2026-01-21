"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tool = {
    name: string;
    category: string;
    icon: string;
    description: string;
};

const mockTools: Tool[] = [
    { name: "React", category: "Frontend", icon: "⚛️", description: "A JavaScript library for building user interfaces" },
    { name: "Next.js", category: "Frontend", icon: "▲", description: "The React framework for production" },
    { name: "Vue.js", category: "Frontend", icon: "💚", description: "The progressive JavaScript framework" },
    { name: "Node.js", category: "Backend", icon: "🟢", description: "JavaScript runtime built on Chrome's V8 engine" },
    { name: "Express", category: "Backend", icon: "🚂", description: "Fast, unopinionated web framework for Node.js" },
    { name: "PostgreSQL", category: "Databases", icon: "🐘", description: "Powerful open source relational database" },
    { name: "MongoDB", category: "Databases", icon: "🍃", description: "Document-oriented NoSQL database" },
    { name: "Redis", category: "Databases", icon: "🔴", description: "In-memory data structure store" },
    { name: "Docker", category: "DevOps", icon: "🐳", description: "Platform for developing and running containers" },
    { name: "Kubernetes", category: "DevOps", icon: "☸️", description: "Container orchestration platform" },
    { name: "Vercel", category: "DevOps", icon: "▲", description: "Platform for frontend frameworks and static sites" },
    { name: "Stripe", category: "APIs", icon: "💳", description: "Payment processing platform for the internet" },
    { name: "OpenAI", category: "AI & Automation", icon: "🤖", description: "AI research and deployment company" },
    { name: "TailwindCSS", category: "Frontend", icon: "🎨", description: "Utility-first CSS framework" },
    { name: "Prisma", category: "Backend", icon: "◮", description: "Next-generation ORM for Node.js and TypeScript" },
    { name: "Supabase", category: "Backend", icon: "⚡", description: "Open source Firebase alternative" },
];

type SpotlightSearchProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function SpotlightSearch({ isOpen, onClose }: SpotlightSearchProps) {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);

    const filteredTools = mockTools.filter(
        (tool) =>
            tool.name.toLowerCase().includes(query.toLowerCase()) ||
            tool.category.toLowerCase().includes(query.toLowerCase()) ||
            tool.description.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery("");
            setSelectedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                if (isOpen) {
                    onClose();
                }
            }

            if (!isOpen) return;

            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => Math.min(prev + 1, filteredTools.length - 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === "Enter" && filteredTools[selectedIndex]) {
                e.preventDefault();
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, filteredTools, selectedIndex]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    useEffect(() => {
        if (resultsRef.current) {
            const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: "nearest" });
            }
        }
    }, [selectedIndex]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="absolute inset-0 bg-background/20 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Spotlight modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{
                            duration: 1.7,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="relative w-full max-w-2xl mx-4 rounded-2xl border border-card-border bg-card-bg shadow-2xl shadow-black/50 overflow-hidden"
                    >
                        {/* Search input */}
                        <div className="flex items-center gap-3 px-5 py-4 border-b border-card-border">
                            <svg className="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search tools..."
                                className="flex-1 bg-transparent text-foreground text-lg placeholder:text-muted outline-none"
                            />
                            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-card-bg text-xs text-muted border border-card-border">
                                ESC
                            </kbd>
                        </div>

                        {/* Results */}
                        <div ref={resultsRef} className="max-h-[400px] overflow-y-auto p-2">
                            {filteredTools.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="px-4 py-8 text-center text-muted"
                                >
                                    <p className="text-lg">No tools found</p>
                                    <p className="text-sm mt-1">Try a different search term</p>
                                </motion.div>
                            ) : (
                                filteredTools.map((tool, index) => (
                                    <motion.button
                                        key={tool.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.9,
                                            delay: index * 0.03,
                                            ease: "easeOut"
                                        }}
                                        onClick={onClose}
                                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-colors duration-150 ${index === selectedIndex
                                                ? "bg-accent/10 border border-accent/30"
                                                : "hover:bg-card-bg border border-transparent"
                                            }`}
                                    >
                                        <motion.div
                                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-card-bg border border-card-border text-xl"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            {tool.icon}
                                        </motion.div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-foreground">{tool.name}</span>
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                                                    {tool.category}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted truncate mt-0.5">{tool.description}</p>
                                        </div>
                                        {index === selectedIndex && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-xs text-muted"
                                            >
                                                <kbd className="px-1.5 py-0.5 rounded bg-card-bg border border-card-border">↵</kbd>
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-4 py-3 border-t border-card-border bg-card-bg/50 text-xs text-muted">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 rounded bg-card-bg border border-card-border">↑</kbd>
                                    <kbd className="px-1.5 py-0.5 rounded bg-card-bg border border-card-border">↓</kbd>
                                    <span className="ml-1">Navigate</span>
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1.5 py-0.5 rounded bg-card-bg border border-card-border">↵</kbd>
                                    <span className="ml-1">Select</span>
                                </span>
                            </div>
                            <span>{filteredTools.length} tools</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
