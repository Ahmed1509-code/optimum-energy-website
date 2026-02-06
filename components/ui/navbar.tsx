
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""} glass-effect`} id="navbar">
            <div className="container nav-container">
                <Link href="/" className="brand-lockup">
                    <div className="logo-img-wrapper">
                        {/* Using height auto and width auto style with Next.js Image often needs specific handling or unoptimized for simple migration if sizing is CSS controlled */}
                        <Image
                            src="/logo.png"
                            alt="Optimum Energy Systems"
                            width={50}
                            height={50}
                            className="logo-img"
                            priority
                        />
                    </div>
                    <div className="brand-text">
                        <span className="company-name">Optimum Energy Systems</span>
                        <span className="company-tagline">Automation & Sustainability Ingenuity</span>
                    </div>
                </Link>

                <button
                    className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
                    aria-label="Toggle navigation"
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`} id="navMenu">
                    <li><Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>About Us</Link></li>
                    <li><Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`} onClick={closeMobileMenu}>Services</Link></li>
                    <li><Link href="/markets" className={`nav-link ${pathname === '/markets' ? 'active' : ''}`} onClick={closeMobileMenu}>Markets</Link></li>
                    <li><Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</Link></li>
                    <li><Link href="/contact" className="btn btn-primary-nav" onClick={closeMobileMenu}>Get Quote</Link></li>
                </ul>
            </div>
        </nav>
    );
}
