import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "small" | "large";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", size = "default", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          {
            "max-w-7xl": size === "default",
            "max-w-5xl": size === "small",
            "max-w-[1400px]": size === "large",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };
