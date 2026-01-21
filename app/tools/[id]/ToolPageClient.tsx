'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tool } from '@/app/lib/tools';
import { ToolHeader, UseCases, ProsCons, ToolMeta, ToolCard } from '@components/tools';
import { Navbar } from '@components/landing-page';

interface ToolPageClientProps {
    tool: Tool;
    alternatives: Tool[];
}

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

export function ToolPageClient({ tool, alternatives }: ToolPageClientProps) {
    return (
        <div className="min-h-screen bg-background vertical-lines">
            {/* Navbar */}
            <Navbar onSearchClick={() => { }} />

            <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Back Navigation */}
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/tools"
                            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to tools
                        </Link>
                    </motion.div>

                    {/* Tool Header */}
                    <motion.div variants={itemVariants}>
                        <ToolHeader tool={tool} />
                    </motion.div>

                    {/* Description */}
                    <motion.div variants={itemVariants}>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-muted leading-relaxed">
                                {tool.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Use Cases */}
                    <motion.div variants={itemVariants}>
                        <UseCases useCases={tool.use_cases} />
                    </motion.div>

                    {/* Key Features */}
                    <motion.div variants={itemVariants}>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                Key Features
                            </h2>
                            <div className="grid gap-3">
                                {tool.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-lg border border-card-border bg-card-bg/30"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-secondary/10 flex items-center justify-center mt-0.5">
                                            <svg className="w-3 h-3 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-muted leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Compatibility */}
                    <motion.div variants={itemVariants}>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                                Tech Compatibility
                            </h2>
                            <div className="p-6 rounded-xl border border-card-border bg-card-bg/30">
                                <div className="flex flex-wrap gap-2">
                                    {tool.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pros & Cons */}
                    <motion.div variants={itemVariants}>
                        <ProsCons pros={tool.pros} cons={tool.cons} />
                    </motion.div>

                    {/* Alternatives */}
                    {alternatives.length > 0 && (
                        <motion.div variants={itemVariants}>
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-foreground mb-6">
                                    Similar Tools
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {alternatives.map((alternative) => (
                                        <ToolCard key={alternative.id} tool={alternative} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Meta Information */}
                    <motion.div variants={itemVariants}>
                        <ToolMeta tool={tool} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
