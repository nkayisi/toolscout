interface UseCasesProps {
    useCases: string[];
}

export function UseCases({ useCases }: UseCasesProps) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
                When to use {/* Tool name will be passed from parent */}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
                {useCases.map((useCase, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg border border-card-border bg-card-bg/30"
                    >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-muted leading-relaxed">{useCase}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
