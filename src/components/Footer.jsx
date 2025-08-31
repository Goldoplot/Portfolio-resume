// src/components/Footer.jsx
export default function Footer({ profile }) {
    return (
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-gray-400">
                    © 2025 {profile.name}. Built with React and lots of ☕
                </p>
            </div>
        </footer>
    );
}
