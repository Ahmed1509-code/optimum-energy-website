
import Link from 'next/link';

export default function About() {
    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>About <span className="gradient-text">Optimum Energy Systems</span></h1>
                    <p>Pioneering the future of energy efficiency and building automation</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="company-overview">
                <div className="container">
                    <div className="overview-content">
                        <div className="overview-text">
                            <div className="section-header">
                                <span className="section-tag">Our Story</span>
                                <h2>Company Overview</h2>
                            </div>
                            <p className="lead-text">
                                Optimum Energy Systems was established in 2018 to be a game changer in automation and energy
                                conservation products and solutions, in line with local and global trends of reducing carbon
                                emissions and limiting the use of fossil fuel to achieve sustainability goals.
                            </p>
                            <p className="lead-text">
                                With more than 20 years of experience, the company has strengthened its name as a unique actor
                                in the fields of buildings and industrial automation solutions, improving air quality, building
                                occupants' comfort, safety and security, energy products and solutions, and related advisory
                                services.
                            </p>
                            <div className="about-actions" style={{ marginTop: '2rem', justifyContent: 'flex-start' }}>
                                <a href="/Optenergy.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        style={{ width: '20px', height: '20px', marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    Download Company Profile (PDF)
                                </a>
                            </div>
                        </div>
                        <div className="overview-image">
                            <div className="image-placeholder">
                                <div className="placeholder-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="vision-mission">
                <div className="container">
                    <div className="vm-grid">
                        <div className="vm-card vision-card">
                            <div className="vm-icon">🔭</div>
                            <h2>Our Vision</h2>
                            <p>
                                To be the first choice in the field of digital transformation of buildings automation, to create
                                a future in which energy efficiency is the key to help our customers achieve their
                                sustainability goals.
                            </p>
                        </div>
                        <div className="vm-card mission-card">
                            <div className="vm-icon">🎯</div>
                            <h2>Our Mission</h2>
                            <p>
                                Develop and implement best practices in automation projects by actively monitoring trends to
                                help customers and partners optimize equipment operation, prolong equipment lifetime, and
                                optimize energy usage.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                We provide turnkey solutions including designing, supplying, installing, programming, testing,
                                commissioning, systems integration, operation, and maintenance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-tag">What Drives Us</span>
                        <h2>Our Core Values</h2>
                        <p className="section-description">The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-number">01</div>
                            <h3>Integrity</h3>
                            <p>Honesty and openness, showing patience and flexibility even when unforeseen cases arise.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">02</div>
                            <h3>Effectiveness</h3>
                            <p>Getting things perfectly done, achieving the best results, and showing professional integrity in
                                daily activities.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">03</div>
                            <h3>Innovation</h3>
                            <p>Continuous transformation and adaptation to deliver innovative solutions.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">04</div>
                            <h3>Adherence</h3>
                            <p>Commitment to compliance with best technical and managerial practices.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">05</div>
                            <h3>Collaboration</h3>
                            <p>Team-spirit approach, trustworthiness, respect, and mutual support.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-number">06</div>
                            <h3>Governance</h3>
                            <p>Establishing rules, procedures, policies, and resolutions to guide organizational behavior.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners & Projects Detailed */}
            <section className="partners-projects-detail" style={{ padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }} className="pp-detail-grid">
                        <div className="pp-detail-card">
                            <div className="section-header">
                                <span className="section-tag">Trust</span>
                                <h2>Business Partners</h2>
                            </div>
                            <div className="partners-detail-list">
                                <div className="partner-item" style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Johnson Controls</h3>
                                    <p style={{ color: 'var(--color-gray)' }}>Authorized System Integrator, providing industry-leading HVAC and building automation
                                        solutions.</p>
                                </div>
                                <div className="partner-item" style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Legrand</h3>
                                    <p style={{ color: 'var(--color-gray)' }}>Global specialist in electrical and digital building infrastructures.</p>
                                </div>
                                <div className="partner-item">
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Orbita</h3>
                                    <p style={{ color: 'var(--color-gray)' }}>Leading provider of hospitality solutions and guest room management systems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pp-detail-card">
                            <div className="section-header">
                                <span className="section-tag">Success</span>
                                <h2>Selected Projects</h2>
                            </div>
                            <div className="projects-detail-list">
                                <div className="project-item" style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>ELM QH</h3>
                                    <p style={{ color: 'var(--color-gray)' }}>Implementation of advanced building management and energy systems.</p>
                                </div>
                                <div className="project-item" style={{ marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>SMC Hospital</h3>
                                    <p style={{ color: 'var(--color-gray)' }}>Critical environment monitoring and specialized HVAC automation.</p>
                                </div>
                                <div className="project-item">
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Holiday Inn</h3>
                                    <p style={{ color: 'var(--color-gray)' }}>Energy-efficient guest room management and lighting control systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Partner With Us</h2>
                        <p>Join the organizations that trust us to deliver excellence in energy and automation solutions</p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
                            <Link href="/services" className="btn btn-secondary">Explore Our Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
