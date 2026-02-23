import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="inner-banner"></div>

      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">
              <span className="fa fa-arrow-right mx-2"></span>
              Contact Us
            </li>
          </ul>
        </div>
      </section>

      <section className="w3l-contact-2 py-5" id="contact">
        <div className="container py-lg-5 py-md-4 py-2">

          <span className="title-subhny mb-2 text-center">Send a Message</span>
          <h3 className="title-w3l mb-5 text-center">Contact Us</h3>

          <div className="contact-grids d-grid">

            <div className="contact-left-img">
              <img
                src="/assets/images/contact.jpg"
                className="img-fluid radius-image"
                alt="contact"
                width="75%"
                height="75%"
              />
            </div>

            <div className="contact-right">
              <form
                action="https://sendmail.w3layouts.com/submitForm"
                method="post"
                className="signin-form"
              >
                <div className="input-grids">
                  <input
                    type="text"
                    name="w3lName"
                    placeholder="Your Name*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="email"
                    name="w3lSender"
                    placeholder="Your Email*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="text"
                    name="w3lSubect"
                    placeholder="Subject*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="text"
                    name="w3lWebsite"
                    placeholder="Website URL*"
                    className="contact-input"
                    required
                  />
                </div>

                <div className="form-input">
                  <textarea
                    name="w3lMessage"
                    placeholder="Type your message here*"
                    required
                  ></textarea>
                </div>

                <div className="form-buttonhny text-lg-right">
                  <button className="btn btn-style btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-left mt-5 pt-lg-5">

            <span className="title-subhny mb-2 text-center">Find Us</span>
            <h3 className="title-w3l mb-5 text-center">Address Info</h3>

            <div className="cont-details">

              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="cont-right">
                  <h6>Kindway Biorezen Pvt Ltd</h6>
                  <p>
                    38 Balaji Colony Samneghat, Near BHU Trauma Center Lanka
                    Varanasi, Uttar Pradesh - 221005
                  </p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="cont-right">
                  <h6>Call & WhatsApp Us</h6>
                  <p>
                    <a href="tel:+919151161267">+91-9151161267</a>
                  </p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-envelope-o"></span>
                </div>
                <div className="cont-right">
                  <h6>Email Us</h6>
                  <p>
                    <a
                      href="mailto:kindwaybiorezens@gmail.com"
                      className="mail"
                    >
                      kindwaybiorezens@gmail.com
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="map-iframe mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d230902.6167335294!2d83.000262!3d25.275517!3m2!1i1024!2i768!4f13.1!2m1!1s38%20Balaji%20Colony%20Samneghat%2C%20%20Near%20BHU%20Trauma%20Center%20Lanka%20Varanasi%2C%20Uttar%20Pradesh%20-%20221005!5e0!3m2!1sen!2sus!4v1749452500539!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="google-map"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;