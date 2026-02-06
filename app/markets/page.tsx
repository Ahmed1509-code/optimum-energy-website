
import Link from 'next/link';
import {
    Building2,
    Home,
    Hotel,
    Stethoscope,
    Briefcase,
    GraduationCap,
    Theater,
    Plane,
    Factory,
    Anchor,
    BadgeDollarSign,
    Package,
    Snowflake,
    FlaskConical
} from 'lucide-react';

export default function Markets() {
    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Market <span className="gradient-text">Verticals</span></h1>
                    <p>Serving diverse industries with specialized energy and automation solutions</p>
                </div>
            </section>

            {/* Markets Grid */}
            <section className="markets-section">
                <div className="container">
                    <div className="markets-grid">

                        <div className="market-card">
                            <div className="market-icon"><Building2 size={36} strokeWidth={1.5} /></div>
                            <h3>Commercial</h3>
                            <p>Office buildings, shopping centers, and retail spaces with advanced building automation and
                                energy management systems.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Home size={36} strokeWidth={1.5} /></div>
                            <h3>Residential</h3>
                            <p>Residential complexes and communities with smart home integration and efficient energy solutions.
                            </p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Hotel size={36} strokeWidth={1.5} /></div>
                            <h3>Hospitality</h3>
                            <p>Hotels and resorts with guest room management systems, energy optimization, and comfort control
                                solutions.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Stethoscope size={36} strokeWidth={1.5} /></div>
                            <h3>Healthcare</h3>
                            <p>Hospitals and medical facilities requiring critical environment monitoring, air quality control,
                                and reliable HVAC systems.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Briefcase size={36} strokeWidth={1.5} /></div>
                            <h3>Offices</h3>
                            <p>Corporate offices with intelligent lighting, climate control, and integrated building management
                                for productivity and comfort.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><GraduationCap size={36} strokeWidth={1.5} /></div>
                            <h3>Education</h3>
                            <p>Schools, universities, and educational institutions with energy-efficient systems and healthy
                                learning environments.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Theater size={36} strokeWidth={1.5} /></div>
                            <h3>Entertainment</h3>
                            <p>Theaters, cinemas, and entertainment venues with specialized HVAC and lighting control systems.
                            </p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Plane size={36} strokeWidth={1.5} /></div>
                            <h3>Transportation</h3>
                            <p>Airports, train stations, and transit facilities with comprehensive building automation and
                                energy management.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Factory size={36} strokeWidth={1.5} /></div>
                            <h3>Industrial & Factories</h3>
                            <p>Manufacturing facilities and industrial plants with process optimization, energy monitoring, and
                                automation solutions.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Anchor size={36} strokeWidth={1.5} /></div>
                            <h3>Marine</h3>
                            <p>Marine facilities and port operations with specialized automation and environmental control
                                systems.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><BadgeDollarSign size={36} strokeWidth={1.5} /></div>
                            <h3>Banking & Financial Sector</h3>
                            <p>Banks and financial institutions with secure, reliable building systems and critical environment
                                monitoring.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Package size={36} strokeWidth={1.5} /></div>
                            <h3>Warehouses</h3>
                            <p>Distribution centers and warehouses with efficient climate control and energy management systems.
                            </p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><Snowflake size={36} strokeWidth={1.5} /></div>
                            <h3>Cold Stores</h3>
                            <p>Cold storage facilities with precise temperature control, monitoring systems, and
                                energy-efficient refrigeration.</p>
                        </div>

                        <div className="market-card">
                            <div className="market-icon"><FlaskConical size={36} strokeWidth={1.5} /></div>
                            <h3>Pharmaceutical Facilities</h3>
                            <p>Pharmaceutical manufacturing and research facilities with critical environment control and
                                compliance monitoring.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Industry Expertise */}
            <section className="industry-expertise">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Industry-Specific Solutions</h2>
                        <p className="section-description">Tailored approaches for each market vertical</p>
                    </div>
                    <div className="expertise-content">
                        <div className="expertise-item">
                            <h3>Understanding Your Needs</h3>
                            <p>Each industry has unique requirements for energy efficiency, environmental control, and
                                automation. We bring deep expertise in understanding these specific needs and delivering
                                solutions that address them effectively.</p>
                        </div>
                        <div className="expertise-item">
                            <h3>Regulatory Compliance</h3>
                            <p>We ensure all our solutions meet industry-specific regulations and standards, from healthcare
                                compliance to industrial safety requirements, giving you peace of mind and avoiding costly
                                violations.</p>
                        </div>
                        <div className="expertise-item">
                            <h3>Proven Track Record</h3>
                            <p>With successful projects across all major market verticals, we have the experience and expertise
                                to deliver reliable, efficient solutions regardless of your industry or facility type.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Find Solutions for Your Industry</h2>
                        <p>Discover how we can optimize energy and automation for your specific market vertical</p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-primary">Discuss Your Project</Link>
                            <Link href="/services" className="btn btn-secondary">Explore Our Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
