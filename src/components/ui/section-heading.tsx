import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  badgeVariant?: "default" | "teal" | "secondary";
}

export function SectionHeading({
  badge,
  title,
  description,
  className,
  badgeVariant = "default",
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-12 lg:mb-16", className)}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {badge}
        </Badge>
      )}
      <h2 className="text-heading font-bold tracking-tight text-foreground mt-4">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
