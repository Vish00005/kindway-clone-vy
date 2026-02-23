import "../../public/assets/css/ImplantTraining.css";
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const ImplantTraining = () => {
  const trainingEvents = [
    {
      date: "Dec 22, 2024",
      title: "Dental Implant Training/Workshop",
      subtitle: "Only for Dentist",
      description: "Join our exclusive Dental Implant Training/Workshop, tailored solely for Dentists. Elevate your expertise with hands-on learning, expert guidance, and cutting-edge techniques.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "Jan 18-22, 2024",
      title: "Tissue Augmentation Training",
      subtitle: "Workshop/Course",
      description: "Enroll in our Tissue Augmentation Training Workshop/Course designed for dental professionals. Explore advanced techniques, hands-on practice, and expert insights in tissue augmentation.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <Header />
      <div className="implant-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">Professional Excellence</span>
            <h1>Training and Education</h1>
            <p>
              At Kindway Biorezens, we believe in continuous learning. We offer training, 
              workshops, and educational resources to empower dental professionals with the 
              latest techniques and best practices.
            </p>
            <div className="hero-btns">
              <button className="btn-primary">Discover Now</button>
              <button className="btn-secondary-outline">Our Mission</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" alt="Dental Workshop" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-grid">
          <div className="stat-card">
            <h2>1500+</h2>
            <p>Workshops Organized</p>
          </div>
          <div className="stat-card">
            <h2>1145+</h2>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-card">
            <h2>10</h2>
            <p>Medical Camps</p>
          </div>
        </section>

        {/* Workshop Cards */}
        <section className="events-section">
          <h2 className="section-title">Upcoming Workshops</h2>
          <div className="events-grid">
            {trainingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-img-container">
                  <img src={event.image} alt={event.title} />
                  <span className="event-date">{event.date}</span>
                </div>
                <div className="event-info">
                  <span className="badge">{event.subtitle}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <button className="btn-outline">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ImplantTraining;