"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function DataCenterPage() {
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

            {/* Hero Section for Data Center */}
            <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-900"></div>
                <div className="container relative z-10 text-center">
                    <span className="badge mb-6 inline-block">Architecture & Deployment</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Data Center Solutions</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Turnkey datacenter builds engineered for massive scale, elite security, and ultimate resiliency.
                    </p>
                </div>
            </section>

            {/* Services Content Section */}
            <section className="py-24">
                <div className="container">
                    <div className="bg-slate-50 border border-slate-200 p-12 rounded-3xl shadow-sm max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-4xl mb-8 mx-auto">
                            <i className="fa-solid fa-server"></i> {/* Using server as generic since generic db icon isn't as imposing */}
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">We Build Datacenters</h3>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            For your Enterprise, the Data Center isn't just a building; it is the fortified, resilient core that guarantees 24/7 access to the data and applications driving your competitive edge and customer experience.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            JSR Netsol handles the complete lifecycle of Data Center deployment, from initial spacial and thermal design to rack installation, cooling, and power redundancy planning.
                        </p>
                    </div>

                    <div className="mt-20 text-center">
                        <Link href="/#contact" className="btn btn-primary px-8 py-4 text-lg">
                            Start the Conversation
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
