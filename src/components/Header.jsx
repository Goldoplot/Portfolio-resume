// src/components/Header.jsx
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Header({ profile }) {
    return (
        <header className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative max-w-6xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="relative">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
                    </div>

                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {profile.name}
                        </h1>
                        <p className="text-2xl mb-6 text-gray-300">{profile.title}</p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                                <Mail size={16} />
                                <span>{profile.email}</span>
                            </a>
                            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                                <Phone size={16} />
                                <span>{profile.phone}</span>
                            </a>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <MapPin size={16} />
                                <span>{profile.location}</span>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-4">
                            <a href={profile.github} target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href={profile.linkedin} target="_blank" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
