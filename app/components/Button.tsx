import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
};

export function Button({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background";

    const variants = {
        primary:
            "bg-gradient-to-r from-accent to-accent-secondary text-background hover:opacity-90 shadow-lg shadow-accent/25",
        secondary:
            "border border-card-border bg-card-bg/50 text-foreground hover:bg-card-bg hover:border-accent/50 backdrop-blur-sm",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return <button onClick={onClick} className={combinedStyles}>{children}</button>;
}
