import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Simplified Counter Animation Hook
function useCountUp(target: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return; // SSR safety

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    let startTime: number;
                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const currentValue = Math.floor(target * easeOut);

                        setCount(currentValue);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [target, duration, hasAnimated]);

    return { count, ref };
}

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    // Initialize counters
    const counter200 = useCountUp(200);
    const counter54 = useCountUp(54);
    const counter99 = useCountUp(99);
    const counter85 = useCountUp(85);

    return (
        <>
            <Head title="Kukuma - Engineering Intelligence. Delivering Excellence.">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-white">Kukuma</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
                            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
                            <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors">Solutions</a>
                            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
                        </div>

                        {/* Auth Links */}
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,188,212,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,188,212,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    </div>

                    {/* Gradient Orbs */}
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-cyan-400 font-semibold text-sm">Africa's Premier AI Company</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                            <span className="text-white">Engineering</span>
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Intelligence</span>
                            <br />
                            <span className="text-white">Delivering</span>
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Excellence</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                            We transform African businesses with <span className="text-cyan-400 font-semibold">proven AI systems</span> that deliver measurable results. From computer vision to financial intelligence, our solutions drive real efficiency and astronomical growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span>Start Your AI Transformation</span>
                            </a>

                            <a
                                href="#solutions"
                                className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span>Watch Demo</span>
                            </a>
                        </div>

                        {/* Trust Indicators with Animation */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                            <div className="text-center" ref={counter200.ref}>
                                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{counter200.count}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wide">AI Systems Deployed</div>
                            </div>
                            <div className="text-center" ref={counter54.ref}>
                                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{counter54.count}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wide">Countries Served</div>
                            </div>
                            <div className="text-center" ref={counter99.ref}>
                                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{counter99.count}%</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wide">Success Rate</div>
                            </div>
                            <div className="text-center" ref={counter85.ref}>
                                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">${counter85.count}M+</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wide">Client Savings</div>
                            </div>
                        </div>

                        {/* Value Propositions */}
                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                                <p className="text-slate-300 leading-relaxed">200+ successful AI deployments across Africa with 99% accuracy rates and measurable ROI.</p>
                            </div>

                            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Africa-Tested Technology</h3>
                                <p className="text-slate-300 leading-relaxed">Built to thrive in challenging conditions, scalable from single facilities to national deployments.</p>
                            </div>

                            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Measurable ROI</h3>
                                <p className="text-slate-300 leading-relaxed">Our clients achieve $85M+ in cost savings and efficiency gains within the first year.</p>
                            </div>
                        </div>

                        {/* Solutions Preview */}
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
                            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">Comprehensive AI technologies designed for real-world African business challenges</p>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">XVSN - Video Intelligence</h3>
                                    <p className="text-slate-300 mb-6 leading-relaxed">Transform camera systems into intelligent assets with real-time analytics and human-level awareness at scale.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Real-time Analytics</span>
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Edge AI</span>
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Smart City</span>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">PentaPay - FinTech AI</h3>
                                    <p className="text-slate-300 mb-6 leading-relaxed">Revolutionary fraud detection and intelligent transaction routing with behavioral analytics for financial institutions.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Fraud Detection</span>
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Smart Routing</span>
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Risk Assessment</span>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Business Intelligence AI</h3>
                                    <p className="text-slate-300 mb-6 leading-relaxed">AI-powered suite delivering astronomical efficiency across ERP, CRM, and business analytics platforms.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Predictive Analytics</span>
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Automation</span>
                                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Insights</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Client Testimonial */}
                        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="w-12 h-12 mx-auto mb-4 text-cyan-400">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.048.511-.362.218-.72.354-1.05.64-.33.342-.649.51-.977.924-.297.365-.646.648-.895 1.036-.213.363-.456.724-.62 1.107-.248.543-.282 1.163-.388 1.709-.112.533-.204 1.156-.204 1.778 0 .644.235 1.133.235 1.778 0 .645-.235 1.133-.235 1.778v.111c0 .356.147.694.388.951.24.257.568.399.927.399.36 0 .688-.142.927-.399.24-.257.388-.595.388-.951z"/>
                                        <path d="M17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.048.511-.362.218-.72.354-1.05.64-.33.342-.649.51-.977.924-.297.365-.646.648-.895 1.036-.213.363-.456.724-.62 1.107-.248.543-.282 1.163-.388 1.709-.112.533-.204 1.156-.204 1.778 0 .644.235 1.133.235 1.778 0 .645-.235 1.133-.235 1.778v.111c0 .356.147.694.388.951.24.257.568.399.927.399.36 0 .688-.142.927-.399.24-.257.388-.595.388-.951z"/>
                                    </svg>
                                </div>
                                <p className="text-xl md:text-2xl text-white italic leading-relaxed">
                                    "Kukuma's AI solutions increased our operational efficiency by 150% and reduced costs by $2.3M in the first year alone. Their Africa-tested technology works flawlessly in our challenging environment."
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">SM</span>
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-white">Sarah Mwangi</div>
                                    <div className="text-cyan-400">CTO, EcoBank Group</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}