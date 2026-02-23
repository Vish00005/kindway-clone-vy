import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/BoneGraftWorkshops.css";

const BoneGraftWorkshops = () => {
  const workshopHighlights = [
    {
      title: "Advanced Techniques",
      desc: "Explore hands-on practice in tissue augmentation and expert insights tailored for professionals.",
      icon: "🦷"
    },
    {
      title: "Clinical Confidence",
      desc: "Equipping clinicians with the latest evidence-based techniques to enhance patient care.",
      icon: "🛡️"
    },
    {
      title: "Global Standards",
      desc: "Training that meets global standards of safety, biological compatibility, and performance.",
      icon: "🌐"
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-workshop-page">
        
        {/* SPLIT HERO SECTION - Optimized for Transparent Navbars */}
        <section className="bg-split-hero">
          <div className="bg-hero-content-side">
            <span className="bg-label">Clinical Education</span>
            <h1 className="bg-hero-title">Bone Graft & Tissue Augmentation</h1>
            <p className="bg-hero-subtitle">
              At Kindway Biorezens, our commitment goes beyond manufacturing. We invest in 
              the growth of dental professionals by offering practice-oriented training 
              tailored to real-world clinical needs.
            </p>
            <div className="bg-hero-btns">
              <button className="btn-primary-red">Register Now</button>
              <button className="btn-outline-white">View Curriculum</button>
            </div>
          </div>
          <div className="bg-hero-image-side">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
              alt="Dental Surgery Workshop" 
            />
          </div>
        </section>

        {/* MISSION STRIP */}
        <section className="bg-mission-strip">
          <div className="bg-container">
            <h2>Transforming Dentistry Through Innovation</h2>
            <p>
              We lead the medical manufacturing industry in developing and producing innovative, 
              biorenewable solutions that contribute to a healthier planet.
            </p>
          </div>
        </section>

        {/* WORKSHOP FEATURES GRID */}
        <section className="bg-features-grid">
          <div className="bg-container">
            <div className="bg-grid-layout">
              {workshopHighlights.map((feature, index) => (
                <div key={index} className="bg-feature-card">
                  <div className="bg-card-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE DETAILS SECTION */}
        <section className="bg-course-details">
          <div className="bg-container bg-flex-details">
            <div className="bg-details-img-box">
              <img 
                src="https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVudGFsJTIwd29ya3Nob3BzfGVufDB8fDB8fHww" 
                alt="Kindway Clinical Support" 
              />
              <div className="bg-floating-stat">Expertise: 1500+ Workshops</div>
            </div>
            <div className="bg-details-text-box">
              <span className="bg-course-date">Jan 18-22, 2024</span>
              <h2>Tissue Augmentation Workshop</h2>
              <p>
                Enroll in our specialized course designed for dental professionals to explore 
                advanced techniques, hands-on practice, and expert insights in tissue 
                augmentation.
              </p>
              <ul className="bg-checklist">
                <li>Hands-on surgical practice</li>
                <li>Biocompatible material training</li>
                <li>Evidence-based clinical support</li>
              </ul>
              <button className="btn-primary-red">Enroll in Course Today</button>
            </div>
          </div>
        </section>

        {/* IMPACT SUMMARY */}
        <section className="bg-impact-banner">
          <div className="bg-container bg-impact-flex">
            <div className="bg-impact-item">
              <h4>1160+</h4>
              <p>Students Impacted</p>
            </div>
            <div className="bg-impact-divider"></div>
            <div className="bg-impact-item">
              <h4>10</h4>
              <p>Medical Outreach Programs</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BoneGraftWorkshops;