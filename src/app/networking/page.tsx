"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const services = [
    {
        icon: "fa-solid fa-pen-ruler",
        title: "Network Architecture & Design",
        body: "Before a single cable is run, we think deeply. Our engineers sit with your stakeholders to map out traffic patterns, redundancy requirements, and three-year growth projections — then produce a detailed blueprint that your team can own and evolve. We design for today's throughput and tomorrow's scale, using industry-standard tools to model every hop, VLAN, and failover path.",
        tags: ["Campus LAN/WAN", "SD-WAN Ready", "Multi-site Topology", "Traffic Engineering"],
        image: "Network_Architecture_& _Design.png"
    },
    {
        icon: "fa-solid fa-plug-circle-check",
        title: "Procurement & Integration",
        body: "We are vendor-neutral by principle. Once a design is locked, we source the right hardware at competitive pricing — from access-layer switches to core routers — and handle every aspect of staging, configuration, and rack-and-stack deployment. Our structured rollout process minimises downtime and eliminates the config drift that plagues ad-hoc rollouts.",
        tags: ["Cisco / Juniper / HP", "Zero-touch Provisioning", "Config Management", "24-hr Staging Lab"],
        image: "Procurement_&_Integration.png"
    },
    {
        icon: "fa-solid fa-shield-halved",
        title: "AMC & Proactive Maintenance",
        body: "Networks degrade silently. Firmware falls behind, spanning-tree topologies shift, and link utilisation creeps toward saturation — all before anyone files a ticket. Our Annual Maintenance Contracts include scheduled health audits, proactive firmware management, and a guaranteed SLA response window so you're never scrambling during a critical outage.",
        tags: ["4-hr Hardware Replacement SLA", "Quarterly Health Reports", "Firmware Lifecycle Mgmt", "NOC Escalation Path"],
        image: "AMC_&_Proactive_Maintenance.png"
    },
];

export default function NetworkingPage() {
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
                    <span className="badge mb-6 inline-block">Enterprise Networking</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Networks That Work.<br />
                        <span className="text-blue-400">Every Single Time.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        From a 50-seat office to a multi-branch enterprise, we design, deploy, and maintain network infrastructure that quietly keeps your business running — no surprises, no unplanned downtime.
                    </p>
                    <Link href="/#contact" className="btn btn-primary inline-block mt-10 px-8 py-4 text-lg">Get a Free Assessment</Link>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-header mb-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">What We Deliver</h2>
                        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">End-to-end networking ownership — from whiteboard to wire, and beyond.</p>
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
                        <Link href="/#contact" className="btn btn-primary px-10 py-5 text-xl font-semibold shadow-xl shadow-blue-500/20">Discuss Your Network</Link>
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
