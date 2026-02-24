"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const services = [
    {
        icon: "fa-solid fa-microchip",
        title: "Server Infrastructure & Compute",
        body: "Whether you're running virtualised workloads, bare-metal databases, or AI inference jobs, the right compute platform makes all the difference. We size and deploy rack and blade servers from Cisco UCS, HPE, and Dell to match your specific performance envelope — then configure hypervisor clusters, resource pools, and HA policies so your workloads run without interruption, even during hardware faults.",
        tags: ["Cisco UCS / HPE / Dell", "VMware vSphere", "Microsoft Hyper-V", "High Availability Clustering"],
        image: "Server_Infrastructure_&_Compute.webp"
    },
    {
        icon: "fa-solid fa-hard-drive",
        title: "Storage Architecture: SAN & NAS",
        body: "Storage is where poor planning shows up as slow applications and failed backups. We design and deploy SAN (Storage Area Network) and NAS (Network-Attached Storage) environments that match your I/O profile — from high-IOPS all-flash arrays for databases to cost-efficient hybrid tiers for archival and backup. Replication, snapshots, and DR are built in, not bolted on.",
        tags: ["All-Flash & Hybrid Arrays", "SAN FC / iSCSI", "NAS Protocols (NFS/SMB)", "Snapshot & Replication"],
        image: "Storage_Architecture_SAN_&_NAS.webp"
    },
    {
        icon: "fa-solid fa-cubes",
        title: "Virtualisation & HCI",
        body: "Hyperconverged Infrastructure (HCI) collapses compute, storage, and networking into a single, software-defined stack that scales by adding nodes — not racking up silos. We implement HCI platforms that dramatically simplify operations and let your IT team focus on business outcomes instead of infrastructure maintenance.",
        tags: ["VMware vSAN", "Nutanix AHV", "Scale-out Architecture", "Single-pane Management"],
        image: "Virtualisation_&_HCI.webp"
    },
    {
        icon: "fa-solid fa-cloud-arrow-up",
        title: "Backup, DR & Cloud Integration",
        body: "Hardware fails. Ransomware encrypts. Floods happen. A robust compute strategy includes a tested recovery plan — not just a backup job that runs at midnight. We implement backup solutions with air-gapped copies, automate failover runbooks, and can extend your on-premises environment to AWS, Azure, or Google Cloud for burst compute and geographic DR.",
        tags: ["Veeam / Commvault", "Air-Gapped Backups", "RTO / RPO Planning", "Hybrid Cloud Burst"],
        image: "Backup_DR_&_Cloud_Integration.webp"
    },
];

export default function ComputeStoragePage() {
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
                    <span className="badge mb-6 inline-block">High-Performance Infrastructure</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Compute Power<br />
                        <span className="text-blue-400">At Scale.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Your applications are only as fast as the infrastructure beneath them. We build compute and storage environments engineered for performance, resilience, and long-term operational simplicity.
                    </p>
                    <Link href="/#contact" className="btn btn-primary inline-block mt-10 px-8 py-4 text-lg">Plan Your Infrastructure</Link>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-header mb-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Infrastructure That Performs</h2>
                        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">Server, storage, and virtualisation solutions built for the demands of modern enterprise workloads.</p>
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
                        <Link href="/#contact" className="btn btn-primary px-10 py-5 text-xl font-semibold shadow-xl shadow-blue-500/20">Scale Your Infrastructure</Link>
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
