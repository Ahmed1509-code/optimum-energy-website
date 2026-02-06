
import Link from 'next/link';

export default function Services() {
    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our <span className="gradient-text">Services</span></h1>
                    <p>Comprehensive solutions for energy efficiency and intelligent automation</p>
                </div>
            </section>

            {/* Services Detail */}
            <section className="services-detail">
                <div className="container">
                    <div className="services-detail-grid">

                        {/* Service 1: BMS */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                                </svg>
                            </div>
                            <h3>Building Management Systems (BMS), GRMS & CPM</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Johnson Controls Authorized System Integrator</li>
                                    <li>Supplying DDC controllers and BMS software licenses</li>
                                    <li>Panels fabrication (DDCs and MCCs)</li>
                                    <li>Variable Speed Drives (VSDs)</li>
                                    <li>Field devices supply (sensors and actuators)</li>
                                    <li>Installation works (1st, 2nd, and 3rd fixes)</li>
                                    <li>Pipes freezing and hot-tapping methodologies</li>
                                    <li>Energy saving HVAC applications including demand flow, day/night setbacks, summer/winter
                                        setbacks, equipment scheduling, lead/lag operation, COP calculations, measurement and
                                        verification</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 2: Lighting */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
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
                            </div>
                            <h3>Lighting Systems and Lighting Controls</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Building lighting and lighting control</li>
                                    <li>Heliports and helipads lighting systems</li>
                                    <li>Aviation lighting systems</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 3: HVAC */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <h3>Heating, Ventilation & Air Conditioning (HVAC)</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Supply and installation of chillers, heat pumps, boilers, cooling towers, pumps</li>
                                    <li>AHUs, FCUs, VAVs, package units, DX units</li>
                                    <li>ACCUs, CRAC/CRAH units</li>
                                    <li>Split AC, concealed AC, and window AC units</li>
                                    <li>Complete chilled water systems including piping, air ducts, accessories, and insulation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 4: Smart Meters */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="12" y1="18" x2="12" y2="12" />
                                    <line x1="9" y1="15" x2="15" y2="15" />
                                </svg>
                            </div>
                            <h3>Smart Meters & Energy Management Systems</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Power meters, thermal BTU meters, flow meters, level meters, gas meters</li>
                                    <li>Automatic Meter Reading (AMR)</li>
                                    <li>Wired and wireless communications</li>
                                    <li>Tenant billing systems</li>
                                    <li>Energy management software and data analytics</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 5: Air Quality */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h3>Air Quality & Gas Detection Systems</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Fixed and portable gas detectors</li>
                                    <li>Centralized monitoring workstations</li>
                                    <li>Wired and wireless communications</li>
                                    <li>Gas alarming systems</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 6: Critical Environments */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <h3>Critical Environments</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Clean rooms monitoring systems (pressure, temperature, humidity, air change per hour)
                                    </li>
                                    <li>IAQ sensors</li>
                                    <li>Air venturi valves</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 7: Measuring Devices */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3>Measuring Devices & Dataloggers</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Environmental and physical parameter dataloggers</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 8: Integration */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3>Systems Integration</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Hardware and software integrations using standard or customized protocols and APIs</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 9: ECM */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>Energy Conservation Measures</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Energy saving implementations</li>
                                    <li>Buildings retrofitting toward green buildings</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 10: PSA */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3>Planned Service Agreements (PSAs)</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Operation and maintenance contracts</li>
                                    <li>Preventive maintenance contracts</li>
                                    <li>Predictive and digital-enabled maintenance</li>
                                    <li>Remote monitoring</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 11: Spare Parts */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3>Spare Parts</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Spare parts for all supplied system components</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 12: Advisory */}
                        <div className="service-detail-card">
                            <div className="service-detail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <h3>Advisory Services</h3>
                            <div className="service-content-detailed">
                                <ul>
                                    <li>Site surveys</li>
                                    <li>Data collection</li>
                                    <li>Studies and reports</li>
                                    <li>Systems design</li>
                                    <li>Diagnostics and fault detection</li>
                                    <li>Operation optimization</li>
                                    <li>Performance and equipment lifetime enhancement</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="service-process">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-tag">Our Approach</span>
                        <h2>Turnkey Solution Process</h2>
                        <p className="section-description">From concept to completion, we handle every aspect of your project</p>
                    </div>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="process-number">01</div>
                            <h3>Design</h3>
                            <p>Comprehensive system design tailored to your requirements</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">02</div>
                            <h3>Supply</h3>
                            <p>Procurement of quality equipment and materials</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">03</div>
                            <h3>Installation</h3>
                            <p>Professional installation by certified technicians</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">04</div>
                            <h3>Programming</h3>
                            <p>Custom programming and configuration</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">05</div>
                            <h3>Testing</h3>
                            <p>Rigorous testing and quality assurance</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">06</div>
                            <h3>Commissioning</h3>
                            <p>System commissioning and optimization</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">07</div>
                            <h3>Integration</h3>
                            <p>Seamless systems integration</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">08</div>
                            <h3>Maintenance</h3>
                            <p>Ongoing operation and maintenance support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need a Custom Solution?</h2>
                        <p>Let's discuss how our services can meet your specific requirements</p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-primary">Request a Consultation</Link>
                            <Link href="/markets" className="btn btn-secondary">View Market Sectors</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
