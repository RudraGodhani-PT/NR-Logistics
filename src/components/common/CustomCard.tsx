import React from "react";
import { cn } from "@/lib/utils";

type PaddingSize = "none" | "sm" | "md" | "lg";
type ShadowLevel = "none" | "sm" | "md" | "lg" | "xl";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: PaddingSize;
  shadow?: ShadowLevel;
  rounded?: boolean;
  surfaceColor?: string; // optional override for background (e.g. surface variant)
}

const paddingMap: Record<PaddingSize, string> = {
  none: "p-0",
  sm: "p-2 md:p-3",
  md: "p-3 md:p-5",
  lg: "p-5 md:p-7",
};

const shadowMap: Record<ShadowLevel, string> = {
  none: "shadow-none hover:shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

export const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  (
    {
      padding = "md",
      shadow = "md",
      rounded = true,
      surfaceColor,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "transition-shadow duration-200 bg-surface text-on-surface",
          rounded && "rounded-xl",
          paddingMap[padding],
          shadowMap[shadow],
          // Material hover elevation
          className
        )}
        style={{
          backgroundColor:
            surfaceColor || "var(--md-sys-color-surface, #ffffff)",
          color: "var(--md-sys-color-on-surface, #1f1f1f)",
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomCard.displayName = "CustomCard";
