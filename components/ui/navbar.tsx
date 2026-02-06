"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { Menu as MenuIcon, X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [compact, setCompact] = React.useState(false);
    const [active, setActive] = React.useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;

        // Background logic: meaningful scroll threshold
        setScrolled(latest > 20);

        // Compact logic: 
        // - Shrink (compact=true) if scrolling down AND past threshold
        // - Expand (compact=false) if scrolling up OR at very top
        if (latest < 20) {
            setCompact(false);
        } else if (diff > 0) {
            // Scrolling Down
            setCompact(true);
        } else if (diff < -5) {
            // Scrolling Up (small buffer to avoid jitter)
            setCompact(false);
        }
    });

    // Close mobile menu when route changes
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const mobileNavLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Markets", href: "/markets" },
        { name: "Projects", href: "/projects" },
        { name: "Clients", href: "/clients" },
        { name: "Contact Us", href: "/contact" },
    ];

    const sidebarVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const isHomePage = pathname === "/";
    // Text should be dark if we are scrolled OR if we are NOT on the homepage (light pages)
    const shouldUseDarkText = scrolled || !isHomePage;

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    scrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/50" : "bg-transparent",
                    compact ? "h-16" : "h-24"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <Link href="/" className="relative flex items-center gap-3 group z-50">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={cn(
                                "relative shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105",
                                compact ? "w-10 h-10 md:w-12 md:h-12" : "w-12 h-12 md:w-16 md:h-16"
                            )}
                        >
                            <Image
                                src="/logo.png"
                                alt="Optimum Energy Systems"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col"
                        >
                            <span className={cn(
                                "text-[22px] md:text-2xl font-bold tracking-tight leading-none transition-colors duration-300",
                                shouldUseDarkText ? "text-zinc-900" : "text-white"
                            )}>
                                Optimum Energy Systems
                            </span>
                            <span className={cn(
                                "text-[10px] font-bold tracking-wide transition-colors duration-300 mt-0.5",
                                shouldUseDarkText ? "text-optimum-blue" : "text-zinc-300"
                            )}>
                                Automation & Sustainability Ingenuity
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="hidden md:block z-50"
                    >
                        <Menu setActive={setActive} scrolled={shouldUseDarkText}>
                            <MenuItem setActive={setActive} active={active} item="Home" href="/" />

                            <MenuItem setActive={setActive} active={active} item="About Us" href="/about" />

                            <MenuItem setActive={setActive} active={active} item="Services" href="/services">
                                <div className="flex flex-col space-y-2 text-sm min-w-[200px] p-2">
                                    <HoveredLink href="/services">Building Automation</HoveredLink>
                                    <HoveredLink href="/services">Energy Management Systems</HoveredLink>
                                    <HoveredLink href="/services">Smart Infrastructure</HoveredLink>
                                    <HoveredLink href="/services">Sustainability Solutions</HoveredLink>
                                </div>
                            </MenuItem>

                            <MenuItem setActive={setActive} active={active} item="Markets" href="/markets">
                                <div className="flex flex-col space-y-2 text-sm min-w-[200px] p-2">
                                    <HoveredLink href="/markets">Commercial Buildings</HoveredLink>
                                    <HoveredLink href="/markets">Industrial Facilities</HoveredLink>
                                    <HoveredLink href="/markets">Healthcare</HoveredLink>
                                    <HoveredLink href="/markets">Education</HoveredLink>
                                </div>
                            </MenuItem>

                            <MenuItem setActive={setActive} active={active} item="Projects" href="/projects">
                                <div className="flex flex-col space-y-2 text-sm min-w-[200px] p-2">
                                    <HoveredLink href="/projects/corporate">Corporate</HoveredLink>
                                    <HoveredLink href="/projects/industrial">Industrial</HoveredLink>
                                    <HoveredLink href="/projects/hospitality">Hospitality</HoveredLink>
                                    <HoveredLink href="/projects/medical">Medical</HoveredLink>
                                    <HoveredLink href="/projects/governmental">Governmental</HoveredLink>
                                    <HoveredLink href="/projects/landmark">Landmark</HoveredLink>
                                </div>
                            </MenuItem>

                            <MenuItem setActive={setActive} active={active} item="Clients" href="/clients" />
                        </Menu>
                    </motion.div>

                    {/* Desktop CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <Link
                            href="/contact"
                            className="hidden md:block px-6 py-2.5 rounded-lg text-base font-bold transition-all hover:scale-105 active:scale-95 z-50 bg-optimum-blue text-white hover:bg-optimum-blue-dark shadow-md hover:shadow-lg">
                            Contact Us
                        </Link>
                    </motion.div>

                    {/* Mobile Hamburger Menu */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn(
                            "md:hidden z-50 p-3 rounded-lg transition-all border-2",
                            shouldUseDarkText
                                ? "text-zinc-900 bg-white border-zinc-200 hover:bg-zinc-50 shadow-sm"
                                : "text-white bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
                        )}
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" strokeWidth={2.5} />
                        ) : (
                            <MenuIcon className="w-6 h-6" strokeWidth={2.5} />
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Panel - Using Portal to ensure viewport anchoring */}
            {mounted && createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            {/* Backdrop with Blur */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9998] md:hidden"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-hidden="true"
                            />

                            {/* Slide-in Sidebar */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[9999] md:hidden shadow-2xl overflow-y-auto"
                                role="dialog"
                                aria-modal="true"
                                aria-label="Mobile menu"
                            >
                                {/* Sidebar Header */}
                                <div className="flex items-center justify-between px-6 pt-6 pb-6 border-b border-zinc-100 bg-white sticky top-0 z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-10 h-10 shrink-0">
                                            <Image
                                                src="/logo.png"
                                                alt="Optimum Energy Systems"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-zinc-900 leading-tight">
                                                Optimum Energy
                                            </span>
                                            <span className="text-xs font-medium text-zinc-600 leading-tight">
                                                Systems
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 -mr-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <motion.nav
                                    className="flex flex-col p-6"
                                    variants={sidebarVariants}
                                    initial="closed"
                                    animate="open"
                                >
                                    {/* Navigation Links */}
                                    <div className="flex flex-col space-y-2">
                                        {mobileNavLinks.map((link) => {
                                            const isActive = pathname === link.href;
                                            return (
                                                <motion.div key={link.href} variants={itemVariants}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className={cn(
                                                            "block py-3 px-4 text-base font-medium rounded-lg transition-all active:scale-[0.98]",
                                                            isActive
                                                                ? "bg-optimum-blue/10 text-optimum-blue"
                                                                : "text-zinc-600 hover:bg-zinc-50 hover:text-optimum-blue"
                                                        )}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* Divider */}
                                    <motion.div variants={itemVariants} className="my-6 border-t border-zinc-100" />

                                    {/* CTA Button */}
                                    <motion.div variants={itemVariants}>
                                        <Link
                                            href="/contact"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block w-full py-3.5 px-4 bg-optimum-blue text-white text-center font-semibold rounded-xl hover:bg-optimum-blue-dark transition-all active:scale-[0.98] shadow-lg shadow-optimum-blue/20"
                                        >
                                            Get Started
                                        </Link>
                                    </motion.div>
                                </motion.nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
