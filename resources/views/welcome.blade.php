<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kukuma Advanced Technologies - Pioneering AI Solutions for Africa</title>
    <meta name="description" content="Africa's pioneering applied AI company engineering intelligent systems for businesses. Real solutions. Real results. Real impact.">
    <meta name="keywords" content="AI, Artificial Intelligence, Africa, Technology, Business Solutions, Computer Vision, FinTech, Automation">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700;800&family=Wix+Madefor+Text:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
    <!-- Preloader -->
    <div id="preloader">
        <div class="loader">
            <img src="{{ asset('logo/Artboard1.svg') }}" alt="Kukuma Logo" class="loader-logo">
            <div class="loader-spinner"></div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#home" class="nav-logo">
                    <img src="{{ asset('logo/Artboard5.svg') }}" alt="Kukuma Advanced Technologies">
                </a>
                <div class="nav-menu" id="navMenu">
                    <a href="#home" class="nav-link active">Home</a>
                    <a href="#about" class="nav-link">About</a>
                    <a href="#solutions" class="nav-link">Solutions</a>
                    <a href="#why-us" class="nav-link">Why Kukuma</a>
                    <a href="#team" class="nav-link">Team</a>
                    <a href="#contact" class="nav-link">Contact</a>
                    <a href="#contact" class="nav-cta">Get Started</a>
                </div>
                <div class="nav-toggle" id="navToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0">
            <!-- Grid Pattern -->
            <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,188,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,188,212,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>

            <!-- Gradient Orbs -->
            <div class="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div class="text-center">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-cyan-400 font-semibold text-sm">Africa's Premier AI Company</span>
                </div>

                <!-- Main Headline -->
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                    <span class="text-white">Engineering</span>
                    <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Intelligence</span>
                    <br>
                    <span class="text-white">Delivering</span>
                    <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Excellence</span>
                </h1>

                <!-- Subtitle -->
                <p class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                    We transform African businesses with <span class="text-cyan-400 font-semibold">proven AI systems</span> that deliver measurable results. From computer vision to financial intelligence, our solutions drive real efficiency and astronomical growth.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <a href="#contact" class="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <span>Start Your AI Transformation</span>
                        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>

                    <a href="#solutions" class="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        <span>Watch Demo</span>
                    </a>
                </div>

                <!-- Trust Indicators -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" data-counter="200">0</div>
                        <div class="text-sm text-slate-400 uppercase tracking-wide">AI Systems Deployed</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" data-counter="54">0</div>
                        <div class="text-sm text-slate-400 uppercase tracking-wide">Countries Served</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" data-counter="99">0</div>
                        <div class="text-sm text-slate-400 uppercase tracking-wide">% Success Rate</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" data-counter="85">0</div>
                        <div class="text-sm text-slate-400 uppercase tracking-wide">M+ Cost Savings</div>
                    </div>
                </div>

                <!-- Value Propositions -->
                <div class="grid md:grid-cols-3 gap-8 mb-20">
                    <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                        <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Proven Results</h3>
                        <p class="text-slate-300 leading-relaxed">200+ successful AI deployments across Africa with 99% accuracy rates and measurable ROI.</p>
                    </div>

                    <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                        <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Africa-Tested Technology</h3>
                        <p class="text-slate-300 leading-relaxed">Built to thrive in challenging conditions, scalable from single facilities to national deployments.</p>
                    </div>

                    <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                        <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Measurable ROI</h3>
                        <p class="text-slate-300 leading-relaxed">Our clients achieve $85M+ in cost savings and efficiency gains within the first year.</p>
                    </div>
                </div>

                <!-- Solutions Preview -->
                <div class="mb-20">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
                    <p class="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">Comprehensive AI technologies designed for real-world African business challenges</p>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                            <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">XVSN - Video Intelligence</h3>
                            <p class="text-slate-300 mb-6 leading-relaxed">Transform camera systems into intelligent assets with real-time analytics and human-level awareness at scale.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Real-time Analytics</span>
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Edge AI</span>
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Smart City</span>
                            </div>
                        </div>

                        <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                            <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">PentaPay - FinTech AI</h3>
                            <p class="text-slate-300 mb-6 leading-relaxed">Revolutionary fraud detection and intelligent transaction routing with behavioral analytics for financial institutions.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Fraud Detection</span>
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Smart Routing</span>
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Risk Assessment</span>
                            </div>
                        </div>

                        <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                            <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-white mb-4">Business Intelligence AI</h3>
                            <p class="text-slate-300 mb-6 leading-relaxed">AI-powered suite delivering astronomical efficiency across ERP, CRM, and business analytics platforms.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Predictive Analytics</span>
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Automation</span>
                                <span class="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Insights</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Client Testimonial -->
                <div class="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                    <div class="text-center mb-8">
                        <svg class="w-12 h-12 text-cyan-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.048.511-.362.218-.72.354-1.05.64-.33.342-.649.51-.977.924-.297.365-.646.648-.895 1.036-.213.363-.456.724-.62 1.107-.248.543-.282 1.163-.388 1.709-.112.533-.204 1.156-.204 1.778 0 .644.235 1.133.235 1.778 0 .645-.235 1.133-.235 1.778v.111c0 .356.147.694.388.951.24.257.568.399.927.399.36 0 .688-.142.927-.399.24-.257.388-.595.388-.951z"/>
                            <path d="M17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.048.511-.362.218-.72.354-1.05.64-.33.342-.649.51-.977.924-.297.365-.646.648-.895 1.036-.213.363-.456.724-.62 1.107-.248.543-.282 1.163-.388 1.709-.112.533-.204 1.156-.204 1.778 0 .644.235 1.133.235 1.778 0 .645-.235 1.133-.235 1.778v.111c0 .356.147.694.388.951.24.257.568.399.927.399.36 0 .688-.142.927-.399.24-.257.388-.595.388-.951z"/>
                        </svg>
                        <p class="text-xl md:text-2xl text-white italic leading-relaxed">
                            "Kukuma's AI solutions increased our operational efficiency by 150% and reduced costs by $2.3M in the first year alone. Their Africa-tested technology works flawlessly in our challenging environment."
                        </p>
                    </div>
                    <div class="flex items-center justify-center gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span class="text-white font-bold text-lg">SM</span>
                        </div>
                        <div class="text-left">
                            <div class="font-semibold text-white">Sarah Mwangi</div>
                            <div class="text-cyan-400">CTO, EcoBank Group</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer animate-bounce" id="scrollIndicator">
            <div class="text-slate-400 text-sm mb-2">Explore Our Solutions</div>
            <svg class="w-6 h-6 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title animate-on-scroll">Who We Are</h2>
                <p class="section-subtitle animate-on-scroll">
                    Real Solutions. Real Results. Real Impact.
                </p>
            </div>
            <div class="about-grid">
                <div class="about-content animate-on-scroll">
                    <h3>Africa's Premier Applied AI Company</h3>
                    <p>
                        <strong>Kukuma Advanced Technologies</strong> is engineering intelligent systems that transform businesses from the ground up. We combine cutting-edge AI, advanced hardware, and intelligent automation to deliver measurable, on-the-ground efficiency that drives your business forward.
                    </p>
                    <p>
                        From FinTech and manufacturing to government infrastructure and agriculture, we deliver solutions that actually work—not buzzwords.
                    </p>
                    <div class="about-features">
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div>
                                <strong>AI That Works</strong>
                                <span>Tested and proven in real African environments</span>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div>
                                <strong>Hardware That Delivers</strong>
                                <span>Robust solutions built for challenging conditions</span>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">✓</div>
                            <div>
                                <strong>Results You Can Measure</strong>
                                <span>Direct cost savings, reduced risks, improved uptime</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-visual animate-on-scroll">
                    <div class="visual-card">
                        <div class="visual-icon">
                            <img src="{{ asset('logo/Artboard3.svg') }}" alt="Kukuma Icon">
                        </div>
                        <div class="visual-stats">
                            <div class="mini-stat">
                                <span class="mini-stat-value">B2B</span>
                                <span class="mini-stat-label">Focus</span>
                            </div>
                            <div class="mini-stat">
                                <span class="mini-stat-value">24/7</span>
                                <span class="mini-stat-label">AI Operations</span>
                            </div>
                            <div class="mini-stat">
                                <span class="mini-stat-value">Africa</span>
                                <span class="mini-stat-label">Tested</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Solutions Section -->
    <section id="solutions" class="section solutions">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title animate-on-scroll">Our Solutions</h2>
                <p class="section-subtitle animate-on-scroll">
                    Comprehensive AI solutions designed for real-world impact
                </p>
            </div>

            <div class="solutions-grid">
                <!-- Video-Based AI -->
                <div class="solution-card solution-card animate-on-scroll">
                    <div class="solution-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>Video-Based AI Technologies</h3>
                    <h4>XVSN - Visual Intelligence Platform</h4>
                    <p>Transform your camera systems into intelligent business assets with real-time analytics and human-level awareness at scale.</p>
                    <ul class="solution-features">
                        <li>Real-time video analytics</li>
                        <li>Edge AI + Cloud integration</li>
                        <li>Smart city & infrastructure</li>
                        <li>Manufacturing quality control</li>
                    </ul>
                    <a href="#contact" class="solution-cta">
                        Activate Visual Intelligence
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>

                <!-- FinTech Solutions -->
                <div class="solution-card solution-card animate-on-scroll">
                    <div class="solution-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>FinTech Solutions</h3>
                    <h4>PentaPay - Financial Intelligence</h4>
                    <p>Revolutionary AI-driven platform for fraud detection, intelligent routing, and behavioral financial analytics.</p>
                    <ul class="solution-features">
                        <li>Advanced fraud detection</li>
                        <li>Intelligent transaction routing</li>
                        <li>AI credit scoring</li>
                        <li>Risk management & compliance</li>
                    </ul>
                    <a href="#contact" class="solution-cta">
                        Secure Your Transactions
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>

                <!-- AV & Immersive -->
                <div class="solution-card solution-card animate-on-scroll">
                    <div class="solution-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M9 2v12l3-3 3 3V2M4 19h16a2 2 0 002-2V6a2 2 0 00-2-2h-5v14l-3-3-3 3V4H4a2 2 0 00-2 2v11a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>AV & Immersive Experiences</h3>
                    <h4>Transform Your Environment</h4>
                    <p>Create unforgettable spaces with integrated audio, visual, and digital technologies that drive engagement.</p>
                    <ul class="solution-features">
                        <li>LED walls & digital signage</li>
                        <li>Projection mapping & AR</li>
                        <li>Interactive kiosks</li>
                        <li>Smart lighting systems</li>
                    </ul>
                    <a href="#contact" class="solution-cta">
                        Transform Your Space
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>

                <!-- Business Management -->
                <div class="solution-card solution-card animate-on-scroll">
                    <div class="solution-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3>Business Management AI</h3>
                    <h4>Optimize Every Operation</h4>
                    <p>AI-powered suite delivering astronomical efficiency across ERP, CRM, HR, and business intelligence.</p>
                    <ul class="solution-features">
                        <li>Predictive analytics</li>
                        <li>Process automation</li>
                        <li>Customer personalization</li>
                        <li>Data-driven insights</li>
                    </ul>
                    <a href="#contact" class="solution-cta">
                        Optimize Operations
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Kukuma -->
    <section id="why-us" class="section why-us">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title animate-on-scroll">Why Choose Kukuma?</h2>
                <p class="section-subtitle animate-on-scroll">
                    The Kukuma Advantage
                </p>
            </div>

            <div class="advantages-grid">
                <div class="advantage-card animate-on-scroll">
                    <div class="advantage-icon">🎯</div>
                    <h3>AI That Actually Works</h3>
                    <p>Tested and proven in real environments. No theoretical solutions – only practical applications.</p>
                </div>
                <div class="advantage-card animate-on-scroll">
                    <div class="advantage-icon">💰</div>
                    <h3>Astronomical Efficiency</h3>
                    <p>Direct cost savings, reduced risks, improved uptime. Measurable ROI from day one.</p>
                </div>
                <div class="advantage-card animate-on-scroll">
                    <div class="advantage-icon">🌍</div>
                    <h3>Africa-Tested, Globally Ready</h3>
                    <p>Built to thrive in challenging conditions. Scalable from single facilities to national deployments.</p>
                </div>
                <div class="advantage-card animate-on-scroll">
                    <div class="advantage-icon">🔒</div>
                    <h3>Trust & Transparency</h3>
                    <p>Ethical AI with compliance at its core. Full transparency in our processes and results.</p>
                </div>
            </div>

            <div class="cta-banner animate-on-scroll">
                <h3>Ready to Transform Your Business?</h3>
                <p>Join 200+ organizations already experiencing the Kukuma advantage</p>
                <a href="#contact" class="btn btn-primary btn-large">
                    Start Your Transformation
                    <svg class="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="section team">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title animate-on-scroll">The Team</h2>
                <p class="section-subtitle animate-on-scroll">
                    Dedicated experts driving AI innovation in Africa
                </p>
            </div>

            <div class="team-grid">
                <div class="team-member animate-on-scroll">
                    <div class="member-image">
                        <div class="member-placeholder">AN</div>
                    </div>
                    <h3>Artwell Nguruve</h3>
                    <p class="member-role">Chief Executive Officer</p>
                </div>
                <div class="team-member animate-on-scroll">
                    <div class="member-image">
                        <div class="member-placeholder">JS</div>
                    </div>
                    <h3>Janet Sawari</h3>
                    <p class="member-role">Technology Officer</p>
                </div>
                <div class="team-member animate-on-scroll">
                    <div class="member-image">
                        <div class="member-placeholder">IW</div>
                    </div>
                    <h3>Isaac Wisikoti</h3>
                    <p class="member-role">Operations Director</p>
                </div>
                <div class="team-member animate-on-scroll">
                    <div class="member-image">
                        <div class="member-placeholder">TM</div>
                    </div>
                    <h3>Tinotenda Mtana</h3>
                    <p class="member-role">Data Analyst</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title animate-on-scroll">Let's Build Your Intelligent Future</h2>
                <p class="section-subtitle animate-on-scroll">
                    Get started with Kukuma today
                </p>
            </div>

            <div class="contact-grid">
                <div class="contact-info animate-on-scroll">
                    <h3>Get In Touch</h3>
                    <p>Ready to transform your business with AI that actually works? Let's discuss how Kukuma can drive astronomical efficiency in your organization.</p>

                    <div class="contact-items">
                        <div class="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <a href="mailto:info@kukumatech.com">info@kukumatech.com</a>
                        </div>
                        <div class="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <a href="https://www.kukumatech.com">www.kukumatech.com</a>
                        </div>
                    </div>

                    <div class="contact-cta">
                        <h4>Quick Actions</h4>
                        <div class="quick-actions">
                            <a href="#" class="btn btn-outline">Schedule Demo</a>
                            <a href="{{ asset('002 Kukuma Corporate Profile 2025.pdf') }}" class="btn btn-outline" target="_blank">Download Brochure</a>
                            <a href="#" class="btn btn-outline">Get Quote</a>
                        </div>
                    </div>
                </div>

                <form class="contact-form animate-on-scroll" id="contactForm">
                    @csrf
                    <h3>Send Us a Message</h3>
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" name="company" placeholder="Company Name">
                    </div>
                    <div class="form-group">
                        <select name="interest" required>
                            <option value="">Select Solution of Interest</option>
                            <option value="video-ai">Video-Based AI</option>
                            <option value="fintech">FinTech Solutions</option>
                            <option value="av">AV & Immersive</option>
                            <option value="business">Business Management</option>
                            <option value="custom">Custom Solutions</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea name="message" placeholder="Tell us about your needs" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">
                        Start Your AI Journey
                        <svg class="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <img src="{{ asset('logo/Artboard5.svg') }}" alt="Kukuma" class="footer-logo">
                    <p>Engineering Intelligence. Delivering Excellence.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <a href="#about">About</a>
                    <a href="#solutions">Solutions</a>
                    <a href="#team">Team</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="footer-links">
                    <h4>Solutions</h4>
                    <a href="#solutions">Video AI</a>
                    <a href="#solutions">FinTech</a>
                    <a href="#solutions">Business AI</a>
                    <a href="#solutions">Custom Solutions</a>
                </div>
                <div class="footer-newsletter">
                    <h4>Stay Updated</h4>
                    <p>Get the latest AI insights and updates</p>
                    <form class="newsletter-form">
                        @csrf
                        <input type="email" placeholder="Your email">
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Kukuma Advanced Technologies. All rights reserved.</p>
                <p>Africa's Premier Applied AI Company</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top -->
    <button id="backToTop" class="back-to-top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5m-6 6l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>

    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('hero-tailwind.js') }}"></script>
</body>
</html>
