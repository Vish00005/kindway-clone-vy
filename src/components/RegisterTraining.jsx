import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/RegisterTraining.css";

const RegisterTraining = () => {
  return (
    <>
      <Header />
      <div className="register-main-wrapper">
        {/* HIGH CONTRAST HERO */}
        <section className="register-hero">
          <div className="register-hero-content">
            <span className="register-eyebrow">Professional Enrollment</span>
            <h1 className="register-title">Join Our Training Programs</h1>
            <p className="register-subtitle">
              At Kindway Biorezens, our vision is to lead in creating innovative solutions 
              that seamlessly integrate with nature, fostering a harmonious balance between 
              human progress and environmental well-being[cite: 19].
            </p>
          </div>
        </section>

        {/* REGISTRATION SECTION */}
        <section className="registration-section">
          <div className="registration-container">
            {/* Form Side */}
            <div className="registration-form-card">
              <h2>Secure Your Spot</h2>
              <p>Fill out the details below to register for our upcoming dental workshops.</p>
              
              <form className="enroll-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Dr. John Doe" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Select Workshop</label>
                  <select required>
                    <option value="">Choose a program...</option>
                    <option value="implant">Dental Implant Training/Workshop [cite: 64]</option>
                    <option value="tissue">Tissue Augmentation Training [cite: 71]</option>
                    <option value="outreach">Outreach Programs - General Public [cite: 73]</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Additional Message</label>
                  <textarea placeholder="Tell us about your clinical experience..."></textarea>
                </div>

                <button type="submit" className="btn-enroll">Complete Registration</button>
              </form>
            </div>

            {/* Info Side */}
            <div className="registration-info">
              <div className="info-block">
                <h3>Global Accessibility</h3>
                <p>We proudly serve dental practitioners around the world, ensuring that our products and services are accessible to all[cite: 12, 53].</p>
              </div>
              
              <div className="info-block">
                <h3>Continuous Learning</h3>
                <p>We believe in continuous learning and offer workshops to empower dental professionals with the latest techniques and best practices[cite: 2, 9].</p>
              </div>

              <div className="impact-mini-grid">
                <div className="mini-stat">
                  <h4>1160+</h4>
                  <p>Students Impacted </p>
                </div>
                <div className="mini-stat">
                  <h4>1500+</h4>
                  <p>Workshops Organized [cite: 54, 55]</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RegisterTraining;