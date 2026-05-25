import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(title || description) && (
          <div className="mb-10 max-w-2xl space-y-3">
            {title && (
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
