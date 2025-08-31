// src/components/Navigation.jsx
export default function Navigation({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'about', label: 'About me' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'more_about_me', label: 'More about me' }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-center space-x-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                                activeTab === tab.id
                                    ? 'border-blue-400 text-blue-400'
                                    : 'border-transparent text-gray-300 hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
