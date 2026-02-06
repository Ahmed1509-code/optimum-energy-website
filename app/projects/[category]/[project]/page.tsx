"use client";

import { Navbar } from "@/components/ui/navbar";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Building2, Factory, Hotel, Heart, Building, Landmark } from "lucide-react";
import { getProjectById, getCategoryById } from "@/lib/projects-data";

const categoryIcons = {
    corporate: Building2,
    industrial: Factory,
    hospitality: Hotel,
    medical: Heart,
    governmental: Building,
    landmark: Landmark
};

export default function ProjectDetailPage({
    params
}: {
    params: { category: string; project: string }
}) {
    const project = getProjectById(params.project);
    const category = getCategoryById(params.category);

    if (!project || !category || project.category !== params.category) {
        notFound();
    }

    const Icon = categoryIcons[category.id as keyof typeof categoryIcons];

    return (
        <main className="min-h-screen bg-zinc-900">
            <Navbar />

            {/* Dark Background Project Detail */}
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Back Link */}
                    <Link
                        href={`/projects/${params.category}`}
                        className="inline-flex items-center gap-2 text-optimum-blue hover:text-optimum-blue-dark font-semibold mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to {category.name} Projects
                    </Link>

                    {/* Split Layout */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Side - Project Info */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {project.name}
                            </h1>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Right Side - Logo & Details */}
                        <div className="space-y-8">
                            {/* Logo Placeholder */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 flex items-center justify-center h-48">
                                <div className="text-center">
                                    <Icon className="w-16 h-16 text-white/30 mx-auto mb-2" />
                                    <p className="text-white/50 text-sm">Client Logo</p>
                                </div>
                            </div>

                            {/* Project Information */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Project Information</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                        <span className="text-zinc-400 font-semibold">Client</span>
                                        <span className="text-white text-right">{project.client || "N/A"}</span>
                                    </div>
                                    <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                        <span className="text-zinc-400 font-semibold">Location</span>
                                        <span className="text-white text-right">{project.location || "N/A"}</span>
                                    </div>
                                    <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                        <span className="text-zinc-400 font-semibold">Category</span>
                                        <span className="text-white text-right">{category.name}</span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <span className="text-zinc-400 font-semibold">Status</span>
                                        <span className={`text-right font-semibold ${project.status === "Completed" ? "text-green-400" :
                                                project.status === "In Progress" ? "text-yellow-400" :
                                                    "text-blue-400"
                                            }`}>
                                            {project.status || "N/A"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
