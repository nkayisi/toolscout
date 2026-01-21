import Link from 'next/link';
import { Tool } from '@/app/lib/tools';

interface ToolCardProps {
    tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
    return (
        <div className="group relative rounded-xl border border-card-border bg-card-bg/50 backdrop-blur-sm overflow-hidden transition-all duration-200 hover:border-accent/30 hover:bg-card-bg h-[400px] w-full">
            <div className="flex flex-col h-full">
                {/* Image/Screenshot */}
                <div className="relative h-32 bg-gradient-to-br from-accent/5 to-accent-secondary/5 border-b border-card-border">
                    {tool.image_url ? (
                        <img
                            src={tool.image_url}
                            alt={`${tool.name} screenshot`}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <span className="text-xs text-muted font-medium">{tool.name}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                                {tool.name}
                            </h3>
                            <p className="text-sm text-muted mt-1 line-clamp-2">
                                {tool.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tool.categories.map((category) => (
                            <span
                                key={category}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6 flex-1">
                        {tool.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-card-bg border border-card-border text-muted"
                            >
                                {tag}
                            </span>
                        ))}
                        {tool.tags.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs text-muted">
                                +{tool.tags.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-card-border">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-muted">{tool.pricing}</span>
                        </div>
                        <Link
                            href={`/tools/${tool.id}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-accent hover:text-accent-secondary transition-colors"
                        >
                            View details
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
