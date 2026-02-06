
import Link from 'next/link';
import {
    Settings,
    Lightbulb,
    ThermometerSun,
    BarChart3,
    Wind,
    ShieldCheck,
    Gauge,
    Cpu,
    Leaf,
    ClipboardCheck,
    Cog,
    FileText
} from 'lucide-react';

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
                                <Settings size={36} strokeWidth={1.5} />
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
                                <Lightbulb size={36} strokeWidth={1.5} />
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
                                <ThermometerSun size={36} strokeWidth={1.5} />
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
                                <BarChart3 size={36} strokeWidth={1.5} />
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
                                <Wind size={36} strokeWidth={1.5} />
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
                                <ShieldCheck size={36} strokeWidth={1.5} />
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
                                <Gauge size={36} strokeWidth={1.5} />
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
                                <Cpu size={36} strokeWidth={1.5} />
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
                                <Leaf size={36} strokeWidth={1.5} />
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
                                <ClipboardCheck size={36} strokeWidth={1.5} />
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
                                <Cog size={36} strokeWidth={1.5} />
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
                                <FileText size={36} strokeWidth={1.5} />
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
