import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Brand Colors
const colors = {
    primary: '#0029A2', // Deep Blue
    secondary: '#00CBFF', // Cyan
    white: '#FFFFFF',
    gray: '#808080',
    black: '#000000'
};

// Counter Animation Hook
function useCountUp(target: number, duration: number = 2000, suffix: string = '') {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);

                    const startTime = performance.now();
                    const startValue = 0;

                    const updateCount = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Easing function
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const currentValue = Math.floor(startValue + (target - startValue) * easeOut);

                        setCount(currentValue);

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, duration, isVisible]);

    return { count: count + suffix, ref };
}

// Fade In Animation Hook
function useFadeInAnimation() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return { isVisible, ref };
}

// Hero Component
function HeroSection() {
    const counter200 = useCountUp(200, 2000, '+');
    const counter54 = useCountUp(54, 2000);
    const counter99 = useCountUp(99, 2000, '%');
    const counter3 = useCountUp(3, 2000, 'x');

    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Animated Background */}
            <div
                className="absolute inset-0"
            />
            {/* Gradient Orbs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,188,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,188,212,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 20}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="text-center">
                    {/* Animated Badge */}
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-slideDown">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-cyan-400 font-semibold text-sm">Africa's Premier Applied AI Company</span>
                    </div>

                    {/* Main Headline with Animation */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fadeInUp">
                        <span className="text-white">Engineering</span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Intelligence</span>
                        <br />
                        <span className="text-white">Delivering</span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Excellence</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        Transform your business with <span className="text-cyan-400 font-semibold">astronomical efficiency</span>.
                        We deliver AI solutions that actually work – tested and proven in real African environments.
                    </p>

                    {/* CTA Buttons with Hover Effects */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Start Your AI Transformation</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
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

                    {/* Animated Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        <div className="text-center transform hover:scale-110 transition-transform duration-300" ref={counter200.ref}>
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{counter200.count}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide">AI Systems Deployed</div>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-transform duration-300" ref={counter54.ref}>
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{counter54.count}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide">African Countries</div>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-transform duration-300" ref={counter99.ref}>
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{counter99.count}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide">Success Rate</div>
                        </div>
                        <div className="text-center transform hover:scale-110 transition-transform duration-300" ref={counter3.ref}>
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{counter3.count}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide">Faster ROI</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
                <a href="#about" className="inline-block">
                    <div className="text-slate-400 text-sm mb-2">Explore More</div>
                    <svg className="w-6 h-6 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}

// About Section with enhanced visuals and images
function AboutSection() {
    const fadeIn1 = useFadeInAnimation();
    const fadeIn2 = useFadeInAnimation();
    const fadeIn3 = useFadeInAnimation();
    const fadeIn4 = useFadeInAnimation();
    const fadeIn5 = useFadeInAnimation();

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section with Hero Image */}
                <div ref={fadeIn1.ref} className={`text-center mb-20 transition-all duration-1000 ${fadeIn1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0029A2] mb-6">Who We Are</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                        Africa's premier applied AI company, engineering intelligent systems that transform businesses from the ground up.
                    </p>

                    {/* Hero Image with Enhanced Hover Effects */}
                    <div className="relative max-w-4xl mx-auto mb-16 group">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0029A2] to-[#00CBFF] p-1 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl group-hover:shadow-[#00CBFF]/20">
                            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                                <img
                                    src="/images/about-hero.jpg"
                                    alt="Kukuma Advanced Technologies - AI Innovation in Africa"
                                    className="w-full h-full object-cover rounded-xl transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="hidden w-full h-full bg-gradient-to-br from-[#0029A2] to-[#00CBFF] rounded-xl items-center justify-center text-white">
                                    <div className="text-center">
                                        <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-lg font-semibold">AI Innovation in Africa</p>
                                        <p className="text-sm opacity-80">Place your hero image: about-hero.jpg</p>
                                    </div>
                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0029A2]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center pb-8">
                                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
                                            <p className="font-semibold text-lg">AI Innovation in Africa</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Corner Elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00CBFF] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00CBFF] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#00CBFF] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00CBFF] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                                {/* Pulse Effect */}
                                <div className="absolute inset-0 rounded-xl border-2 border-[#00CBFF] opacity-0 group-hover:opacity-30 animate-ping group-hover:animate-pulse transition-opacity duration-500"></div>
                            </div>
                        </div>

                        {/* Floating Action Button */}
                        <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                            <div className="bg-gradient-to-r from-[#0029A2] to-[#00CBFF] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Background Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#0029A2]/20 to-[#00CBFF]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    </div>
                </div>

                {/* Vision & Mission Section - Enhanced Design */}
                <div className="mb-24">
                    {/* Vision Section */}
                    <div ref={fadeIn2.ref} className={`mb-16 transition-all duration-1000 delay-200 ${fadeIn2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden rounded-3xl">
                            {/* Animated Grid Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,188,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,188,212,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>

                            {/* Gradient Orbs */}
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>

                            {/* Floating Particles */}
                            <div className="absolute inset-0">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random() * 5}s`,
                                            animationDuration: `${10 + Math.random() * 20}s`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="relative p-8 md:p-12">
                                <div className="max-w-4xl mx-auto">
                                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                                        {/* Icon Section */}
                                        <div className="lg:col-span-3 flex justify-center lg:justify-start">
                                            <div className="relative group">
                                                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30 p-1">
                                                    <img
                                                        src="/images/vision-icon.jpg"
                                                        alt="Our Vision"
                                                        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                            e.currentTarget.nextElementSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div className="hidden w-full h-full bg-white/20 backdrop-blur-sm rounded-xl items-center justify-center">
                                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {/* Floating badge */}
                                                <div className="absolute -top-3 -right-3 bg-[#00CBFF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                    VISION
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="lg:col-span-9 text-center lg:text-left">
                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h3>
                                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                                                To drive <span className="text-[#00CBFF] font-semibold">astronomical efficiency</span> by harnessing applied AI and hardware innovation.
                                            </p>
                                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                                                    Applied AI
                                                </span>
                                                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                                                    Hardware Innovation
                                                </span>
                                                <span className="bg-[#00CBFF]/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-[#00CBFF]/50">
                                                    Astronomical Efficiency
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    {/* Mission Section */}
                    <div ref={fadeIn3.ref} className={`transition-all duration-1000 delay-400 ${fadeIn3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden rounded-3xl">
                            {/* Animated Grid Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,188,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,188,212,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>

                            {/* Gradient Orbs */}
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
                            <div className="absolute -bottom-8 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>

                            {/* Floating Particles */}
                            <div className="absolute inset-0">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random() * 5}s`,
                                            animationDuration: `${10 + Math.random() * 20}s`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="relative p-8 md:p-12">
                                <div className="max-w-4xl mx-auto">
                                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                                        {/* Content Section - Reversed order for visual balance */}
                                        <div className="lg:col-span-9 text-center lg:text-left order-2 lg:order-1">
                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h3>
                                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6">
                                                To be the <span className="text-cyan-400 font-semibold">ultimate AI solutions provider</span>—delivering real, measurable transformation for industries, governments, and societies worldwide.
                                            </p>
                                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                                    Industries
                                                </span>
                                                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                                    Governments
                                                </span>
                                                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                                    Societies
                                                </span>
                                                <span className="bg-cyan-500/10 backdrop-blur-sm text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/20">
                                                    Measurable Impact
                                                </span>
                                            </div>
                        </div>

                                        {/* Icon Section */}
                                        <div className="lg:col-span-3 flex justify-center lg:justify-end order-1 lg:order-2">
                                            <div className="relative group">
                                                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30 p-1">
                                                    <img
                                                        src="/images/mission-icon.jpg"
                                                        alt="Our Mission"
                                                        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                            e.currentTarget.nextElementSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div className="hidden w-full h-full bg-white/20 backdrop-blur-sm rounded-xl items-center justify-center">
                                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                    </div>
                                </div>
                                                {/* Floating badge */}
                                                <div className="absolute -top-3 -left-3 bg-cyan-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                    MISSION
                                    </div>
                                </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            </div>

                {/* Core Values with Improved Layout and Background */}
                <div ref={fadeIn4.ref} className={`relative mb-24 transition-all duration-1000 delay-600 ${fadeIn4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Background Section */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50 -mx-4 sm:-mx-6 lg:-mx-8 rounded-3xl"></div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,41,162,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,41,162,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-3xl"></div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#00CBFF]/10 to-transparent rounded-full blur-2xl"></div>
                        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-[#0029A2]/10 to-transparent rounded-full blur-2xl"></div>
                        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-[#00CBFF]/5 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-[#0029A2]/8 to-transparent rounded-full blur-2xl"></div>
                        </div>

                    {/* Content */}
                    <div className="relative py-20">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#00CBFF]/20 rounded-full px-6 py-2 mb-6">
                                <div className="w-2 h-2 bg-[#00CBFF] rounded-full animate-pulse"></div>
                                <span className="text-[#0029A2] font-semibold text-sm uppercase tracking-wide">Our Foundation</span>
                                </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0029A2] mb-6">Our Core Values</h3>
                            <p className="text-xl text-gray-700 max-w-3xl mx-auto">The principles that guide everything we do, forming the foundation of our AI-driven mission</p>
                    </div>

                    {/* Mobile: Stack Layout, Desktop: Circular Layout */}
                    <div className="block md:hidden">
                        {/* Mobile Stack Layout */}
                        <div className="space-y-6 max-w-sm mx-auto">
                            {[
                                {
                                    title: "Innovation",
                                    description: "Pushing boundaries with practical AI applications",
                                    image: "innovation.jpg",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    )
                                },
                                {
                                    title: "Impact",
                                    description: "Creating tangible change that matters",
                                    image: "impact.jpg",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Scalability",
                                    description: "From single facilities to national deployments",
                                    image: "scalability.jpg",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Ethics",
                                    description: "Responsible AI designed with compliance at its core",
                                    image: "ethics.jpg",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Partnership",
                                    description: "Working alongside you to achieve success",
                                    image: "partnership.jpg",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    )
                                }
                            ].map((value, index) => (
                                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-[#0029A2]/10 to-[#00CBFF]/10 flex-shrink-0 relative">
                                                <img
                                                    src={`/images/${value.image}`}
                                                    alt={value.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="hidden w-full h-full bg-gradient-to-br from-[#0029A2] to-[#00CBFF] items-center justify-center">
                                                    {value.icon}
                                    </div>
                                </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-[#0029A2] mb-2 group-hover:text-[#00CBFF] transition-colors">
                                                    {value.title}
                                                </h4>
                                                <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Circular Hub Layout */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Central Hub */}
                            <div className="flex justify-center mb-16">
                                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[#0029A2] to-[#00CBFF] shadow-2xl flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <svg className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                        <p className="text-sm lg:text-base font-bold">KUKUMA</p>
                                        <p className="text-xs opacity-90">VALUES</p>
                                    </div>
                                </div>
                            </div>

                            {/* Values in a 2-3-0 arrangement */}
                            <div className="space-y-12">
                                {/* Top Row - 2 cards */}
                                <div className="flex justify-center gap-8 lg:gap-16">
                                    {[
                                        {
                                            title: "Innovation",
                                            description: "Pushing boundaries with practical AI applications",
                                            image: "innovation.jpg",
                                            icon: (
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                            )
                                        },
                                        {
                                            title: "Impact",
                                            description: "Creating tangible change that matters",
                                            image: "impact.jpg",
                                            icon: (
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            )
                                        }
                                    ].map((value, index) => (
                                        <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 w-80">
                                            <div className="p-6">
                                                <div className="relative mb-4">
                                                    <div className="w-full h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#0029A2]/10 to-[#00CBFF]/10">
                                                        <img
                                                            src={`/images/${value.image}`}
                                                            alt={value.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none';
                                                                e.currentTarget.nextElementSibling.style.display = 'flex';
                                                            }}
                                                        />
                                                        <div className="hidden w-full h-full bg-gradient-to-br from-[#0029A2] to-[#00CBFF] items-center justify-center">
                                                            {value.icon}
                                    </div>
                                </div>
                                                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-[#0029A2] to-[#00CBFF] rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                                            {value.icon}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center pt-2">
                                                    <h4 className="text-xl lg:text-2xl font-bold text-[#0029A2] mb-3 group-hover:text-[#00CBFF] transition-colors duration-300">
                                                        {value.title}
                                                    </h4>
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {value.description}
                                                    </p>
                                                </div>
                                                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-gradient-to-r from-[#0029A2] to-[#00CBFF] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Row - 3 cards */}
                                <div className="flex justify-center gap-6 lg:gap-8">
                                    {[
                                        {
                                            title: "Scalability",
                                            description: "From single facilities to national deployments",
                                            image: "scalability.jpg",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                            )
                                        },
                                        {
                                            title: "Ethics",
                                            description: "Responsible AI designed with compliance at its core",
                                            image: "ethics.jpg",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Partnership",
                                            description: "Working alongside you to achieve success",
                                            image: "partnership.jpg",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            )
                                        }
                                    ].map((value, index) => (
                                        <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 w-72">
                                            <div className="p-6">
                                                <div className="relative mb-4">
                                                    <div className="w-full h-28 rounded-xl overflow-hidden bg-gradient-to-br from-[#0029A2]/10 to-[#00CBFF]/10">
                                                        <img
                                                            src={`/images/${value.image}`}
                                                            alt={value.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none';
                                                                e.currentTarget.nextElementSibling.style.display = 'flex';
                                                            }}
                                                        />
                                                        <div className="hidden w-full h-full bg-gradient-to-br from-[#0029A2] to-[#00CBFF] items-center justify-center">
                                                            {value.icon}
                                    </div>
                                </div>
                                                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-[#0029A2] to-[#00CBFF] rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                                            {value.icon}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center pt-2">
                                                    <h4 className="text-lg lg:text-xl font-bold text-[#0029A2] mb-2 group-hover:text-[#00CBFF] transition-colors duration-300">
                                                        {value.title}
                                                    </h4>
                                                    <p className="text-gray-700 leading-relaxed text-sm">
                                                        {value.description}
                                                    </p>
                                                </div>
                                                <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-gradient-to-r from-[#0029A2] to-[#00CBFF] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* Bottom CTA */}
                        <div className="text-center mt-16">
                            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-[#00CBFF]/30 rounded-full px-8 py-4 shadow-lg hover:bg-white/80 transition-all duration-300">
                                <svg className="w-6 h-6 text-[#00CBFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-[#0029A2] font-semibold text-lg">These values drive every AI solution we create</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kukuma Advantage with Solid Background */}
                <div ref={fadeIn5.ref} className={`relative transition-all duration-1000 delay-800 ${fadeIn5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Solid Background */}
                        <div className="absolute inset-0 bg-[#1362BE]"></div>

                        {/* Subtle Pattern Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                        {/* Decorative Elements */}
                        <div className="absolute top-6 right-6 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/8 rounded-full blur-xl"></div>
                        <div className="absolute top-1/3 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/60 rounded-full"></div>

                        <div className="relative p-12 text-white">
                            <div className="max-w-4xl mx-auto text-center">
                                <h3 className="text-3xl md:text-4xl font-bold mb-8">The Kukuma Advantage</h3>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: "AI That Actually Works",
                                            description: "Tested and proven in real-world African environments",
                                            icon: (
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Astronomical Efficiency",
                                            description: "Direct cost savings you can measure",
                                            icon: (
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Africa-Tested, Globally Ready",
                                            description: "Built to thrive in challenging conditions",
                                            icon: (
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Proven ROI",
                                            description: "Measurable impact on your bottom line",
                                            icon: (
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                            )
                                        }
                                    ].map((advantage, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[#00CBFF]/30 rounded-lg flex items-center justify-center">
                                                {advantage.icon}
                                    </div>
                                            <div className="text-left">
                                                <h4 className="text-xl font-bold mb-2">{advantage.title}</h4>
                                                <p className="text-white/90 leading-relaxed">{advantage.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Services Section with alternating background
function ServicesSection() {
    const services = [
        {
            title: "XVSN - Visual Intelligence Platform",
            description: "Transform Your Camera Systems Into Intelligent Business Assets",
            features: [
                "Real-time video analytics with instant alerts",
                "Edge AI + Cloud integration for optimal performance",
                "Human-level awareness at enterprise scale",
                "Smart Cities & Infrastructure monitoring",
                "Manufacturing quality control & safety compliance"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            applications: "Smart Cities, Manufacturing, Mining, Agriculture, Healthcare, Logistics"
        },
        {
            title: "PentaPay - Financial Intelligence",
            description: "Revolutionize Your Digital Finance Operations",
            features: [
                "Advanced fraud detection - stop threats before impact",
                "Intelligent transaction routing optimization",
                "Behavioral analytics & AI credit scoring",
                "Robo-advisory automated investment",
                "Real-time risk management & compliance"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            ),
            applications: "Banking, FinTech, Insurance, Investment Management"
        },
        {
            title: "Business Management AI Suite",
            description: "Optimize Every Aspect of Your Enterprise Operations",
            features: [
                "AI for ERP - predictive analytics & automation",
                "AI for CRM - personalized customer interactions",
                "Business Intelligence & advanced analytics",
                "AI for HR - automated screening & retention",
                "Supply chain intelligence & optimization"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            applications: "Enterprise, Manufacturing, Retail, Healthcare, Government"
        },
        {
            title: "AV & Immersive Experience",
            description: "Create Unforgettable Environments That Drive Engagement",
            features: [
                "LED walls & large-format digital signage",
                "Multi-screen video walls with seamless control",
                "Projection mapping & augmented reality",
                "Professional audio systems & smart lighting",
                "Interactive kiosks & immersive experience zones"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            applications: "Retail, Events, Museums, Corporate Spaces, Entertainment Venues"
        }
    ];

    const fadeInRefs = services.map(() => {
        const { isVisible, ref } = useFadeInAnimation();
        return { isVisible, ref };
    });

    return (
        <section id="solutions" className="py-20 bg-[#11192E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">Our Solutions Portfolio</h2>
                    <p className="text-xl text-[#808080] max-w-3xl mx-auto">
                        B2B-focused enterprise solutions exclusively for businesses, institutions, and government bodies
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={fadeInRefs[index].ref}
                            className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden
                                ${fadeInRefs[index].isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Animated Border */}
                            <div className="absolute inset-0 bg-[#00CBFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-[#FFFFFF] m-[2px] rounded-2xl overflow-hidden">
                                {/* Image Placeholder */}
                                <div className="relative h-48 bg-gradient-to-br from-[#0029A2]/10 to-[#00CBFF]/10 overflow-hidden">
                                    <img
                                        src={`/images/solution-${index + 1}.jpg`}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback placeholder */}
                                    <div className="w-full h-full bg-gradient-to-br from-[#0029A2]/20 to-[#00CBFF]/20 flex items-center justify-center">
                                        <div className="text-center text-[#0029A2]">
                                            <div className="w-16 h-16 bg-[#0029A2] rounded-xl flex items-center justify-center mb-4 text-[#FFFFFF] mx-auto">
                                                {service.icon}
                                            </div>
                                            <p className="text-sm font-semibold">Solution Image</p>
                                            <p className="text-xs opacity-70">solution-{index + 1}.jpg</p>
                                        </div>
                                    </div>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-[#0029A2]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-semibold">View Details</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#0029A2] mb-3">{service.title}</h3>
                                    <p className="text-[#808080] mb-4 font-medium">{service.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-[#00CBFF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-[#808080] text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-[#808080]/20">
                                    <p className="text-sm text-[#808080]">
                                        <span className="font-semibold">Industries:</span> {service.applications}
                                    </p>
                                </div>

                                    <a href="#contact" className="inline-flex items-center gap-2 mt-4 text-[#0029A2] font-semibold hover:text-[#00CBFF] transition-colors">
                                        Learn More
                                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

// Custom Solutions & Consultancy Section
function CustomSolutionsSection() {
    const fadeIn1 = useFadeInAnimation();
    const fadeIn2 = useFadeInAnimation();
    const fadeIn3 = useFadeInAnimation();

    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,188,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,188,212,0.03)_1px,transparent_1px)] bg-[size:8rem_8rem]"></div>

            {/* Floating Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div ref={fadeIn1.ref} className={`text-center mb-16 transition-all duration-1000 ${fadeIn1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">Beyond Standard Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Custom Solutions & Consultancy</h2>
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        Every challenge is unique. We combine and adapt our technologies to engineer custom,
                        practical applications that solve your <span className="text-cyan-400 font-semibold">most complex problems</span>.
                    </p>
                            </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left: Custom Solutions */}
                    <div ref={fadeIn2.ref} className={`transition-all duration-1000 delay-200 ${fadeIn2.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Tailored Engineering</h3>
                                    <p className="text-cyan-400 font-medium">Built for Your Specific Needs</p>
                                </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Our engineering team doesn't just adapt existing solutions—we build from the ground up.
                                Whether you need specialized AI models, custom hardware integration, or unique business logic,
                                we create solutions that fit your exact requirements.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Custom AI model development",
                                    "Specialized hardware integration",
                                    "Unique business logic implementation",
                                    "Legacy system modernization"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Cybersecurity Services */}
                    <div ref={fadeIn3.ref} className={`transition-all duration-1000 delay-400 ${fadeIn3.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Cybersecurity & Data Protection</h3>
                                    <p className="text-cyan-400 font-medium">Enterprise-Grade Security</p>
                                </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Protect your digital assets with our comprehensive cybersecurity solutions.
                                From threat detection to compliance management, we ensure your business stays secure and operational.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: "🛡️", text: "Proactive threat intelligence" },
                                    { icon: "⚖️", text: "Risk assessment & mitigation" },
                                    { icon: "📋", text: "Regulatory compliance" },
                                    { icon: "🔄", text: "Business continuity planning" }
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                                        <span className="text-slate-300 font-medium">{service.text}</span>
                        </div>
                                ))}
                    </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
                        <a href="#contact" className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        <span>Let's Build Your Solution</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>

                        <div className="text-center sm:text-left">
                            <p className="text-slate-400 text-sm mb-1">Ready to discuss your project?</p>
                            <p className="text-cyan-400 font-semibold">Free consultation available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Leadership Team Section
function TeamSection() {
    const team = [
        { name: "Artwell Nguruve", role: "Chief Executive Officer", expertise: "AI Strategy & Business Development" },
        { name: "Janet Sawari", role: "Technology Officer", expertise: "Machine Learning & AI Development" },
        { name: "Isaac Wisikoti", role: "Operations Director", expertise: "Edge Computing & IoT" },
        { name: "Tinotenda Mtana", role: "Data Analyst", expertise: "Data Science & Analytics" }
    ];

    return (
        <section id="team" className="py-20 relative">
            <div className="relative rounded-3xl overflow-hidden mx-4 sm:mx-6 lg:mx-8">
                {/* Solid Background */}
                <div className="absolute inset-0 bg-[#1362BE]"></div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/8 rounded-full blur-xl"></div>
                <div className="absolute top-1/3 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/60 rounded-full"></div>

                <div className="relative p-12">
                    <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Leadership Team</h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Driven by dedicated experts in AI research and development with extensive experience in transforming African businesses
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-[#00CBFF] to-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-[#0029A2] text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-[#00CBFF] font-medium mb-2">{member.role}</p>
                            <p className="text-white/70 text-sm">{member.expertise}</p>
                        </div>
                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Testimonials Section
function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Kukuma's AI solutions delivered 3x ROI within the first year. Their XVSN platform transformed our security operations completely.",
            name: "Sarah Mwangi",
            title: "CTO, Major Bank",
            industry: "Banking & Finance"
        },
        {
            quote: "The PentaPay system caught fraudulent transactions we never knew existed, saving us millions in potential losses.",
            name: "Ahmed Hassan",
            title: "Security Director",
            industry: "Retail & Security"
        },
        {
            quote: "Their business intelligence suite gave us insights that changed how we operate. Efficiency increased by 150%.",
            name: "Chioma Okonkwo",
            title: "CEO, FinTech Company",
            industry: "Financial Technology"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0029A2] mb-6">Real Solutions. Real Results. Real Impact.</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Hear from businesses across Africa who have transformed their operations with our AI solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <svg className="w-10 h-10 text-[#00CBFF] mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                            <div className="border-t border-gray-200 pt-4">
                                <div className="font-semibold text-[#0029A2]">{testimonial.name}</div>
                                <div className="text-[#00CBFF] text-sm">{testimonial.title}</div>
                                <div className="text-gray-500 text-sm mt-1">{testimonial.industry}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Contact Section
function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-[#1362BE]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-[#FFFFFF] max-w-3xl mx-auto">
                        Let's discuss how Kukuma's advanced technologies can drive astronomical efficiency in your organization
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CBFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#00CBFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                                        <p className="text-white/80">Multiple Locations Across Africa</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CBFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#00CBFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <a href="mailto:info@kukumatech.com" className="text-[#00CBFF] hover:text-white transition-colors">info@kukumatech.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CBFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#00CBFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Website</h4>
                                        <a href="https://www.kukumatech.com" className="text-[#00CBFF] hover:text-white transition-colors">www.kukumatech.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#00CBFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#00CBFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Support</h4>
                                        <p className="text-white/80">24/7 Support Available</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <h4 className="font-semibold text-white mb-4">Partnership Opportunities</h4>
                                <p className="text-white/80 text-sm mb-4">
                                    We're actively seeking partnerships with enterprise clients, government bodies,
                                    technology partners, and investment partners.
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 text-[#00CBFF] font-semibold hover:text-white transition-colors">
                                    Become a Partner
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form className="bg-white rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-[#0029A2] mb-6">Send Us a Message</h3>

                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00CBFF] transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00CBFF] transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00CBFF] transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                        Company / Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00CBFF] transition-colors"
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-1">
                                        Solution Interest
                                    </label>
                                    <select
                                        id="solution"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00CBFF] transition-colors"
                                    >
                                        <option>XVSN - Visual Intelligence</option>
                                        <option>PentaPay - Financial Intelligence</option>
                                        <option>Business Management AI</option>
                                        <option>AV & Immersive Experience</option>
                                        <option>Custom Solution</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00CBFF] transition-colors"
                                        placeholder="Tell us about your project and requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#0029A2] to-[#00CBFF] text-white font-bold py-4 rounded-lg hover:from-[#0029A2] hover:to-[#00CBFF]/90 transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    Start Your AI Transformation
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="bg-[#11192E] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <a href="#home" className="inline-block mb-4">
                            <img src="/images/kukuma logo landscape.svg" alt="Kukuma Advanced Technologies" className="h-16 w-auto hover:opacity-80 transition-opacity duration-300" />
                        </a>
                        <p className="text-gray-400 mb-4">
                            Engineering Intelligence. Delivering Excellence.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Africa's premier applied AI company transforming businesses with solutions that actually work.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Solutions</h4>
                        <ul className="space-y-2">
                            <li><a href="#solutions" className="text-gray-400 hover:text-[#00CBFF] transition-colors">XVSN Platform</a></li>
                            <li><a href="#solutions" className="text-gray-400 hover:text-[#00CBFF] transition-colors">PentaPay</a></li>
                            <li><a href="#solutions" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Business AI Suite</a></li>
                            <li><a href="#solutions" className="text-gray-400 hover:text-[#00CBFF] transition-colors">AV & Immersive</a></li>
                            <li><a href="#solutions" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Custom Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-400 hover:text-[#00CBFF] transition-colors">About Us</a></li>
                            <li><a href="#team" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Leadership</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Partners</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Case Studies</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00CBFF] transition-colors">API Reference</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00CBFF] transition-colors">Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Kukuma Advanced Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-[#00CBFF] text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-[#00CBFF] text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-[#00CBFF] text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[#00CBFF] font-bold text-lg">The Future is Intelligent. The Future is Kukuma.</p>
                </div>
            </div>
        </footer>
    );
}

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    // Smooth scroll behavior
    useEffect(() => {
        const handleSmoothScroll = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href')?.slice(1);
                if (id) {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <>
            <Head title="Kukuma - Engineering Intelligence. Delivering Excellence." />

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-20px) translateX(10px); }
                    66% { transform: translateY(10px) translateX(-10px); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-float { animation: float 20s ease-in-out infinite; }
                .animate-slideDown { animation: slideDown 0.8s ease-out; }
                .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
            `}</style>

            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="#home" className="flex items-center">
                                <img src="/images/kukuma logo landscape.svg" alt="Kukuma Advanced Technologies" className="h-16 w-auto" />
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
                            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
                            <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors">Solutions</a>
                            <a href="#team" className="text-slate-300 hover:text-cyan-400 transition-colors">Team</a>
                            <a href="#testimonials" className="text-slate-300 hover:text-cyan-400 transition-colors">Results</a>
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

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <CustomSolutionsSection />
                <TeamSection />
                <TestimonialsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
