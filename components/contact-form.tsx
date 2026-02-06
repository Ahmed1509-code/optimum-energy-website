
'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 800);
    };

    if (isSuccess) {
        return (
            <div className="form-success-message">
                <h3>Thank you for your message</h3>
                <p>We have received your inquiry and will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required placeholder="Enter your full name" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+966 XX XXX XXXX" />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="consultation">Request Consultation</option>
                    <option value="quote">Request Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={6} required
                    placeholder="Tell us about your project or inquiry..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
