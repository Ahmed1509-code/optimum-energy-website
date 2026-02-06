"use client";

import { Navbar } from "@/components/ui/navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Building2, Factory, Hotel, Heart, Building, Landmark } from "lucide-react";
import { categories, getProjectsByCategory, getCategoryById } from "@/lib/projects-data";

const categoryIcons = {
    corporate: Building2,
    industrial: Factory,
    hospitality: Hotel,
    medical: Heart,
    governmental: Building,
    landmark: Landmark
};

export default function CategoryProjectsPage({ params }: { params: { category: string } }) {
    const category = getCategoryById(params.category);

    if (!category) {
        notFound();
    }

    const categoryProjects = getProjectsByCategory(params.category);
    const Icon = categoryIcons[category.id as keyof typeof categoryIcons];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Page Header */}
            <section className="relative pt-32 pb-16 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
                <HeroHighlight containerClassName="absolute inset-0" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <Icon className="w-12 h-12 text-optimum-blue" />
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900">
                            {category.name} <span className="text-optimum-blue">Projects</span>
                        </h1>
                    </div>
                    <p className="text-zinc-600 text-lg md:text-xl max-w-2xl">
                        Innovative automation solutions for the {category.name.toLowerCase()} sector
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {categoryProjects.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-zinc-500 text-lg">No projects found in this category yet.</p>
                            <Link
                                href="/projects"
                                className="inline-block mt-6 px-6 py-3 bg-optimum-blue text-white font-bold rounded-lg hover:bg-optimum-blue-dark transition-all"
                            >
                                View All Categories
                            </Link>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryProjects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${params.category}/${project.id}`}
                                    className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-optimum-blue transition-all hover:shadow-xl"
                                >
                                    {/* Project Image Placeholder */}
                                    <div className="relative h-64 bg-gradient-to-br from-zinc-100 to-zinc-200 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Icon className="w-20 h-20 text-zinc-300" />
                                        </div>
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white font-semibold">View Project</span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <div className="mb-2">
                                            <span className="inline-block px-3 py-1 bg-optimum-blue/10 text-optimum-blue text-xs font-bold rounded-full">
                                                {category.name}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-optimum-blue transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-zinc-600 text-sm line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
