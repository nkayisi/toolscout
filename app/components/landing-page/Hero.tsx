"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

type HeroProps = {
    onSearchClick?: () => void;
};

const floatingTools = [
    { name: "React", icon: "⚛️", color: "accent", position: "top-24 sm:top-28 md:top-32 left-2 sm:left-8 md:left-16 lg:left-24 xl:left-32", rotation: -12, delay: 0.2 },
    { name: "Node.js", icon: "🟢", color: "accent-secondary", position: "top-40 sm:top-44 md:top-48 right-2 sm:right-6 md:right-12 lg:right-20 xl:right-28", rotation: 8, delay: 0.4 },
    { name: "PostgreSQL", icon: "🐘", color: "accent", position: "bottom-52 sm:bottom-48 md:bottom-44 left-2 sm:left-10 md:left-20 lg:left-32 xl:left-40", rotation: 6, delay: 0.6 },
    { name: "Docker", icon: "🐳", color: "accent-secondary", position: "bottom-36 sm:bottom-32 md:bottom-28 right-2 sm:right-12 md:right-24 lg:right-36 xl:right-44", rotation: -8, delay: 0.8 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

export function Hero({ onSearchClick }: HeroProps) {
    return (
        <section className="relative min-h-[90vh] py-20 flex flex-col items-center justify-center px-6 overflow-hidden vertical-lines">
            {/* Background grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-60" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[128px] animate-pulse-glow" />

            {/* Floating tool cards */}
            {floatingTools.map((tool) => (
                <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8, rotate: tool.rotation }}
                    animate={{
                        opacity: 0.7,
                        scale: 1,
                        rotate: tool.rotation,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        delay: tool.delay,
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className={`absolute ${tool.position} flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg tool-card z-20 scale-75 sm:scale-90 md:scale-100`}
                >
                    <span className="text-sm sm:text-base md:text-lg">{tool.icon}</span>
                    <span className={`text-[10px] sm:text-xs font-medium ${tool.color === 'accent' ? 'text-accent' : 'text-accent-secondary'}`}>{tool.name}</span>
                </motion.div>
            ))}

            <motion.div
                className="relative z-10 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Main headline */}
                <motion.h1 variants={itemVariants} className="text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    <span className="text-foreground">Discover the right</span>
                    <br />
                    <span className="gradient-text">development tools</span>
                    <span className="text-foreground">, faster.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p variants={itemVariants} className="mt-8 max-w-2xl mx-auto text-center text-lg text-muted md:text-xl leading-relaxed">
                    ToolScout helps developers explore, compare, and save the best tools for building modern applications.
                </motion.p>

                {/* CTA buttons */}
                <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Button variant="primary" onClick={onSearchClick}>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Explore tools
                        </span>
                    </Button>
                    <Button href="#submit" variant="secondary">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            Submit a tool
                        </span>
                    </Button>
                </motion.div>

                {/* Code snippet preview */}
                <motion.div variants={itemVariants} className="mt-16 max-w-2xl mx-auto">
                    <div className="glow-box rounded-xl border border-card-border bg-card-bg/80 backdrop-blur-sm overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-card-bg">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs text-muted code-block ml-2">toolscout.dev</span>
                        </div>
                        <div className="p-6 code-block text-sm">
                            <div className="flex items-center gap-3 text-muted">
                                <span className="text-accent">$</span>
                                <span className="text-foreground">toolscout search</span>
                                <span className="text-accent-secondary">"database"</span>
                                <span className="text-muted">--category=backend</span>
                            </div>
                            <div className="mt-4 space-y-2 text-muted/80">
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✓</span>
                                    <span>PostgreSQL</span>
                                    <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent">relational</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✓</span>
                                    <span>MongoDB</span>
                                    <span className="text-xs px-2 py-0.5 rounded bg-accent-secondary/10 text-accent-secondary">document</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-400">✓</span>
                                    <span>Redis</span>
                                    <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent">key-value</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
