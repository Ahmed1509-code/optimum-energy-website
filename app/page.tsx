
import Link from 'next/link';
import HeroSection from '@/components/home/hero-section';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import {
    Settings,
    Lightbulb,
    BarChart3,
    ThermometerSun,
    Cpu,
    Wrench,
    Building2,
    HeartPulse,
    Hotel,
    Factory,
    Home as HomeIcon,
    Plane,
    GraduationCap,
    Warehouse,
    Snowflake,
    Pill,
    Anchor,
    BadgeDollarSign,
    Theater,
    Briefcase,
    CheckCircle2,
    Target,
    Zap
} from 'lucide-react';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <section className="about-intro" id="about">
                <ScrollReveal className="container" width="100%">
                    <div className="section-header">
                        <span className="section-tag">Who We Are</span>
                        <h2>About Optimum Energy Systems</h2>
                    </div>
                    <div className="about-intro-content">
                        <p className="lead-text">
                            With over 20 years of experience, we provide unique building and industrial automation solutions,
                            improving air quality, comfort, safety, and energy efficiency.
                        </p>
                        <div className="about-actions">
                            <Link href="/about" className="btn btn-outline">Our Full Story</Link>
                            <a href="/Optenergy.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    style={{ width: '20px', height: '20px', marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Company Profile (PDF)
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Key Services Overview */}
            <section className="services-overview" id="services">
                <div className="container">
                    <ScrollReveal width="100%">
                        <div className="section-header centered">
                            <span className="section-tag">What We Do</span>
                            <h2>Key Services</h2>
                            <p className="section-description">Comprehensive solutions for energy efficiency and building automation</p>
                        </div>
                    </ScrollReveal>

                    <div className="services-grid">
                        {[
                            {
                                title: "Building Management Systems",
                                desc: "Advanced BMS, GRMS, and chiller optimization for complete facility control",
                                icon: <Settings size={36} strokeWidth={1.5} />
                            },
                            {
                                title: "Smart Lighting Solutions",
                                desc: "Intelligent lighting systems and controls for energy-efficient illumination",
                                icon: <Lightbulb size={36} strokeWidth={1.5} />
                            },
                            {
                                title: "Energy Management",
                                desc: "Smart meters, AMR systems, and comprehensive energy monitoring solutions",
                                icon: <BarChart3 size={36} strokeWidth={1.5} />
                            },
                            {
                                title: "HVAC Systems",
                                desc: "Complete HVAC equipment supply, installation, and optimization services",
                                icon: <ThermometerSun size={36} strokeWidth={1.5} />
                            },
                            {
                                title: "Systems Integration",
                                desc: "Seamless integration of building systems for unified control and monitoring",
                                icon: <Cpu size={36} strokeWidth={1.5} />
                            },
                            {
                                title: "Maintenance & Support",
                                desc: "Planned service agreements and comprehensive operation & maintenance programs",
                                icon: <Wrench size={36} strokeWidth={1.5} />
                            }
                        ].map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="service-card h-full">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link href="/services" className="btn btn-outline">Explore All Services</Link>
                    </div>
                </div>
            </section>

            {/* Markets Section */}
            <section className="markets-overview" id="markets">
                <div className="container">
                    <ScrollReveal width="100%">
                        <div className="section-header centered">
                            <span className="section-tag">Industries We Serve</span>
                            <h2>Markets We Serve</h2>
                            <p className="section-description">Specialized energy and automation solutions for diverse sectors.</p>
                        </div>
                    </ScrollReveal>

                    <div className="markets-grid-simple">
                        {[
                            { icon: <Building2 className="text-accent" size={32} strokeWidth={1.5} />, label: "Commercial" },
                            { icon: <HeartPulse className="text-accent" size={32} strokeWidth={1.5} />, label: "Healthcare" },
                            { icon: <Hotel className="text-accent" size={32} strokeWidth={1.5} />, label: "Hospitality" },
                            { icon: <Factory className="text-accent" size={32} strokeWidth={1.5} />, label: "Industrial" },
                            { icon: <HomeIcon className="text-accent" size={32} strokeWidth={1.5} />, label: "Residential" },
                            { icon: <Plane className="text-accent" size={32} strokeWidth={1.5} />, label: "Transportation" },
                            { icon: <GraduationCap className="text-accent" size={32} strokeWidth={1.5} />, label: "Education" },
                            { icon: <Warehouse className="text-accent" size={32} strokeWidth={1.5} />, label: "Warehouses" },
                            { icon: <Snowflake className="text-accent" size={32} strokeWidth={1.5} />, label: "Cold Stores" },
                            { icon: <Pill className="text-accent" size={32} strokeWidth={1.5} />, label: "Pharmaceutical" },
                            { icon: <Anchor className="text-accent" size={32} strokeWidth={1.5} />, label: "Marine" },
                            { icon: <BadgeDollarSign className="text-accent" size={32} strokeWidth={1.5} />, label: "Banking" },
                            { icon: <Theater className="text-accent" size={32} strokeWidth={1.5} />, label: "Entertainment" },
                            { icon: <Briefcase className="text-accent" size={32} strokeWidth={1.5} />, label: "Offices" }
                        ].map((market, index) => (
                            <ScrollReveal key={index} delay={index * 0.05}>
                                <div className="market-item glass-effect">
                                    <span className="market-icon">{market.icon}</span>
                                    <span>{market.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link href="/markets" className="btn btn-outline">View All Markets</Link>
                    </div>
                </div>
            </section>

            {/* Business Partners */}
            <section className="business-partners-section" id="partners">
                <div className="container">
                    <ScrollReveal width="100%">
                        <div className="section-header">
                            <span className="section-tag">Trust</span>
                            <h2>Business Partners</h2>
                        </div>
                    </ScrollReveal>
                    <div className="partners-list-simple">
                        {["Johnson Controls", "Legrand", "Orbita"].map((partner, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="partner-name">{partner}</div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Clients & Success Partners */}
            <section className="clients-section" id="clients">
                <div className="container">
                    <ScrollReveal width="100%">
                        <div className="section-header">
                            <span className="section-tag">Credibility</span>
                            <h2>Our Clients & Success Partners</h2>
                        </div>
                    </ScrollReveal>
                    <div className="clients-grid">
                        {[
                            "R.M", "Honeywell", "Johnson Controls Arabia",
                            "SBM – Saudi Business Machines", "Electric House", "BAAN",
                            "Shaker Consultancy Group", "Arcom", "Ministry of Health"
                        ].map((client, index) => (
                            <ScrollReveal key={index} delay={index * 0.05}>
                                <div className="client-item">{client}</div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Projects */}
            <section className="projects-section" id="projects">
                <div className="container">
                    <ScrollReveal width="100%">
                        <div className="section-header">
                            <span className="section-tag">Success</span>
                            <h2>Selected Projects</h2>
                        </div>
                    </ScrollReveal>
                    <div className="projects-list-simple">
                        {["ELM QH", "SMC Hospital", "Holiday Inn"].map((project, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="project-name">{project}</div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose" id="why-choose">
                <div className="container">
                    <div className="why-choose-content">
                        <div className="why-choose-text">
                            <ScrollReveal width="100%">
                                <div className="section-header">
                                    <span className="section-tag">Why Choose Us</span>
                                    <h2>Your Trusted Partner in Energy Solutions</h2>
                                </div>
                            </ScrollReveal>
                            <ul className="features-list">
                                {[
                                    { title: "Established in 2018", desc: "Built on a foundation of innovation and excellence" },
                                    { title: "Over 20 Years of Industry Experience", desc: "Deep expertise in energy and automation solutions" },
                                    { title: "Turnkey Solutions", desc: "From design to maintenance, we handle everything" },
                                    { title: "Sustainability Focused", desc: "Energy efficiency and environmental performance at our core" }
                                ].map((feature, index) => (
                                    <ScrollReveal key={index} delay={index * 0.1} width="100%">
                                        <li>
                                            <div className="feature-icon"><CheckCircle2 className="text-primary" size={24} /></div>
                                            <div>
                                                <strong>{feature.title}</strong>
                                                <p>{feature.desc}</p>
                                            </div>
                                        </li>
                                    </ScrollReveal>
                                ))}
                            </ul>
                        </div>
                        <div className="why-choose-visual">
                            <ScrollReveal delay={0.2} width="100%">
                                <div className="visual-card">
                                    <div className="visual-icon"><Target size={48} className="text-primary" strokeWidth={1.5} /></div>
                                    <h3>Mission-Driven</h3>
                                    <p>Optimizing energy usage and equipment lifetime</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4} width="100%">
                                <div className="visual-card">
                                    <div className="visual-icon"><Zap size={48} className="text-primary" strokeWidth={1.5} /></div>
                                    <h3>Innovation First</h3>
                                    <p>Leading digital transformation in building automation</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section" id="contact">
                <div className="container">
                    <ScrollReveal width="100%">
                        <div className="cta-content">
                            <h2>Ready to Transform Your Energy Systems?</h2>
                            <p>Let's discuss how we can help you achieve your sustainability and efficiency goals.</p>
                            <div className="cta-buttons">
                                <Link href="/contact" className="btn btn-primary">Contact Us Today</Link>
                                <Link href="/contact" className="btn btn-secondary">Request a Consultation</Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
