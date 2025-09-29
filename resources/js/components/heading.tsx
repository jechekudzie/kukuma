export default function Heading({ title, description }: { title: string; description?: string }) {
    return (
        <div className="mb-8 space-y-0.5">
            <h2 className="headline text-xl tracking-tight">{title}</h2>
            {description && <p className="body-text text-sm text-muted-foreground">{description}</p>}
        </div>
    );
}
