"use client";
import { useEffect, useState, useMemo } from "react";
import Image from 'next/image';
import Link from 'next/link';
import GlassSurface from '@/components/GlassSurface';

// Using environment variable for basePath so it resolves correctly in GitHub Actions
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    // Scroll Reveal Animation (Interactivity)
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    // Navbar shadow on scroll
    const handleScroll = () => {
      setNavShadow(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll for anchors
    const smoothScroll = (e: any) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Native fallback anchor scroll until we upgrade Lenis interception or just let Lenis grab auto-hashes
          const yOffset = -70;
          const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', smoothScroll);

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', smoothScroll);
    };
  }, []);

  const partners = [
    { name: 'TP Link', logo: `${basePath}/tp_link_logo.png` },
    { name: 'Fortinet', logo: `${basePath}/fortinet_logo.svg` },
    { name: 'Juniper', logo: `${basePath}/Juniper_Networks_logo.png` },
    { name: 'Palo Alto', logo: `${basePath}/palo_alto_logo.png` },
    { name: 'Checkpoint', logo: `${basePath}/checkpoint_logo.svg` },
    { name: 'Asus', logo: `${basePath}/asus.svg` },
  ];

  // hyperspeedOptions removed

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ text: "", type: "" });

    // Mock API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormMessage({
        text: "Thank you! Your message has been sent successfully. An expert will contact you shortly.",
        type: "success"
      });
      e.target.reset();

      setTimeout(() => {
        setFormMessage({ text: "", type: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <main>
      <header className="navbar" id="navbar">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={50}
          brightness={30}
          opacity={0.95}
          blur={14}
          displace={0.5}
          backgroundOpacity={0.5}
          saturation={1.2}
          className="navbar-glass"
        >
          <div className="container nav-container">
            <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={`${basePath}/JSR_LOGO.png`} alt="JSR Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
              <div><span className="logo-bold">JSR</span><span className="logo-light">Netsol</span></div>
            </a>
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#services">Offerings</a>
              <a href="#partners">Partners</a>
              <a href="#contact" className="btn btn-outline">Contact Us</a>
            </nav>
            <div className="mobile-menu-icon" onClick={() => alert("Mobile menu toggle functionality would open a side drawer here.")}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </GlassSurface>
      </header>

      {/* Hero Section */}
      <section
        className="hero flex items-center justify-center text-center relative"
        id="home"
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${basePath}/hero_homepage/Create_a_video_which_starts_the_transportatio.gif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay absolute inset-0" style={{ zIndex: 1, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}></div>

        <div className="container hero-content relative flex flex-col items-center justify-center max-w-4xl mx-auto" style={{ zIndex: 2 }}>
          <div className="hero-text reveal flex flex-col items-center">
            <h1 className="hero-headline">
              End-to-End<br />
              <span className="hero-headline-accent">Networking</span> Infrastructure
            </h1>
            <p className="hero-subtitle">
              We provide comprehensive solutions for your network challenges—delivering both leading OEM products and expert integration services to ensure seamless, secure operations.
            </p>
            <div className="hero-actions flex gap-5 justify-center">
              <a href="#services" className="hero-cta-primary">Discover Solutions</a>
              <a href="#contact" className="hero-cta-secondary">Get a Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Offerings</h2>
            <p>End-to-end technology solutions designed for performance, resilience, and security.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12">
            <Link href="/networking" className="relative group block overflow-hidden rounded-xl border border-cyan-500/20 aspect-[3/4] hover:border-cyan-400 transition-all duration-300 reveal cursor-pointer shadow-lg shadow-black/50">
              <Image src={`${basePath}/networking_bg.png`} alt="Networking Services" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 text-white font-bold text-center text-sm lg:text-base py-3 px-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
                  Networking Services
                </div>
              </div>
            </Link>

            <Link href="/security" className="relative group block overflow-hidden rounded-xl border border-cyan-500/20 aspect-[3/4] hover:border-cyan-400 transition-all duration-300 reveal reveal-delay-1 cursor-pointer shadow-lg shadow-black/50">
              <Image src={`${basePath}/home_service_images/security_services.png`} alt="Security Services" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 text-white font-bold text-center text-sm lg:text-base py-3 px-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
                  Security Services
                </div>
              </div>
            </Link>

            <Link href="/compute-storage" className="relative group block overflow-hidden rounded-xl border border-cyan-500/20 aspect-[3/4] hover:border-cyan-400 transition-all duration-300 reveal reveal-delay-2 cursor-pointer shadow-lg shadow-black/50">
              <Image src={`${basePath}/home_service_images/computerNstorage.png`} alt="Compute & Storage" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 text-white font-bold text-center text-sm lg:text-base py-3 px-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
                  Compute & Storage
                </div>
              </div>
            </Link>

            <Link href="/data-center" className="relative group block overflow-hidden rounded-xl border border-cyan-500/20 aspect-[3/4] hover:border-cyan-400 transition-all duration-300 reveal reveal-delay-3 cursor-pointer shadow-lg shadow-black/50">
              <Image src={`${basePath}/home_service_images/data_center_services.png`} alt="Data Center Services" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 text-white font-bold text-center text-sm lg:text-base py-3 px-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
                  Data Center Services
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners" id="partners">
        <div className="container" style={{ overflow: 'hidden' }}>
          <div className="section-header">
            <h2>Top OEM Partners</h2>
            <p>We collaborate with industry leaders to provide world-class infrastructure.</p>
          </div>
          <div className="partners-carousel-wrapper">
            <div className="partners-carousel">
              {/* Duplicate array for infinite scroll effect */}
              {[...partners, ...partners].map((partner, index) => (
                <div className="partner-logo" key={index}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="logo-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="logo-fallback" style={{ display: 'none' }}>
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container contact-container">
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2>Ready to Upgrade Your Network?</h2>
              <p>Contact our specialists today to discuss how we can secure and optimize your IT infrastructure.</p>
            </div>
            {/* Embedded Map */}
            <div className="map-container reveal" style={{ width: '100%', flexGrow: 1, minHeight: '350px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6030999903936!2d77.2519246!3d28.551648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c530ea5175%3A0xcb06f52e2a144b20!2sModi%20Tower%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JSR Netsol Location Map"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Contact Sales</h3>
            <form id="contactForm" className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Ravi Kohli" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input type="email" id="email" name="email" placeholder="ravi@xyz.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="interest">Area of Interest</label>
                <select id="interest" name="interest">
                  <option value="networking">Networking Infrastructure</option>
                  <option value="security">Cybersecurity Solutions</option>
                  <option value="compute">Compute & Storage</option>
                  <option value="datacenter">Data Center</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="How can we help your organization?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><span>Sending...</span> <i className="fas fa-spinner fa-spin"></i></>
                ) : (
                  <><span>Send Message</span> <i className="fas fa-paper-plane"></i></>
                )}
              </button>
              {formMessage.text && (
                <div id="formStatus" className={`form-status ${formMessage.type === 'success' ? 'success' : 'error'}`}>
                  {formMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <div className="footer-brand">
            <a href="#" className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', padding: '10px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <img src={`${basePath}/JSR_LOGO.png`} alt="JSR Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <div><span className="logo-bold">JSR</span><span className="logo-light">Netsol</span></div>
            </a>
            <p>Empowering digital transformation with cutting-edge technology and unparalleled service.</p>
            <div className="footer-contact-info" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <i className="fas fa-map-marker-alt" style={{ color: '#3b82f6', marginTop: '4px', fontSize: '1.1rem' }}></i>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', fontSize: '1rem', color: '#f8fafc' }}>Headquarters</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>Modi Tower, Nehru Place<br />New Delhi, Delhi, India</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <i className="fas fa-clock" style={{ color: '#3b82f6', marginTop: '4px', fontSize: '1.1rem' }}></i>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', fontSize: '1rem', color: '#f8fafc' }}>Business Hours</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>Mon - Fri: 10:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Vision and Mission</a>
            <a href="#">The Team</a>
            <a href="#">Partners</a>
          </div>
          <div className="footer-links">
            <h4>Solutions</h4>
            <a href="#">Networking</a>
            <a href="#">Security</a>
            <a href="#">Compute & Storage</a>
            <a href="#">Data Center</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 JSR Netsol Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
