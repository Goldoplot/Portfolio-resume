// src/components/Projects.jsx
import { Github, ExternalLink } from 'lucide-react';

export default function Projects({ projects }) {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">Mes Projets</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition-transform">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                  {project.status}
                </span>
                            </div>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={project.github} target={"_blank"}
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white transition-colors"
                                >
                                    <Github size={16} /> Code
                                </a>
                                <a
                                    href={project.demo} target={"_blank"}
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors"
                                >
                                    <ExternalLink size={16} /> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
