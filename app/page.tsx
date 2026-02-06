
import Link from 'next/link';
import HeroSection from '@/components/home/hero-section';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

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
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                                    </svg>
                                )
                            },
                            {
                                title: "Smart Lighting Solutions",
                                desc: "Intelligent lighting systems and controls for energy-efficient illumination",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="5" />
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                    </svg>
                                )
                            },
                            {
                                title: "Energy Management",
                                desc: "Smart meters, AMR systems, and comprehensive energy monitoring solutions",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="12" y1="18" x2="12" y2="12" />
                                        <line x1="9" y1="15" x2="15" y2="15" />
                                    </svg>
                                )
                            },
                            {
                                title: "HVAC Systems",
                                desc: "Complete HVAC equipment supply, installation, and optimization services",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path
                                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                        <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                )
                            },
                            {
                                title: "Systems Integration",
                                desc: "Seamless integration of building systems for unified control and monitoring",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                )
                            },
                            {
                                title: "Maintenance & Support",
                                desc: "Planned service agreements and comprehensive operation & maintenance programs",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                )
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
                            { icon: "🏢", label: "Commercial" },
                            { icon: "🏥", label: "Healthcare" },
                            { icon: "🏨", label: "Hospitality" },
                            { icon: "🏭", label: "Industrial" },
                            { icon: "🏘️", label: "Residential" },
                            { icon: "✈️", label: "Transportation" },
                            { icon: "🎓", label: "Education" },
                            { icon: "📦", label: "Warehouses" },
                            { icon: "❄️", label: "Cold Stores" },
                            { icon: "💊", label: "Pharmaceutical" },
                            { icon: "⚓", label: "Marine" },
                            { icon: "🏦", label: "Banking" },
                            { icon: "🎭", label: "Entertainment" },
                            { icon: "🏢", label: "Offices" }
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
                                            <div className="feature-icon">✓</div>
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
                                    <div className="visual-icon">🎯</div>
                                    <h3>Mission-Driven</h3>
                                    <p>Optimizing energy usage and equipment lifetime</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4} width="100%">
                                <div className="visual-card">
                                    <div className="visual-icon">🚀</div>
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
