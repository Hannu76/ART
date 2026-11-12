import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 font-medium",
    md: "text-sm px-4.5 py-2.5 gap-2 font-medium",
    lg: "text-sm sm:text-base px-6 py-3.5 gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "btn-primary-3d",
    secondary: "btn-secondary-3d",
    accent: "btn-accent-3d",
    outline:
      "border border-[#087F8C] text-[#087F8C] bg-transparent hover:bg-[#EBF4F5] active:bg-[#D7EAED] transition-colors",
    ghost:
      "text-[#52616B] hover:text-[#0B1720] hover:bg-[#F4F6F6] active:bg-[#EAEAEA] transition-colors"
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};
