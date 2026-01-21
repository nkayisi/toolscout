type SectionProps = {
    children: React.ReactNode;
    id?: string;
    className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
    return (
        <section
            id={id}
            className={`px-6 py-20 md:py-24 lg:py-28 ${className}`}
        >
            <div className="mx-auto max-w-5xl">{children}</div>
        </section>
    );
}

type SectionHeaderProps = {
    title: string;
    description?: string;
    centered?: boolean;
};

export function SectionHeader({
    title,
    description,
    centered = true,
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${centered ? "text-center" : ""}`}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 max-w-2xl text-lg text-muted mx-auto">{description}</p>
            )}
        </div>
    );
}
