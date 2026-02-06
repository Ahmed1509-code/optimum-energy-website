
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";

export default function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-background"></div>
            <div className="container hero-container">
                <div className="hero-left">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="gradient-text">Automation & Sustainability</span><br />
                        Ingenuity
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Game changer in automation and energy conservation since 2018. We help you achieve sustainability
                        goals by reducing carbon emissions and optimizing energy usage.
                    </motion.p>
                    <motion.div
                        className="hero-cta"
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
                                <div className="stat-number">
                                    <CountUp value={2018} prefix="" suffix="" />
                                </div>
                                <div className="stat-label">Established</div>
                            </div>
                            <div className="stat-block">
                                <div className="stat-number">
                                    <CountUp value={20} prefix="" suffix="+" />
                                </div>
                                <div className="stat-label">Years Team Experience</div>
                            </div>
                            <div className="stat-block">
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
