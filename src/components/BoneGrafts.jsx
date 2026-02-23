import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/BoneGrafts.css";

const BoneGrafts = () => {
  const graftProducts = [
    {
      name: "Bio-Synthetic Granules",
      feature: "High Porosity",
      desc: "Advanced biorenewable solutions that contribute to a healthier planet.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Collagen Membranes",
      feature: "Optimal Resorption",
      desc: "Innovative solutions that seamlessly integrate with nature for environmental well-being.",
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <Header />
      <div className="bone-grafts-page">
        
        {/* HERO SECTION: Forced Contrast for Transparent Nav */}
        <section className="grafts-hero">
          <div className="grafts-hero-content">
            <span className="grafts-label">Regenerative Medicine</span>
            <h1 className="grafts-hero-title">Bone Graft & Tissue Augmentation</h1>
            <p className="grafts-hero-desc">
              Leading the medical manufacturing industry in developing innovative, 
              biorenewable solutions for a healthier planet.
            </p>
            <div className="grafts-btns">
              <button className="btn-red">Download Catalog</button>
              <button className="btn-white-outline">Technical Data</button>
            </div>
          </div>
        </section>

        {/* PRODUCT CATALOG GRID */}
        <section className="catalog-section">
          <div className="container">
            <h2 className="catalog-title">Biomaterial Catalog</h2>
            <div className="catalog-grid">
              {graftProducts.map((product, index) => (
                <div key={index} className="graft-card">
                  <div className="graft-img-wrapper">
                    <img src={product.img} alt={product.name} />
                    <div className="graft-badge">{product.feature}</div>
                  </div>
                  <div className="graft-details">
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <button className="btn-text">Technical Specs →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLINICAL EXCELLENCE SECTION */}
        <section className="clinical-excellence">
          <div className="container clinical-flex">
            <div className="clinical-text">
              <h2>Surgical Excellence & Precision</h2>
              <p>
                We design advanced, reliable, and affordable dental implants and biomaterials 
                that meet global standards of safety and performance.
              </p>
              <ul className="clinical-list">
                <li>Cutting-edge sustainable technologies</li>
                <li>Inherently green manufacturing</li>
                <li>Enhanced patient quality of life</li>
              </ul>
            </div>
            <div className="clinical-image-container">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Surgical Precision" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BoneGrafts;