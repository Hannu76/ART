import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "brand" | "accent" | "success" | "muted" | "outline" | "danger";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "brand",
  size = "md",
  className,
  children
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full tracking-wide";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium",
    md: "text-xs px-3 py-1 font-medium"
  };

  const variantStyles = {
    brand: "bg-[#E8F5F6] text-[#064E56] border border-[#C5E5E8]",
    accent: "bg-[#FDF6E9] text-[#8C5D14] border border-[#F5E0B8]",
    success: "bg-[#EAF4F0] text-[#1E5D42] border border-[#C6E4D6]",
    danger: "bg-[#FDE8E7] text-[#8F1D14] border border-[#F8C8C5]",
    muted: "bg-[#F0F4F5] text-[#52616B] border border-[#E3E9EB]",
    outline: "bg-transparent text-[#52616B] border border-[#CBD6DA]"
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
};
