import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/DentalImplants.css";

const DentalImplants = () => {
  return (
    <>
      <Header />
      <div className="implant-page-wrapper">
        {/* HIGH-CONTRAST HERO SECTION */}
        <section className="implant-hero">
          <div className="implant-hero-container">
            <div className="implant-hero-content">
              <span className="hero-eyebrow">Pioneering Dental Manufacturing</span>
              <h1>Advanced Dental Implant Systems</h1>
              <p>
                At Kindway Biorezens, we design and produce advanced, reliable, 
                and affordable dental implants that meet global standards of 
                safety and performance.
              </p>
              <div className="hero-btns">
                <button className="btn-primary">Download Catalogue</button>
                <button className="btn-secondary-outline">Technical Specs</button>
              </div>
            </div>
            <div className="implant-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=900&auto=format&fit=crop&q=80" 
                alt="Precision Dental Implant" 
              />
            </div>
          </div>
        </section>

        {/* PRODUCT OVERVIEW SECTION */}
        <section className="implant-overview">
          <div className="container">
            <div className="overview-header">
              <h2>Engineered for Excellence</h2>
              <p>
                Our commitment is to lead the industry in producing innovative, 
                biorenewable solutions that contribute to a healthier planet.
              </p>
            </div>

            <div className="implant-product-grid">
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" alt="Conical Implant" />
                </div>
                <h3>Conical Connection</h3>
                <p>Designed for high primary stability, ideal for immediate loading cases and diverse bone densities.</p>
              </div>

              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=800&q=80" alt="Surgical Kit" />
                </div>
                <h3>Advanced Biomaterials</h3>
                <p>Innovative solutions that seamlessly integrate with nature, fostering a harmonious balance[cite: 19].</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES STRIP */}
        <section className="implant-features-bar">
          <div className="features-container">
            <div className="feature-pill">✔ Medical Grade Titanium</div>
            <div className="feature-pill">✔ Advanced Surface Treatment</div>
            <div className="feature-pill">✔ High Initial Stability</div>
            <div className="feature-pill">✔ Global Safety Standards</div>
          </div>
        </section>

        {/* CLINICAL RESULTS SECTION */}
        <section className="implant-clinical">
          <div className="clinical-flex">
            <div className="clinical-image">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Clinical Success" />
            </div>
            <div className="clinical-text">
              <h2>Clinical Success & Precision</h2>
              <p>
                Our products undergo rigorous testing and quality validation to 
                ensure optimal biological compatibility and long-term stability[cite: 37].
              </p>
              <ul className="check-list">
                <li>Elevated patient quality of life [cite: 27]</li>
                <li>Simplified clinical practice for clinicians [cite: 27]</li>
                <li>Superior functionality and reliability [cite: 36]</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="implant-cta-banner">
          <div className="cta-content">
            <h2>Ready to Elevate Your Dental Practice?</h2>
            <p>Support and solutions for modern dental problems[cite: 10].</p>
            <button className="btn-primary-large">Contact Our Sales Team</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DentalImplants;