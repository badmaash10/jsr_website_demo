"use client";
import { useEffect, useState, useMemo } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Hyperspeed from '@/components/Hyperspeed';

import InteractiveGridImage from '@/components/InteractiveGridImage';

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

  // Memoize the Hyperspeed config so it doesn't recreate WebGL scenes on render
  const hyperspeedOptions = useMemo(() => ({
    onSpeedUp: () => { },
    onSlowDown: () => { },
    "distortion": "turbulentDistortion",
    "length": 400,
    "roadWidth": 10,
    "islandWidth": 2,
    "lanesPerRoad": 3,
    "fov": 90,
    "fovSpeedUp": 150,
    "speedUp": 2,
    "carLightsFade": 0.4,
    "totalSideLightSticks": 20,
    "lightPairsPerRoadWay": 40,
    "shoulderLinesWidthPercentage": 0.05,
    "brokenLinesWidthPercentage": 0.1,
    "brokenLinesLengthPercentage": 0.5,
    "lightStickWidth": [0.12, 0.5],
    "lightStickHeight": [1.3, 1.7],
    "movingAwaySpeed": [60, 80],
    "movingCloserSpeed": [-120, -160],
    "carLightsLength": [12, 80],
    "carLightsRadius": [0.05, 0.14],
    "carWidthPercentage": [0.3, 0.5],
    "carShiftX": [-0.8, 0.8],
    "carFloorSeparation": [0, 5],
    "colors": {
      "roadColor": 526344,
      "islandColor": 657930,
      "background": 0,
      "shoulderLines": 1250072, "brokenLines": 1250072,
      "leftCars": [14177983, 6770850, 12732332],
      "rightCars": [242627, 941733, 3294549],
      "sticks": 242627
    }
  }), []);

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
      <header className={`navbar ${navShadow ? 'shadow-md shadow-black/10' : ''}`} id="navbar">
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
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay" style={{ zIndex: 1, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}></div>

        {/* 3D Hyperspeed Background Canvas */}
        <Hyperspeed effectOptions={hyperspeedOptions} />

        <div className="container hero-content" style={{ zIndex: 2 }}>
          <div className="hero-text reveal">
            <div className="badge">System Integration Experts</div>
            <h1>End-to-End Networking Infrastructure</h1>
            <p>We provide comprehensive solutions for your network challenges—delivering both leading OEM products and expert integration services to ensure seamless, secure operations.</p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Discover Solutions</a>
              <a href="#contact" className="btn btn-secondary">Get a Consultation</a>
            </div>
          </div>
          <div className="hero-image-placeholder relative z-10 w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <div className="abstract-shape"></div>
            <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', padding: '10px' }}>
              <InteractiveGridImage
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
                alt="Server Room Infrastructure Overview"
              />
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
          <div className="services-grid">

            <Link href="/networking" className="service-card flip-card reveal block cursor-pointer">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="service-icon"><i className="fas fa-network-wired"></i></div>
                  <h3>Networking</h3>
                  <p className="front-subtext">Routing, Switching & Wireless</p>
                  <div className="mobile-tap-hint"><i className="fas fa-hand-pointer"></i> Tap to reveal</div>
                </div>
                <div className="flip-card-back">
                  <h3>Networking Integration</h3>
                  <p>End-to-end routing, switching, and wireless architectures solving complex connectivity problems.</p>
                  <ul className="service-features">
                    <li><i className="fas fa-check"></i> Enterprise Switching</li>
                    <li><i className="fas fa-check"></i> Wireless Controllers</li>
                    <li><i className="fas fa-check"></i> SD-WAN Integration</li>
                  </ul>
                  <div className="mt-4 text-blue-300 text-sm font-semibold flex items-center gap-2">
                    Learn more <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/security" className="service-card flip-card reveal reveal-delay-1 block cursor-pointer">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="service-icon"><i className="fas fa-shield-alt"></i></div>
                  <h3>Security</h3>
                  <p className="front-subtext">Firewalls & Cyber Defense</p>
                  <div className="mobile-tap-hint"><i className="fas fa-hand-pointer"></i> Tap to reveal</div>
                </div>
                <div className="flip-card-back">
                  <h3>Security Services</h3>
                  <p>Comprehensive protection across all network layers from leading standard OEM products.</p>
                  <ul className="service-features">
                    <li><i className="fas fa-check"></i> Next-Gen Firewalls</li>
                    <li><i className="fas fa-check"></i> Layer 7 Protection</li>
                    <li><i className="fas fa-check"></i> Endpoint Security</li>
                  </ul>
                  <div className="mt-4 text-blue-300 text-sm font-semibold flex items-center gap-2">
                    Learn more <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/compute-storage" className="service-card flip-card reveal reveal-delay-2 block cursor-pointer">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="service-icon"><i className="fas fa-server"></i></div>
                  <h3>Compute & Storage</h3>
                  <p className="front-subtext">Servers & Data Management</p>
                  <div className="mobile-tap-hint"><i className="fas fa-hand-pointer"></i> Tap to reveal</div>
                </div>
                <div className="flip-card-back">
                  <h3>Compute Integration</h3>
                  <p>Robust server architectures and scalable storage deployments for your critical enterprise workloads.</p>
                  <ul className="service-features">
                    <li><i className="fas fa-check"></i> Blade Servers</li>
                    <li><i className="fas fa-check"></i> SAN/NAS Solutions</li>
                    <li><i className="fas fa-check"></i> Virtualization</li>
                  </ul>
                  <div className="mt-4 text-blue-300 text-sm font-semibold flex items-center gap-2">
                    Learn more <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/data-center" className="service-card flip-card reveal reveal-delay-3 block cursor-pointer">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="service-icon"><i className="fas fa-database"></i></div>
                  <h3>Data Center</h3>
                  <p className="front-subtext">Infrastructure & Hosting</p>
                  <div className="mobile-tap-hint"><i className="fas fa-hand-pointer"></i> Tap to reveal</div>
                </div>
                <div className="flip-card-back">
                  <h3>Data Center Build</h3>
                  <p>Turnkey datacenter builds engineered for massive scale, elite security, and ultimate resiliency.</p>
                  <ul className="service-features">
                    <li><i className="fas fa-check"></i> Colocation Systems</li>
                    <li><i className="fas fa-check"></i> Disaster Recovery</li>
                    <li><i className="fas fa-check"></i> Cloud Migration</li>
                  </ul>
                  <div className="mt-4 text-blue-300 text-sm font-semibold flex items-center gap-2">
                    Learn more <i className="fas fa-arrow-right"></i>
                  </div>
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
          <div className="contact-info">
            <h2>Ready to Upgrade Your Network?</h2>
            <p>Contact our specialists today to discuss how we can secure and optimize your IT infrastructure.</p>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Headquarters</h4>
                <p>Modi Tower, Nehru Place<br />New Delhi, Delhi, India</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Fri: 10:00 AM - 06:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Contact Sales</h3>
            <form id="contactForm" className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input type="email" id="email" name="email" placeholder="john@company.com" required />
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
