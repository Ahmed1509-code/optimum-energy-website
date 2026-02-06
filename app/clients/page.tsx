import { Navbar } from "@/components/ui/navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

const clients = [
    { name: "Johnson Controls", logo: "/logos/johnson-controls.png" },
    { name: "Legrand", logo: "/logos/legrand.png" },
    { name: "Orbita", logo: "/logos/orbita.png" },
    { name: "RAM", logo: "/logos/ram.png" },
    { name: "Honeywell", logo: "/logos/honeywell.png" },
    { name: "Electric House", logo: "/logos/electric-house.png" },
    { name: "Shaker", logo: "/logos/shaker.png" },
    { name: "Arcom", logo: "/logos/arcom.png" },
    { name: "Ministry of Health", logo: "/logos/ministry-of-health.png" },
];

export default function ClientsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Header */}
            <section className="relative pt-32 pb-16 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
                <HeroHighlight containerClassName="absolute inset-0" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
                        Our <span className="text-optimum-blue">Clients</span>
                    </h1>
                    <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Trusted by leading organizations across diverse industries
                    </p>
                </div>
            </section>

            {/* Clients Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {clients.map((client) => (
                            <div
                                key={client.name}
                                className="group relative bg-white rounded-2xl border border-zinc-200 p-8 flex items-center justify-center hover:border-optimum-blue hover:shadow-lg transition-all"
                            >
                                <div className="relative w-full h-20">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className="object-contain grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-zinc-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                        Ready to Join Our Success Stories?
                    </h2>
                    <p className="text-zinc-600 text-lg mb-8 max-w-2xl mx-auto">
                        Partner with us to transform your energy systems and achieve operational excellence
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-optimum-blue text-white font-bold rounded-lg hover:bg-optimum-blue-dark transition-all shadow-lg hover:shadow-xl"
                    >
                        Get Started
                    </a>
                </div>
            </section>
        </main>
    );
}
