import { Tool } from '@/app/lib/tools';

interface ToolMetaProps {
    tool: Tool;
}

export function ToolMeta({ tool }: ToolMetaProps) {
    return (
        <div className="border-t border-card-border pt-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
                Additional Information
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Pricing */}
                <div>
                    <dt className="text-sm font-medium text-muted mb-2">Pricing</dt>
                    <dd className="text-foreground">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${tool.pricing === 'Free' || tool.pricing === 'Open Source'
                                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                : tool.pricing === 'Paid'
                                    ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            }`}>
                            {tool.pricing}
                        </span>
                    </dd>
                </div>

                {/* License */}
                {tool.license && (
                    <div>
                        <dt className="text-sm font-medium text-muted mb-2">License</dt>
                        <dd className="text-foreground">{tool.license}</dd>
                    </div>
                )}

                {/* Website */}
                <div>
                    <dt className="text-sm font-medium text-muted mb-2">Official Website</dt>
                    <dd>
                        <a
                            href={tool.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent-secondary transition-colors inline-flex items-center gap-1"
                        >
                            Visit site
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </dd>
                </div>

                {/* GitHub */}
                {tool.github_url && (
                    <div>
                        <dt className="text-sm font-medium text-muted mb-2">Source Code</dt>
                        <dd>
                            <a
                                href={tool.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-accent-secondary transition-colors inline-flex items-center gap-1"
                            >
                                GitHub
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </dd>
                    </div>
                )}
            </div>
        </div>
    );
}
