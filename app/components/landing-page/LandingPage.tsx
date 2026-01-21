"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Hero,
    Section,
    Button,
    Footer,
    CategoryCard,
    Navbar,
    SpotlightSearch,
    ServerIcon,
    CodeBracketIcon,
    CircleStackIcon,
    CloudIcon,
    BoltIcon,
    SparklesIcon,
    CubeIcon,
} from "./index";

const categories = [
    { name: "Backend", icon: <ServerIcon /> },
    { name: "Frontend", icon: <CodeBracketIcon /> },
    { name: "Databases", icon: <CircleStackIcon /> },
    { name: "DevOps", icon: <CloudIcon /> },
    { name: "APIs", icon: <BoltIcon /> },
    { name: "AI & Automation", icon: <SparklesIcon /> },
    { name: "No-Code / Low-Code", icon: <CubeIcon /> },
];

const whatIsFeatures = [
    "Curated development tools",
    "Clear use cases and descriptions",
    "Organized by category and technology",
    "Built for real-world projects",
];

const whyFeatures = [
    "Curated, not crowded",
    "Focused on real use cases",
    "Clean and distraction-free",
    "Designed for developers",
];

const steps = [
    {
        number: "01",
        title: "Browse or search",
        description: "Explore tools by category, technology, or use case.",
    },
    {
        number: "02",
        title: "Find the right fit",
        description:
            "Understand what each tool is best used for, without marketing noise.",
    },
    {
        number: "03",
        title: "Build smarter",
        description: "Choose tools faster and focus on building your product.",
    },
];

// Animation variants for sections
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
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

export function LandingPage() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen((prev) => !prev);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    return (
        <div className="min-h-screen bg-background">
            <Navbar onSearchClick={openSearch} />
            <SpotlightSearch isOpen={isSearchOpen} onClose={closeSearch} />

            <main className="pt-16">
                {/* Hero Section */}
                <Hero onSearchClick={openSearch} />

                {/* What is ToolScout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                >
                    <Section id="what" className="relative border-t border-card-border overflow-hidden vertical-lines">
                        <div className="absolute inset-0 grid-pattern opacity-30" />
                        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <motion.div variants={itemVariants}>
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 code-block">
                    // about
                                </span>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                                    What is <span className="gradient-text">ToolScout</span>?
                                </h2>
                                <p className="mt-6 text-lg text-muted leading-relaxed">
                                    ToolScout is a curated directory of development tools, built by
                                    developers, for developers. Instead of endless searches, you get
                                    clear descriptions, real use cases, and organized categories.
                                </p>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-2 gap-4"
                                variants={containerVariants}
                            >
                                {whatIsFeatures.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        className="group p-5 rounded-xl border border-card-border bg-card-bg/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card-bg"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-accent/10 to-accent-secondary/10 text-accent">
                                            <span className="text-lg font-bold code-block">0{index + 1}</span>
                                        </div>
                                        <span className="text-sm font-medium text-foreground">{feature}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </Section>
                </motion.div>

                {/* How It Works */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                >
                    <Section className="relative border-t border-card-border vertical-lines">
                        <motion.div className="text-center mb-16" variants={itemVariants}>
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20 code-block">
                // workflow
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                                How It <span className="gradient-text">Works</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            className="relative grid gap-8 md:grid-cols-3"
                            variants={containerVariants}
                        >
                            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                            {steps.map((step) => (
                                <motion.div
                                    key={step.number}
                                    className="relative text-center group"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-card-border bg-card-bg text-xl font-bold text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10">
                                        <span className="gradient-text">{step.number}</span>
                                    </div>
                                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </Section>
                </motion.div>

                {/* Categories */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                >
                    <Section id="categories" className="relative border-t border-card-border overflow-hidden vertical-lines">
                        <div className="absolute inset-0 grid-pattern opacity-20" />
                        <div className="relative">
                            <motion.div className="text-center mb-16" variants={itemVariants}>
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 code-block">
                    // explore
                                </span>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                                    Browse by <span className="gradient-text">Category</span>
                                </h2>
                                <p className="mt-4 text-muted">Explore tools organized by what you need to build.</p>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                                variants={containerVariants}
                            >
                                {categories.map((category, index) => (
                                    <motion.div
                                        key={category.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <CategoryCard
                                            name={category.name}
                                            icon={category.icon}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </Section>
                </motion.div>

                {/* Why ToolScout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                >
                    <Section className="relative border-t border-card-border vertical-lines">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <motion.div className="order-2 lg:order-1" variants={itemVariants}>
                                <div className="glow-box rounded-xl border border-card-border bg-card-bg/80 backdrop-blur-sm overflow-hidden">
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-card-bg">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <span className="text-xs text-muted code-block ml-2">why-toolscout.md</span>
                                    </div>
                                    <div className="p-6 code-block text-sm space-y-3">
                                        {whyFeatures.map((feature, index) => (
                                            <motion.div
                                                key={feature}
                                                className="flex items-center gap-3"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                            >
                                                <span className="text-accent-secondary">-</span>
                                                <span className="text-foreground">[x]</span>
                                                <span className="text-muted">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className="order-1 lg:order-2" variants={itemVariants}>
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20 code-block">
                    // why
                                </span>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                                    Why <span className="gradient-text">ToolScout</span>?
                                </h2>
                                <p className="mt-6 text-lg text-muted leading-relaxed">
                                    ToolScout is not a blog. It&apos;s not a marketplace. It&apos;s a
                                    practical tool for developers who want clarity, not hype.
                                </p>
                            </motion.div>
                        </div>
                    </Section>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                >
                    <Section id="submit" className="relative border-t border-card-border overflow-hidden vertical-lines">
                        <div className="absolute inset-0 grid-pattern opacity-30" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[128px]" />
                        <motion.div className="relative mx-auto max-w-2xl text-center" variants={containerVariants}>
                            <motion.span
                                className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 code-block"
                                variants={itemVariants}
                            >
                                // get started
                            </motion.span>
                            <motion.h2
                                className="text-3xl font-bold tracking-tight md:text-5xl"
                                variants={itemVariants}
                            >
                                Start discovering <span className="gradient-text">better tools</span> today.
                            </motion.h2>
                            <motion.p
                                className="mt-6 text-lg text-muted"
                                variants={itemVariants}
                            >
                                Join developers who build smarter, not harder.
                            </motion.p>
                            <motion.div
                                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                                variants={itemVariants}
                            >
                                <Button variant="primary" onClick={openSearch}>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Browse tools
                                    </span>
                                </Button>
                                <Button href="#" variant="secondary">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                        Star on GitHub
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Section>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
