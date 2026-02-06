
"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const GlowingEffect = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("relative group", className)}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white dark:bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                {children}
            </div>
        </div>
    );
};
