"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const RadialBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 -z-10 size-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] pointer-events-none",
        className
      )}
    />
  );
};

export default RadialBackground;
