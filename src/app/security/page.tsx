"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const services = [
    {
        icon: "fa-solid fa-fire-flame-curved",
        title: "Next-Generation Firewalls",
        body: "Perimeter firewalls are table stakes. We deploy and tune NGFWs from Palo Alto, Fortinet, and Checkpoint that go far beyond packet filtering — enforcing application-aware policies, decrypting SSL traffic for inspection, and correlating threat intelligence in real time. Every rule is documented and reviewed quarterly so your security posture stays tight as your environment evolves.",
        tags: ["Palo Alto NGFW", "Fortinet FortiGate", "Check Point", "SSL/TLS Inspection"],
        image: "Next_Generation_Firewalls.webp"
    },
    {
        icon: "fa-solid fa-layer-group",
        title: "Layer 7 & Web Application Defence",
        body: "Attackers have moved up the stack. We implement Web Application Firewalls (WAF) and Layer 7 inspection to protect your public-facing applications from OWASP Top 10 vulnerabilities, bot traffic, and zero-day exploits — without impacting legitimate user performance. Our partnership with Prophaze brings AI-driven anomaly detection to your edge.",
        tags: ["WAF Deployment", "Bot Mitigation", "Prophaze AI Layer", "OWASP Top 10"],
        image: "Layer_7_& Web_Application_Defence.webp"
    },
    {
        icon: "fa-solid fa-laptop-code",
        title: "Endpoint & Identity Security",
        body: "A secured perimeter means nothing if an endpoint is compromised. We help organisations deploy EDR solutions, enforce least-privilege access policies, and segment their networks so a breach stays contained. From MFA rollout to zero-trust network access (ZTNA), we design identity-aware architectures that match how your teams actually work.",
        tags: ["EDR / XDR Solutions", "Zero Trust Architecture", "MFA & SSO", "Network Segmentation"],
        image: "Endpoint_&_Identity_Security.webp"
    },
    {
        icon: "fa-solid fa-magnifying-glass-chart",
        title: "Security Audits & Compliance",
        body: "Whether you need a one-time posture review or are working toward ISO 27001 or PCI-DSS compliance, our team conducts structured security assessments, produces prioritised remediation roadmaps, and helps you close gaps methodically. We translate technical findings into business-level risk so leadership can make informed decisions.",
        tags: ["Vulnerability Assessment", "ISO 27001 Readiness", "PCI-DSS", "Remediation Roadmap"],
        image: "Security_Audits_&_Compliance.webp"
    },
];

export default function SecurityPage() {
    const [navShadow, setNavShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setNavShadow(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="bg-white min-h-screen text-slate-800">
            <header className={`navbar ${navShadow ? 'shadow-md shadow-black/10' : ''}`}>
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

            {/* Hero */}
            <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-900"></div>
                <div className="container relative z-10 text-center">
                    <span className="badge mb-6 inline-block">Cyber Defense</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Security Without<br />
                        <span className="text-blue-400">Compromise.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        The threat landscape moves fast. We move faster — deploying layered defences that protect your people, your data, and your reputation from the perimeter to the endpoint.
                    </p>
                    <Link href="/#contact" className="btn btn-primary inline-block mt-10 px-8 py-4 text-lg">Book a Security Audit</Link>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-header mb-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Our Defence Stack</h2>
                        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">A layered approach that addresses risk at every level of your organisation.</p>
                    </div>
                    <div className="space-y-32">
                        {services.map((s, idx) => (
                            <div key={s.title} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                                <div className={`w-full lg:w-1/2 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 transition-transform duration-500 hover:scale-[1.02] bg-white">
                                        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                                        <img
                                            src={`${basePath}/services_images/${s.image}`}
                                            alt={s.title}
                                            className="w-full h-auto aspect-[4/3] object-cover"
                                        />
                                    </div>
                                </div>
                                <div className={`w-full lg:w-1/2 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm">
                                        <i className={s.icon}></i>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{s.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{s.body}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {s.tags.map(tag => (
                                            <span key={tag} className="text-sm bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-full font-semibold shadow-sm transition-colors hover:bg-slate-50 cursor-default">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-32 text-center">
                        <Link href="/#contact" className="btn btn-primary px-10 py-5 text-xl font-semibold shadow-xl shadow-blue-500/20">Secure Your Organisation</Link>
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
