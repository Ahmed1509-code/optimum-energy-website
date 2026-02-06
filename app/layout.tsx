
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Optimum Energy Systems - Smart Energy Solutions",
  description: "Advanced building automation, energy management, and sustainable solutions for a greener future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white text-slate-900`}>
        <Navbar />
        {children}
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>Optimum Energy Systems</h3>
                        <p>Automation & Sustainability Ingenuity</p>
                        <p style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.8 }}>Johnson Controls Authorized System Integrator</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/markets">Markets</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="https://maps.app.goo.gl/UnYTgGbPiqZXGrKt6" target="_blank" rel="noopener noreferrer">King Fahad Branch Road</a></li>
                            <li><a href="https://maps.app.goo.gl/UnYTgGbPiqZXGrKt6" target="_blank" rel="noopener noreferrer">Al Olaya District, Riyadh</a></li>
                            <li><a href="https://maps.app.goo.gl/UnYTgGbPiqZXGrKt6" target="_blank" rel="noopener noreferrer">Building No. 7062 – Postal Code 12311</a></li>
                            <li><a href="https://maps.app.goo.gl/UnYTgGbPiqZXGrKt6" target="_blank" rel="noopener noreferrer">Saudi Arabia</a></li>
                            <li><a href="mailto:support@optenergysys.com">support@optenergysys.com</a></li>
                            <li><a href="mailto:sales@optenergysys.com">sales@optenergysys.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Optimum Energy Systems. All rights reserved.</p>
                </div>
            </div>
        </footer>
      </body>
    </html>
  );
}
