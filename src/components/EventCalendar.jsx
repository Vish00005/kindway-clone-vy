import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../../public/assets/css/EventCalendar.css";

const EventCalendar = () => {
  const events = [
    {
      date: "Jan 18-22, 2024",
      title: "Tissue Augmentation Training",
      category: "Workshop",
      description: "Explore advanced techniques and hands-on practice in tissue augmentation with expert insights.",
      status: "Past Event",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600"
    },
    {
      date: "Dec 22, 2024",
      title: "Dental Implant Training",
      category: "Specialist Workshop",
      description: "Tailored solely for dentists to gain invaluable skills in implant dentistry.",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
    },
    {
      date: "Ongoing",
      title: "Medical Outreach Camps",
      category: "Public Outreach",
      description: "Informative sessions and screenings focused on oral health education for the general public.",
      status: "Active",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <>
      <Header />
      <div className="calendar-main-wrapper">
        {/* HIGH CONTRAST HERO FOR TRANSPARENT NAV */}
        <section className="calendar-hero-section">
          <div className="calendar-hero-content">
            <span className="calendar-pretitle">Education & Outreach</span>
            <h1 className="calendar-main-title">Academic Calendar</h1>
            <p className="calendar-main-desc">
              At Kindway Biorezens, we believe in continuous learning. We offer training, 
              workshops, and educational resources to empower dental professionals.
            </p>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="calendar-content">
          <div className="calendar-grid">
            {events.map((event, index) => (
              <div key={index} className="calendar-event-card">
                <div className="event-visual">
                  <img src={event.image} alt={event.title} />
                  <div className={`event-status-tag ${event.status.toLowerCase().replace(' ', '-')}`}>
                    {event.status}
                  </div>
                </div>
                <div className="event-body">
                  <div className="event-meta">
                    <span className="event-date-chip">{event.date}</span>
                    <span className="event-cat">{event.category}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <button className="calendar-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT SUMMARY */}
        <section className="calendar-impact-footer">
          <div className="impact-box">
            <h4>1500+</h4>
            <p>Workshops Organized</p>
          </div>
          <div className="impact-box">
            <h4>1160+</h4>
            <p>Students Trained</p>
          </div>
          <div className="impact-box">
            <h4>10</h4>
            <p>Medical Camps</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EventCalendar;