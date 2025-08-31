// src/components/Skills.jsx
import { Palette, Database, Code } from 'lucide-react';

export default function Skills({ skills }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Palette className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Front-End</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, i) => (
                        <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                        <Database className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Back-End</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                        <span key={i} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Code className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, i) => (
                        <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                        <code className="text-amber-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, i) => (
                        <span key={i} className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">
                {skill}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
