'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { tools, searchTools, categories } from '@/app/lib/tools';
import { ToolCard, ToolSearch, ToolFilters, FilterState } from '@components/tools';
import { Navbar } from '@components/landing-page';

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

export default function ToolsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        pricing: []
    });

    const filteredTools = useMemo(() => {
        let result = searchQuery ? searchTools(searchQuery) : tools;

        // Apply category filters
        if (filters.categories.length > 0) {
            result = result.filter(tool =>
                tool.categories.some(category => filters.categories.includes(category))
            );
        }

        // Apply pricing filters
        if (filters.pricing.length > 0) {
            result = result.filter(tool => filters.pricing.includes(tool.pricing));
        }

        return result;
    }, [searchQuery, filters]);

    return (
        <div className="min-h-screen bg-background vertical-lines">
            {/* Navbar */}
            <Navbar onSearchClick={() => { }} />

            {/* Header */}
            <motion.div
                className="border-b border-card-border bg-background/80 backdrop-blur-sm pt-16 vertical-lines"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <motion.div variants={itemVariants} initial="hidden" animate="visible">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Explore Development Tools
                        </h1>
                        <p className="text-xl text-muted max-w-3xl">
                            Browse a curated collection of tools used to build modern software.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-6 py-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Search and Stats */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <ToolSearch onSearch={setSearchQuery} />
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted">
                                {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
                                {searchQuery && (
                                    <span> for "{searchQuery}"</span>
                                )}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                Grid view
                            </div>
                        </div>
                    </motion.div>

                    {/* Filters */}
                    <motion.div variants={itemVariants}>
                        <ToolFilters onFiltersChange={setFilters} />
                    </motion.div>

                    {/* Tools Grid */}
                    {filteredTools.length > 0 ? (
                        <motion.div
                            variants={containerVariants}
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            {filteredTools.map((tool) => (
                                <motion.div key={tool.id} variants={itemVariants}>
                                    <ToolCard tool={tool} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        /* Empty State */
                        <motion.div
                            variants={itemVariants}
                            className="text-center py-16"
                        >
                            <div className="max-w-md mx-auto">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-card-bg border border-card-border flex items-center justify-center">
                                    <svg className="w-8 h-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    No tools match your search
                                </h3>
                                <p className="text-muted mb-6">
                                    Try adjusting your search terms or filters to find what you're looking for.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setFilters({ categories: [], pricing: [] });
                                    }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-background font-medium hover:bg-accent/90 transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
