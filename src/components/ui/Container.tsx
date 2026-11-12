import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "narrow" | "default" | "wide" | "full";
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = "default",
  className,
  children,
  ...props
}) => {
  const sizeStyles = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
