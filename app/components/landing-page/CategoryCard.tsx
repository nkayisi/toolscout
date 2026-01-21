import Link from "next/link";

type CategoryCardProps = {
    name: string;
    icon: React.ReactNode;
    href?: string;
};

export function CategoryCard({ name, icon, href = "#" }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="group relative flex flex-col items-center gap-4 rounded-xl border border-card-border bg-card-bg/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-card-bg hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
        >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-accent-secondary/10 text-accent transition-all duration-300 group-hover:from-accent/20 group-hover:to-accent-secondary/20 group-hover:scale-110">
                {icon}
            </div>
            <span className="relative text-sm font-medium text-foreground">{name}</span>
        </Link>
    );
}
