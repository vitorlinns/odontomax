"use client";

import { cn } from "@/lib/utils";
import { colors } from "@/lib/colors";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "px-5 py-2.5 text-sm leading-none",
  md: "px-6 py-3.5 text-base leading-none",
  lg: "px-8 py-4 text-base leading-none",
};

const baseStyle: Record<string, React.CSSProperties> = {
  primary: { backgroundColor: colors.brand, color: colors.ink },
  outline: {
    backgroundColor: "transparent",
    color: colors.brand,
    border: `1.5px solid ${colors.brandSoft}`,
  },
  "outline-dark": {
    backgroundColor: "transparent",
    color: colors.ink,
    border: `1.5px solid ${colors.ink3}`,
  },
  ghost: { backgroundColor: "transparent", color: colors.ink3 },
};

const hoverIn: Record<string, Partial<CSSStyleDeclaration>> = {
  primary:       { backgroundColor: colors.brandHover, transform: "translateY(-2px)" },
  outline:       { borderColor: colors.brandMid,        transform: "translateY(-2px)" },
  "outline-dark":{ borderColor: colors.ink,             transform: "translateY(-2px)" },
  ghost:         { backgroundColor: colors.surface,     transform: "translateY(-2px)" },
};

const hoverOut: Record<string, Partial<CSSStyleDeclaration>> = {
  primary:       { backgroundColor: colors.brand,       transform: "translateY(0px)" },
  outline:       { borderColor: colors.brandSoft,        transform: "translateY(0px)" },
  "outline-dark":{ borderColor: colors.ink3,             transform: "translateY(0px)" },
  ghost:         { backgroundColor: "transparent",       transform: "translateY(0px)" },
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-full cursor-pointer",
        "transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        className
      )}
      style={baseStyle[variant]}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverIn[variant])}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, hoverOut[variant])}
      {...props}
    >
      {children}
    </button>
  );
}
