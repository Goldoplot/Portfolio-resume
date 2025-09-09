// src/components/Experience.jsx
export default function Experience({ experience, education }) {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">Experience & Education</h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">IT Experience</h3>
                <div className="space-y-6">
                    {experience.map((exp, i) => (
                        <div key={i} className="border-l-2 border-blue-500 pl-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                                <span className="text-blue-400 font-medium">{exp.period}</span>
                            </div>
                            <p className="text-gray-400 mb-2">{exp.company}</p>
                            <p className="text-gray-300">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-6">
                    {education.map((edu, i) => (
                        <div key={i} className="border-l-2 border-purple-500 pl-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                <span className="text-purple-400 font-medium">{edu.period}</span>
                            </div>
                            <p className="text-gray-400 mb-2">{edu.school}</p>
                            <p className="text-gray-300">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
