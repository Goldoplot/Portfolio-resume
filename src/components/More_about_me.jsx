// src/components/More_about_me.jsx
import { useState } from 'react';
export default function More_about_me({timelineEvents}) {
    const [hoveredEvent, setHoveredEvent] = useState(null);
    /* Mon Parcours - Timeline */
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">Mon Parcours Professionnel</h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="relative">
                    {/* Ligne principale de la timeline */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>

                    {/* Événements de la timeline */}
                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <div
                                key={event.id}
                                className="relative flex items-start group"
                                onMouseEnter={() => setHoveredEvent(event.id)}
                                onMouseLeave={() => setHoveredEvent(null)}
                            >
                                {/* Marqueur de date */}
                                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${event.color} text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-2xl">{event.icon}</span>
                                    {/* Pulse animation */}
                                    <div className={`absolute inset-0 rounded-full ${event.color} animate-ping opacity-20 group-hover:opacity-40`}></div>
                                </div>

                                {/* Date */}
                                <div className="ml-6 mb-2">
                                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${event.color} text-white mb-2`}>
                                        {event.date}
                                    </div>
                                </div>

                                {/* Contenu de l'événement */}
                                <div className={`ml-6 flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 ${
                                    hoveredEvent === event.id ? 'scale-105 bg-white/10 border-white/20 shadow-2xl' : 'hover:bg-white/8'
                                }`}>
                                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                    <p className="text-gray-300 mb-3">{event.description}</p>

                                    {/* Détails qui apparaissent au hover */}
                                    <div className={`overflow-hidden transition-all duration-500 ${
                                        hoveredEvent === event.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="pt-3 border-t border-white/10">
                                            <p className="text-gray-400 leading-relaxed">{event.details}</p>
                                        </div>
                                    </div>

                                    {/* Indicateur de type */}
                                    <div className="flex items-center gap-2 mt-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              event.type === 'education' ? 'bg-blue-500/20 text-blue-300' :
                                  event.type === 'work' ? 'bg-green-500/20 text-green-300' :
                                      event.type === 'project' ? 'bg-purple-500/20 text-purple-300' :
                                          event.type === 'decision' ? 'bg-yellow-500/20 text-yellow-300' :
                                              'bg-red-500/20 text-red-300'
                          }`}>
                            {event.type === 'education' ? '🎓 Formation' :
                                event.type === 'work' ? '💼 Travail' :
                                    event.type === 'project' ? '🛠️ Projet' :
                                        event.type === 'decision' ? '💡 Décision' :
                                            '🎯 Objectif'}
                          </span>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Effet de fin de timeline */}
                    <div className="absolute left-6 -bottom-4 w-4 h-4 bg-gradient-to-br from-purple-500 to-red-500 rounded-full animate-pulse"></div>
                </div>

                {/* Légende */}

            </div>
        </div>
    )}