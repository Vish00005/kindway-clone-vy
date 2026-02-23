import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/MobileClinic.css";

const MobileClinic = () => {
  return (
    <>
      <Header />
      <div className="clinic-main-wrapper">
        {/* HIGH CONTRAST HERO */}
        <section className="clinic-hero">
          <div className="clinic-hero-container">
            <span className="clinic-badge">Community Outreach</span>
            <h1 className="clinic-title">Mobile Dental Clinics & Camps</h1>
            <p className="clinic-subtitle">
              At Kindway Biorezens, we are driven by a mission to reshape the future of 
              dentistry through innovation, accessibility, and compassionate care[cite: 25]. 
              Our mobile clinics bring world-class dental solutions directly to those in need.
            </p>
          </div>
        </section>

        {/* SERVICE GRID */}
        <section className="clinic-services">
          <div className="container">
            <div className="service-intro">
              <h2>What We Offer at Our Camps</h2>
              <p>We provide informative sessions, screenings, and interactive activities focused on oral health education.</p>
            </div>
            <div className="service-cards">
              <div className="s-card">
                <div className="s-icon">🔍</div>
                <h3>Screenings</h3>
                <p>Comprehensive oral health checkups to identify dental problems early[cite: 10, 74].</p>
              </div>
              <div className="s-card">
                <div className="s-icon">🎓</div>
                <h3>Education</h3>
                <p>Empowering the public with valuable knowledge to maintain a healthy smile.</p>
              </div>
              <div className="s-card">
                <div className="s-icon">🦷</div>
                <h3>Consultations</h3>
                <p>Expert guidance from dental professionals on hygiene and best practices[cite: 9, 74].</p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="clinic-impact">
          <div className="impact-image">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Medical Camp" />
          </div>
          <div className="impact-text">
            <h2>Driving Meaningful Change</h2>
            <p>Our outreach programs are designed to ensure that quality dental care is accessible to all, regardless of boundaries[cite: 12, 53].</p>
            <div className="impact-stats">
              <div className="i-stat">
                <h3>10+</h3>
                <p>Medical Camps Organized [cite: 61]</p>
              </div>
              <div className="i-stat">
                <h3>1145+</h3>
                <p>Public Participants [cite: 60]</p>
              </div>
            </div>
            <button className="btn-primary">View Upcoming Camps</button>
          </div>
        </section>

        {/* MISSION STRIP */}
        <section className="mission-strip">
          <div className="container">
            <blockquote>
              "We aspire to lead in creating innovative solutions that seamlessly integrate 
              with nature, fostering a harmonious balance between human progress and 
              environmental well-being." [cite: 19]
            </blockquote>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MobileClinic;