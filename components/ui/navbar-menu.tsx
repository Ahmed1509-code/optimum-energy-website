"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
} as const;

export const Menu = ({
    setActive,
    children,
    scrolled,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
    scrolled: boolean;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative flex justify-center space-x-8 py-4"
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && typeof child.type !== 'string') {
                    // Pass the scrolled prop to children (MenuItem)
                    return React.cloneElement(child as React.ReactElement<any>, { scrolled });
                }
                return child;
            })}
        </nav>
    );
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    scrolled,
    href,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    scrolled?: boolean;
    href?: string;
}) => {
    const isLink = !children && href;

    if (isLink) {
        return (
            <Link
                href={href!}
                onMouseEnter={() => setActive(item)}
                className={cn(
                    "relative px-4 py-2 rounded-full text-base font-bold transition-colors hover:text-optimum-blue cursor-pointer outline-none focus:ring-2 focus:ring-optimum-blue/50",
                    scrolled ? "text-zinc-900" : "text-zinc-200"
                )}
            >
                {active === item && (
                    <motion.span
                        layoutId="nav-pill"
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        className={cn(
                            "absolute inset-0 rounded-full -z-10",
                            scrolled ? "bg-zinc-300" : "bg-white/20"
                        )}
                    />
                )}
                <span className="relative z-10">{item}</span>
            </Link>
        )
    }

    // Parent item with dropdown - make it clickable if href is provided
    const ParentContent = (
        <>
            {active === item && (
                <motion.span
                    layoutId="nav-pill"
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                    className={cn(
                        "absolute inset-0 rounded-full -z-10",
                        scrolled ? "bg-zinc-300" : "bg-white/20"
                    )}
                />
            )}
            <span className="relative z-10 flex items-center gap-1">{item}</span>
        </>
    );

    return (
        <div onMouseEnter={() => setActive(item)} className="relative group parent">
            {href ? (
                <Link
                    href={href}
                    className={cn(
                        "relative px-4 py-2 rounded-full text-base font-bold transition-colors hover:text-optimum-blue cursor-pointer flex items-center gap-1",
                        scrolled ? "text-zinc-900" : "text-zinc-200"
                    )}
                >
                    {ParentContent}
                </Link>
            ) : (
                <motion.p
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "relative px-4 py-2 rounded-full text-base font-bold transition-colors hover:text-optimum-blue cursor-pointer flex items-center gap-1",
                        scrolled ? "text-zinc-900" : "text-zinc-200"
                    )}
                >
                    {ParentContent}
                </motion.p>
            )}
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.5rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth transition between menus
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                {/* Hover Bridge */}
                                <div className="absolute -top-[1.5rem] left-0 right-0 h-[1.5rem] bg-transparent" />

                                <motion.div
                                    layout // layout ensures smooth height adjustment
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium text-sm block px-3 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-white/10 transition-all cursor-pointer"
        >
            {children}
        </Link>
    );
};
