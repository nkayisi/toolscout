'use client';

import { useState } from 'react';
import { categories } from '@/app/lib/tools';

export interface FilterState {
    categories: string[];
    pricing: string[];
}

interface ToolFiltersProps {
    onFiltersChange: (filters: FilterState) => void;
}

export function ToolFilters({ onFiltersChange }: ToolFiltersProps) {
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        pricing: []
    });

    const pricingOptions = ['Free', 'Paid', 'Freemium', 'Open Source'];

    const updateFilters = (newFilters: FilterState) => {
        setFilters(newFilters);
        onFiltersChange(newFilters);
    };

    const toggleCategory = (categoryId: string) => {
        const newCategories = filters.categories.includes(categoryId)
            ? filters.categories.filter(c => c !== categoryId)
            : [...filters.categories, categoryId];

        updateFilters({ ...filters, categories: newCategories });
    };

    const togglePricing = (pricing: string) => {
        const newPricing = filters.pricing.includes(pricing)
            ? filters.pricing.filter(p => p !== pricing)
            : [...filters.pricing, pricing];

        updateFilters({ ...filters, pricing: newPricing });
    };

    const clearAllFilters = () => {
        updateFilters({ categories: [], pricing: [] });
    };

    const hasActiveFilters = filters.categories.length > 0 || filters.pricing.length > 0;

    return (
        <div className="space-y-6">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                    </div>
                    {hasActiveFilters && (
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                            {filters.categories.length + filters.pricing.length} active
                        </span>
                    )}
                </div>

                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                        Clear all
                    </button>
                )}
            </div>

            {/* Quick Categories */}
            <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => toggleCategory(category.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filters.categories.includes(category.id)
                                ? 'bg-accent text-background shadow-sm'
                                : 'bg-card-bg border border-card-border text-muted hover:text-foreground hover:border-accent/50'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pricing */}
            <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Pricing</h3>
                <div className="flex flex-wrap gap-2">
                    {pricingOptions.map((pricing) => (
                        <button
                            key={pricing}
                            onClick={() => togglePricing(pricing)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filters.pricing.includes(pricing)
                                ? 'bg-accent-secondary text-background shadow-sm'
                                : 'bg-card-bg border border-card-border text-muted hover:text-foreground hover:border-accent-secondary/50'
                                }`}
                        >
                            {pricing}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
                <div className="flex flex-wrap gap-2">
                    {filters.categories.map((categoryId) => {
                        const category = categories.find(c => c.id === categoryId);
                        return category ? (
                            <span
                                key={categoryId}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                            >
                                {category.name}
                                <button
                                    onClick={() => toggleCategory(categoryId)}
                                    className="hover:text-accent-secondary transition-colors"
                                >
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </span>
                        ) : null;
                    })}

                    {filters.pricing.map((pricing) => (
                        <span
                            key={pricing}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20"
                        >
                            {pricing}
                            <button
                                onClick={() => togglePricing(pricing)}
                                className="hover:text-accent-secondary/70 transition-colors"
                            >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
