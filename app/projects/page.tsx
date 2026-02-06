"use client";

import { Navbar } from "@/components/ui/navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
import Image from "next/image";
import { Building2, Factory, Hotel, Heart, Building, Landmark } from "lucide-react";
import { categories } from "@/lib/projects-data";

const categoryIcons = {
    corporate: Building2,
    industrial: Factory,
    hospitality: Hotel,
    medical: Heart,
    governmental: Building,
    landmark: Landmark
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Page Header */}
            <section className="relative pt-32 pb-16 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
                <HeroHighlight containerClassName="absolute inset-0" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
                        Our <span className="text-optimum-blue">Projects</span>
                    </h1>
                    <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore our portfolio of innovative automation solutions across diverse sectors
                    </p>
                </div>
            </section>

            {/* Category Boxes with Glowing Effect */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => {
                            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
                            return (
                                <Link
                                    key={category.id}
                                    href={`/projects/${category.id}`}
                                    className="block"
                                >
                                    <GlowingEffect className="h-80 rounded-2xl overflow-hidden border border-zinc-200 transition-all">
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Dark Overlay - No blue on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <div className="transform group-hover:translate-y-[-8px] transition-transform duration-300">
                                                <Icon className="w-12 h-12 text-white mb-4" />
                                                <h3 className="text-3xl font-bold text-white mb-2">
                                                    {category.name}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Hover Arrow */}
                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </GlowingEffect>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
