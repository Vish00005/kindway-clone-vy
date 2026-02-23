import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/Blog.css";

const Blog = () => {
  const posts = [
    {
      title: "Science of Smile: How Dental Implants Work",
      category: "Education",
      excerpt: "A comprehensive guide to the mechanics of osseointegration and how high-performance dental implants redefine industries[cite: 18, 36].",
      date: "Feb 23, 2026",
      image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Stability First: Importance of Bone Grafts",
      category: "Clinical",
      excerpt: "Why advanced bone graft materials are essential for long-term clinical stability and successful implant outcomes[cite: 37, 71].",
      date: "Feb 18, 2026",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Mastering Dental Implants Training",
      category: "Training",
      excerpt: "Expert tips for implant surgery planning, bridging the gap between theory and practice for dental professionals[cite: 48, 49].",
      date: "Feb 12, 2026",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Workshop Insights: Case Studies & Success",
      category: "Workshop",
      excerpt: "Real-world results from our latest dental implant training sessions, showcasing advanced chairside solutions[cite: 36, 64].",
      date: "Feb 05, 2026",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Community Impact through Outreach Programs",
      category: "Outreach",
      excerpt: "Empowering the public through oral health education in our recent dental outreach programs and camps.",
      date: "Jan 28, 2026",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <Header />
      <div className="blog-page-wrapper">
        {/* HIGH-CONTRAST HERO SECTION */}
        <section className="blog-hero">
          <div className="blog-hero-content">
            <span className="blog-label">Insights & Updates</span>
            <h1 className="blog-title">The Kindway Journal</h1>
            <p className="blog-subtitle">
              At Kindway Biorezens, we believe in continuous learning[cite: 2]. 
              Stay updated with the latest in dental innovation, clinical training, 
              and sustainable healthcare solutions[cite: 15, 18].
            </p>
          </div>
        </section>

        {/* FEATURED POSTS GRID */}
        <section className="blog-grid-section">
          <div className="container">
            <div className="blog-posts-grid">
              {posts.map((post, index) => (
                <article key={index} className="blog-card">
                  <div className="blog-card-img">
                    <img src={post.image} alt={post.title} />
                    <span className="blog-card-cat">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <button className="blog-read-more">Read Article</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER / CALL TO ACTION */}
        <section className="blog-cta">
          <div className="cta-box">
            <h2>Empower Your Practice</h2>
            <p>Our experts are committed to guiding and supporting clinicians with evidence-based solutions[cite: 43].</p>
            <div className="cta-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;