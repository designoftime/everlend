import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Component = "section", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("py-12 md:py-16 lg:py-24", className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section };
