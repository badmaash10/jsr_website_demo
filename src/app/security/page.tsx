"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SecurityPage() {
    const [navShadow, setNavShadow] = useState(false);

    useEffect(() => {
        // Navbar shadow on scroll
        const handleScroll = () => {
            setNavShadow(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="bg-white min-h-screen text-slate-800">
            <header className={`navbar ${navShadow ? 'shadow-md shadow-black/10' : ''}`} id="navbar">
                <div className="container nav-container">
                    <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={`${basePath}/JSR_LOGO.png`} alt="JSR Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
                        <div><span className="logo-bold">JSR</span><span className="logo-light">Netsol</span></div>
                    </Link>
                    <nav className="nav-links">
                        <Link href="/">Home</Link>
                        <Link href="/#services">Services</Link>
                        <Link href="/#partners">Partners</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section for Security */}
            <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-900"></div>
                <div className="container relative z-10 text-center">
                    <span className="badge mb-6 inline-block">Cyber Defense</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Security Solutions</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive protection across all network layers from standard OEM products to advanced web threat defense.
                    </p>
                </div>
            </section>

            {/* Services Content Section */}
            <section className="py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/* Expertise */}
                        <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Expertise</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We specialize in advanced application and network integration, ensuring your foundational infrastructure operations are completely locked down.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Whether implementing Next-Gen Firewalls or deploying robust Zero-Trust network rules, our team has extensive experience working with top security vendors and technologies to shield your enterprise from emerging threats.
                            </p>
                        </div>

                        {/* Clients */}
                        <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                                <i className="fa-solid fa-building-shield"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Securing Our Clients</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We have worked with a diverse range of clients from startups to large corporations in deeply regulated environments. Our clients come from various industries, including healthcare, finance, and education, trusting us to maintain compliance and secure their most critical data assets.
                            </p>
                        </div>

                    </div>

                    <div className="mt-20 text-center">
                        <Link href="/#contact" className="btn btn-primary px-8 py-4 text-lg">
                            Book a Security Audit
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
                <div className="container footer-content">
                    <div className="footer-brand">
                        <Link href="/" className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', padding: '10px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                            <img src={`${basePath}/JSR_LOGO.png`} alt="JSR Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                            <div><span className="logo-bold text-white">JSR</span><span className="logo-light text-blue-500">Netsol</span></div>
                        </Link>
                        <p className="mt-4 text-sm">Empowering digital transformation with cutting-edge technology and unparalleled service.</p>
                    </div>
                    <div className="footer-links">
                        <h4 className="text-white font-semibold mb-4 text-lg">Solutions</h4>
                        <Link href="/networking" className="hover:text-blue-500 transition-colors block mb-2">Networking</Link>
                        <Link href="/security" className="hover:text-blue-500 transition-colors block mb-2">Security</Link>
                        <Link href="/compute-storage" className="hover:text-blue-500 transition-colors block mb-2">Compute & Storage</Link>
                        <Link href="/data-center" className="hover:text-blue-500 transition-colors block mb-2">Data Center</Link>
                    </div>
                    <div className="footer-links">
                        <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
                        <a href="#" className="hover:text-blue-500 transition-colors block mb-2">About Us</a>
                        <Link href="/#contact" className="hover:text-blue-500 transition-colors block mb-2">Contact</Link>
                        <Link href="/#partners" className="hover:text-blue-500 transition-colors block mb-2">Partners</Link>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-bottom mt-10 border-t border-slate-800 pt-8 text-center text-sm">
                        <p>&copy; 2025 JSR NetSol Private Limited. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
