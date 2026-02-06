
import ContactForm from '@/components/contact-form';

export default function Contact() {
    return (
        <main>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Get in <span className="gradient-text">Touch</span></h1>
                    <p>Let's discuss how we can help transform your energy systems</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p className="contact-intro">Reach out to us for inquiries, consultations, or support. Our team is ready
                                to assist you.</p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-item-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>King Fahad Branch Road<br />Al Olaya District<br />Building No. 7062 – Postal Code
                                            12311<br />Riyadh, Saudi Arabia</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-item-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path
                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>
                                            <a href="mailto:support@optenergysys.com">support@optenergysys.com</a><br />
                                            <a href="mailto:sales@optenergysys.com">sales@optenergysys.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-item-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Business Hours</h4>
                                        <p>Sunday - Thursday: 8:00 AM - 5:00 PM<br />Friday - Saturday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2>Send Us a Message</h2>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-tag">Find Us</span>
                        <h2>Our Location</h2>
                    </div>
                    <div className="map-container">
                        <div className="map-placeholder">
                            <div className="map-placeholder-content">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <p>King Fahad Branch Road, Al Olaya District, Riyadh</p>
                                <a href="https://maps.app.goo.gl/UnYTgGbPiqZXGrKt6" target="_blank" className="btn btn-outline" rel="noopener noreferrer">Open
                                    in Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
