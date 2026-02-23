import React from "react";
// import "../../public/assets/css/Footer.css"; // Ensure you have a separate CSS for footer

const Footer = () => {
    const topFunction = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w3l-footer-29-main">
            <div className="footer-29-w3l py-5">
                <div className="container py-lg-4">
                    <div className="row footer-top-29">
                        <div className="col-lg-4 col-md-6 footer-list-29 footer-1 pr-lg-5">
                            <div className="footer-logo mb-3">
                                <a className="footer-brand-logo" href="/">Kindway<span className="sublog">BioReZens</span></a>
                            </div>
                            <p>
                                We are more than a company — we are a purpose-driven force committed to advancing dental care 
                                through innovation, quality, and precision. As a manufacturing-driven startup, we are 
                                dedicated to delivering cutting-edge, patient-focused, and affordable solutions.
                            </p>
                            <div className="main-social-footer-29 mt-4">
                                <a href="https://www.facebook.com/share/1GBc9pA6Rg/" className="facebook"><span className="fa fa-facebook"></span></a>
                                <a href="https://www.youtube.com/@kindwaydentalimplants" className="youtube"><span className="fa fa-youtube"></span></a>
                                <a href="https://www.instagram.com/quadhelixx" className="instagram"><span className="fa fa-instagram"></span></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-list-29 footer-contact mt-lg-0 mt-5">
                            <h6 className="footer-title-29">Contact Details</h6>
                            <div className="contact-block mb-3">
                                <strong>Corporate Office:</strong>
                                <p>38 Balaji Colony Samneghat, Near BHU Trauma Center Lanka Varanasi, UP - 221005</p>
                            </div>
                            <div className="contact-block mb-3">
                                <strong>Registered Center:</strong>
                                <p>Room No. 401, CDC, Banaras Hindu University, Varanasi, UP - 221005</p>
                            </div>
                            <div className="contact-info">
                                <p><strong>Call & WhatsApp:</strong> <a href="tel:+919151161267">+91-9151161267</a></p>
                                <p><strong>Email:</strong> <a href="mailto:kindwaybiorezens@gmail.com">kindwaybiorezens@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-list-29 footer-2 mt-lg-0 mt-5">
                            <h6 className="footer-title-29">Useful Links</h6>
                            <ul>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/shop">Shop</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                            <h6 className="footer-title-29">More Info</h6>
                            <ul>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/webinar">Webinar</a></li>
                                <li><a href="/investor">Investor</a></li>
                                <li><a href="/workshop">Workshops</a></li>
                                <li><a href="/support">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w3l-copyright">
                <div className="container">
                    <div className="row bottom-copies">
                        <p className="col-lg-8 copy-footer-29">© 2026 Kindway BioReZens. All rights reserved.</p>
                        <div className="col-lg-4 footer-list-29">
                            <ul className="d-flex justify-content-lg-end">
                                <li><a href="/careers">Careers</a></li>
                                <li className="mx-lg-4 mx-3"><a href="/privacy">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <button onClick={topFunction} id="movetop" title="Go to top">&#10548;</button>
        </footer>
    );
};

export default Footer;