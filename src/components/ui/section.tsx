import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "default" | "compact" | "none";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Component = "section", spacing = "default", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "relative",
          {
            "py-16 md:py-24 lg:py-32": spacing === "default",
            "py-12 md:py-16": spacing === "compact",
            "py-0": spacing === "none",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section };
