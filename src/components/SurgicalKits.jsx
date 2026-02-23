import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/SurgicalKits.css";

const surgicalKits = [
  {
    title: "Basic Surgical Kit",
    description: "Essential, precision-engineered tools for minor dental procedures[cite: 36, 80].",
    img: "https://images.unsplash.com/photo-1727830968495-ea2798aaee35?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Advanced Surgical Kit",
    description: "Specialized instruments for complex implantology and tissue augmentation operations[cite: 29, 71].",
    img: "https://images.unsplash.com/photo-1667133295310-e06a1e1fd6ce?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Pro Dental Kit",
    description: "Complete set featuring ergonomic designs for precision in every clinical step[cite: 36, 80].",
    img: "https://plus.unsplash.com/premium_photo-1723928512186-27de0f04424d?w=900&auto=format&fit=crop&q=60",
  },
];

const benefits = [
  "Rigorously tested and quality validated for safety [cite: 37]",
  "Innovative solutions that seamlessly integrate with nature ",
  "Ergonomic design to simplify and strengthen clinical practice [cite: 27, 48]",
  "Meets global standards of clinical stability and biocompatibility ",
];

const SurgicalKits = () => {
  return (
    <>
      <Header />
      <div className="sk-page-wrapper">
        {/* HIGH-CONTRAST HERO FOR TRANSPARENT NAV */}
        <section className="sk-hero-section">
          <div className="sk-hero-content">
            <span className="sk-label">Clinical Precision</span>
            <h1 className="sk-main-title">Premium Surgical Kit Systems</h1>
            <p className="sk-main-desc">
              Providing high-performance, sterilized surgical instruments designed to elevate 
              dental care and enhance patient quality of life[cite: 27, 36].
            </p>
            <div className="sk-hero-btns">
              <button className="btn-main">Request Catalogue</button>
            </div>
          </div>
        </section>

        {/* MISSION-DRIVEN INTRO */}
        <section className="sk-mission-intro">
          <div className="sk-flex-container">
            <div className="sk-text-side">
              <h2>About Our Surgical Solutions</h2>
              <p>
                At Kindway BioReZens, we design and produce advanced chairside 
                solutions that blend cutting-edge technology with deep clinical 
                [cite_start]insight[cite: 26, 35]. Our kits bridge the gap between theory and 
                [cite_start]practice, equipping clinicians with confidence and skill[cite: 49].
              </p>
            </div>
            <div className="sk-image-side">
              {/* Updated to a more reliable clinical image link */}
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                alt="Surgical Excellence"
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Surgical+Excellence"; }}
              />
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section className="sk-catalog-grid">
          <div className="grid-header">
            <h2>Specialized Kit Configurations</h2>
            <p>Advanced, reliable, and affordable tools meeting global standards[cite: 26].</p>
          </div>
          <div className="sk-cards-layout">
            {surgicalKits.map((kit, idx) => (
              <div key={idx} className="sk-product-card">
                <div className="sk-card-img">
                  <img src={kit.img} alt={kit.title} />
                </div>
                <h3>{kit.title}</h3>
                <p>{kit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS & CLINICAL STABILITY */}
        <section className="sk-clinical-benefits">
          <div className="sk-flex-container reverse">
            <div className="sk-image-side">
              <img
                src="https://images.unsplash.com/photo-1643386106343-18d5d3c64d47?w=900&auto=format&fit=crop&q=80"
                alt="Clinical Stability"
              />
            </div>
            <div className="sk-list-side">
              <h2>Why Choose Kindway BioReZens?</h2>
              <ul className="sk-check-list">
                {benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sk-final-cta">
          <div className="cta-inner">
            <h2>Order Your Surgical Kit Today</h2>
            <p>Support and solutions for modern dental practitioners[cite: 10, 42].</p>
            <button className="btn-main-dark">Contact Sales Expert</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SurgicalKits;