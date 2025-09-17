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

// About Section with different background
function AboutSection() {
    const fadeIn1 = useFadeInAnimation();
    const fadeIn2 = useFadeInAnimation();
    const fadeIn3 = useFadeInAnimation();

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={fadeIn1.ref} className={`text-center mb-16 transition-all duration-1000 ${fadeIn1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0029A2] mb-6">Who We Are</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Africa's premier applied AI company, engineering intelligent systems that transform businesses from the ground up.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div ref={fadeIn2.ref} className={`transition-all duration-1000 delay-200 ${fadeIn2.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h3 className="text-3xl font-bold text-[#0029A2] mb-6">Our Mission</h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            To be the ultimate AI solutions provider—delivering real, measurable transformation for industries, governments, and societies worldwide.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            We combine cutting-edge AI, advanced hardware, and intelligent automation to deliver measurable, on-the-ground efficiency that drives your business forward.
                        </p>

                    </div>

                    <div ref={fadeIn3.ref} className={`relative transition-all duration-1000 delay-400 ${fadeIn3.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-gradient-to-br from-[#0029A2] to-[#00CBFF] rounded-2xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">The Kukuma Advantage</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#00CBFF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold mb-1">AI That Actually Works</h4>
                                        <p className="text-white/90 text-sm">Tested and proven in real-world African environments</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#00CBFF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold mb-1">Astronomical Efficiency</h4>
                                        <p className="text-white/90 text-sm">Direct cost savings you can measure</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#00CBFF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold mb-1">Africa-Tested, Globally Ready</h4>
                                        <p className="text-white/90 text-sm">Built to thrive in challenging conditions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-[#00CBFF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold mb-1">Proven ROI</h4>
                                        <p className="text-white/90 text-sm">Measurable impact on your bottom line</p>
                                    </div>
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
        <section id="solutions" className="py-20 bg-[#000000]">
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

                            <div className="relative bg-[#FFFFFF] m-[2px] rounded-2xl p-8">
                                <div className="w-16 h-16 bg-[#0029A2] rounded-xl flex items-center justify-center mb-6 text-[#FFFFFF] group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
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
                    ))}
                </div>

                {/* Custom Solutions CTA */}
                <div className="mt-12 bg-[#0029A2] rounded-2xl p-8 text-[#FFFFFF] text-center">
                    <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Every challenge is unique. We combine and adapt our technologies to engineer custom,
                        practical applications that solve your most complex problems.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#0029A2] font-bold px-6 py-3 rounded-full hover:bg-[#808080] hover:text-[#FFFFFF] transition-colors">
                        <span>Let's Build Your Solution</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
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
        <section id="team" className="py-20 bg-[#0029A2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <section id="contact" className="py-20 bg-[#0029A2]">
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
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-[#00CBFF] mb-4">Kukuma</h3>
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
                                <img src="/logo/Artboard5.svg" alt="Kukuma Advanced Technologies" className="h-16 w-auto" />
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
                <TeamSection />
                <TestimonialsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}