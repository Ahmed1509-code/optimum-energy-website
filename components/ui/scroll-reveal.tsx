
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}

export const ScrollReveal = ({ children, width = "fit-content", delay = 0, className = "" }: ScrollRevealProps) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            style={{ width }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
