import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Target, Github, Trophy } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Gradient Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent -z-10" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent -z-10" />
            
            {/* Navigation */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:scale-105 transition-transform">
                                <Target className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">
                                KDA<span className="text-cyan-400">Predict</span>
                            </span>
                        </Link>
                        
                        <div className="flex items-center gap-6">
                            <Link 
                                to={createPageUrl('Home')} 
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                Predictor
                            </Link>
                            <Link 
                                to={createPageUrl('About')} 
                                className="text-sm text-slate-400 hover:text-white transition-colors"
                            >
                                About Model
                            </Link>
                            <a 
                                href="#" 
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                                <Trophy className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-sm text-slate-400">
                                Data Science Regression Project
                            </span>
                        </div>
                        <p className="text-sm text-slate-500">
                            © 2025 KDA Predict. Built with Machine Learning.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}