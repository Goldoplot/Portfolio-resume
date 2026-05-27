// src/App.jsx
import { useState } from 'react';
import {profile, skills, projects, experience, education, timelineEvents} from './data/portfolioData';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import More_about_me from "./components/More_about_me.jsx";

export default function App() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header profile={profile} />
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="max-w-6xl mx-auto px-6 py-12">
                {activeTab === 'about' && <About />}
                {activeTab === 'skills' && <Skills skills={skills} />}
                {activeTab === 'projects' && <Projects projects={projects} />}
                {activeTab === 'experience' && <Experience experience={experience} education={education} />}
                {activeTab === 'more_about_me' && <More_about_me timelineEvents={timelineEvents}/>}
            </main>
            <Footer profile={profile} />
        </div>
    );
}
