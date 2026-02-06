
"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div
            className={cn(
                "relative h-[40rem] flex items-center justify-center w-full group",
                containerClassName
            )}
        >
            <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};
