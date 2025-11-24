import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: I am not using class-variance-authority yet as I didn't install it.
// I will implement a simpler version or install it. 
// Actually, I should install it for better variant management, or just write it manually.
// Given "ZERO manual coding", I'll stick to manual implementation or install it.
// I'll install it quickly as it's standard.
// Wait, I can't install mid-stream without a separate command.
// I'll implement it manually to save time and deps.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-everlend-green text-white hover:bg-everlend-green/90",
      secondary: "bg-everlend-gold text-white hover:bg-everlend-gold/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground border-everlend-green text-everlend-green",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    };
    
    const sizes = {
      sm: "h-9 rounded-md px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8 text-base",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
