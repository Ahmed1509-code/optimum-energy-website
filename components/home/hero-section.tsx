
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";
import { Clock, Users, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-background"></div>
            <div className="container hero-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-left">
                    <motion.h1
                        className="hero-title"
                        style={{ color: '#ffffff', fontWeight: 700, lineHeight: 1.15, marginBottom: '32px' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Automation & Sustainability<br />
                        Ingenuity
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        style={{ color: '#e5e7eb', maxWidth: '560px', lineHeight: 1.7, marginBottom: '48px' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Game changer in automation and energy conservation since 2018. We help you achieve sustainability
                        goals by reducing carbon emissions and optimizing energy usage.
                    </motion.p>
                    <motion.div
                        className="hero-cta flex flex-wrap items-center"
                        style={{ gap: '24px', marginTop: '24px' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                        <Link href="/contact" className="btn btn-secondary">Request a Consultation</Link>
                    </motion.div>
                </div>
                <div className="hero-right">
                    <div className="hero-brand-group">
                        <motion.div
                            className="hero-logo-large"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Image
                                src="/logo.png"
                                alt="Optimum Energy Systems"
                                width={320}
                                height={100}
                                className="hero-logo-img-large"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            className="hero-stats-row"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="stat-block">
                                <div className="stat-icon"><Clock size={24} className="text-secondary" /></div>
                                <div className="stat-number">
                                    <CountUp value={2018} prefix="" suffix="" />
                                </div>
                                <div className="stat-label">Established</div>
                            </div>
                            <div className="stat-block">
                                <div className="stat-icon"><Users size={24} className="text-secondary" /></div>
                                <div className="stat-number">
                                    <CountUp value={20} prefix="" suffix="+" />
                                </div>
                                <div className="stat-label">Years Team Experience</div>
                            </div>
                            <div className="stat-block">
                                <div className="stat-icon"><CheckCircle2 size={24} className="text-secondary" /></div>
                                <div className="stat-number">
                                    <CountUp value={100} prefix="" suffix="%" />
                                </div>
                                <div className="stat-label">Turnkey Solutions</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll to explore</span>
                <div className="scroll-arrow"></div>
            </motion.div>
        </section>
    );
}
