import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/CSRPrograms.css";

const CSRPrograms = () => {
  const initiatives = [
    {
      title: "Sustainable Manufacturing",
      desc: "Developing and producing innovative, biorenewable solutions that contribute to a healthier planet.",
      icon: "🌱",
      detail: "Reducing environmental footprint through cutting-edge sustainable technologies."
    },
    {
      title: "Free Dental Camps",
      desc: "Informative sessions and screenings focused on oral health education for the general public.",
      icon: "🏥",
      detail: "Empowering communities with knowledge and resources to maintain healthy smiles."
    },
    {
      title: "Accessible Healthcare",
      desc: "Ensuring our products and services are accessible to all dental practitioners globally.",
      icon: "🌏",
      detail: "Breaking geographical and financial barriers to quality dental care."
    }
  ];

  return (
    <>
      <Header />
      <div className="csr-wrapper">
        {/* HIGH-CONTRAST HERO SECTION */}
        <section className="csr-hero">
          <div className="csr-hero-container">
            <span className="csr-eyebrow">Social Responsibility</span>
            <h1 className="csr-title">Kindness in Action</h1>
            <p className="csr-subtitle">
              At Kindway BioReZens, we envision a future where healthcare products are 
              not only cutting-edge but also inherently sustainable. Our commitment is 
              to lead the industry in fostering a harmonious balance between human 
              progress and environmental well-being.
            </p>
          </div>
        </section>

        {/* CORE PILLARS SECTION */}
        <section className="csr-pillars">
          <div className="container">
            <h2 className="section-title">Our Three Pillars of Impact</h2>
            <div className="pillars-grid">
              {initiatives.map((item, index) => (
                <div key={index} className="pillar-card">
                  <div className="pillar-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p className="pillar-desc">{item.desc}</p>
                  <div className="pillar-footer">
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUSTAINABILITY HIGHLIGHT */}
        <section className="csr-vision">
          <div className="vision-content">
            <div className="vision-text">
              <h2>Commitment to a Healthier Planet</h2>
              <p>
                We lead the medical manufacturing industry in developing biorenewable 
                solutions. Our goal is to redefine industries while contributing to a 
                kinder and more sustainable world.
              </p>
              <ul className="vision-list">
                <li>Transformative biorenewable technologies</li>
                <li>Innovative sustainable healthcare solutions</li>
                <li>Inherently green manufacturing processes</li>
              </ul>
            </div>
            <div className="vision-image">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Sustainability" />
            </div>
          </div>
        </section>

        {/* STATISTICS STRIP */}
        <section className="csr-stats">
          <div className="csr-stats-inner">
            <div className="stat-unit">
              <span className="unit-num">10</span>
              <span className="unit-label">Medical Camps Organized</span>
            </div>
            <div className="stat-unit">
              <span className="unit-num">1160+</span>
              <span className="unit-label">Public Lives Impacted</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CSRPrograms;