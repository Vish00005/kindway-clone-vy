import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/assets/css/style-starter.css";
import { Link } from "react-router-dom";
import MainSlider from "./Slider";
import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        const onScroll = () => {
          const header = document.getElementById("site-header");
          if (!header) return;
      
          if (window.scrollY >= 80) {
            header.classList.add("nav-fixed");
          } else {
            header.classList.remove("nav-fixed");
          }
        };
      
        window.addEventListener("scroll", onScroll);
      
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
      useEffect(() => {
        const toggler = document.querySelector(".navbar-toggler");
        const header = document.querySelector("header");
      
        const toggle = () => header?.classList.toggle("active");
      
        toggler?.addEventListener("click", toggle);
        return () => toggler?.removeEventListener("click", toggle);
      }, []);
      useEffect(() => {
        if (window.$ && $(".counter").length) {
          $(".counter").countUp();
        }
      }, []);
      useEffect(() => {
        const btn = document.getElementById("movetop");
      
        const scrollHandler = () => {
          btn.style.display =
            window.scrollY > 20 ? "block" : "none";
        };
      
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
      }, []);
      
      const topFunction = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      useEffect(() => {
        window.gbwawc = {
          url: "https://waw.gallabox.com",
          options: {
            waId: "+919198846529",
            siteName: "Kindway Biorezens",
            siteTag: "Innovation, Quality & Precision",
            widgetPosition: "LEFT",
            welcomeMessage: "Welcome in Kindway Biorezens Pvt. Ltd."
          }
        };
      
        const script = document.createElement("script");
        script.src =
          "https://waw.gallabox.com/whatsapp-widget.min.js";
        script.async = true;
        document.body.appendChild(script);
      
        return () => document.body.removeChild(script);
      }, []);
      useEffect(() => {
  const script = document.createElement("script");
  script.src =
    "https://embed.tawk.to/690dc56ca2e13a195dc64d8c/1j9esmd10";
  script.async = true;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  document.body.appendChild(script);
  return () => document.body.removeChild(script);
}, []);
    return (
        <>
            <Header />
            <body>
                <MainSlider/>
                <section id="about" className="home-services pt-lg-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="box-wrap">
                                    <div className="box-wrap-grid">
                                        <div className="icon">
                                            <span className="fa fa-users"></span>
                                        </div>
                                        <div className="info">
                                            <h4><Link href="#url">Training and Education</Link></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">We offer training, workshops, and educational resources to empower dental professionals with the latest techniques and best practices.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
                                <div className="box-wrap">
                                    <div className="box-wrap-grid">
                                        <div className="icon">
                                            <span className="fa fa-shield"></span>
                                        </div>
                                        <div className="info">
                                            <h4><Link href="#url">Dental Camp</Link></h4>

                                        </div>
                                    </div>
                                    <p className="mt-3">We understand the challenges you face, and we are here to offer solutions and support to the dental problems.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
                                <div className="box-wrap">
                                    <div className="box-wrap-grid">
                                        <div className="icon">
                                            <span className="fa fa-globe"></span>
                                        </div>
                                        <div className="info">
                                            <h4><Link href="#url">Global Reach</Link></h4>

                                        </div>
                                    </div>
                                    <p className="mt-3">We proudly serve dental practitioners around the world, ensuring that our products and services are accessible to all.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w3l-index3" id="about">
                    <div className="midd-w3 py-5">
                        <div className="container py-lg-5 py-md-3">
                            <div className="row">
                                <div className="col-lg-7 mb-lg-0 mb-md-5 mb-4 align-self">
                                    <h6 className="title-subhny">Kindway BioReZens</h6>
                                    <h3 className="title-left mx-0">Mission</h3>
                                    <p className="mt-md-4 mt-3">At Kindway Biorezenes Medical Manufacturing, we envision a future where healthcare products and technologies are not only cutting-edge but also inherently sustainable. Our commitment is to lead the medical manufacturing industry in developing and producing innovative, biorenewable solutions that contribute to a healthier planet.</p>
                                    <br/>
                                        <h3 className="title-left mx-0">Vision</h3>
                                        <p className="mt-md-4 mt-3">At Kindway Biorezens , our vision is to be at the forefront of transformative biorenewable technologies that not only redefine industries but also contribute to a kinder and more sustainable world . We aspire to lead in creating innovative solutions that seamlessly integrate with nature, fostering a harmonious balance between human progress and environmental well -being.</p>
                                </div>
                                <div className="col-lg-5 mt-lg-0 mt-4">
                                    <div className="position-relative">
                                        <img src="../assets/images/sirji.jpg" alt="" className="radius-image img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="w3l-index3" id="about">
                    <div className="midd-w3 py-5">
                        <div className="container py-lg-5 py-md-3">
                            <div className="row">
                                <div className="col-lg-7 mb-lg-0 mb-md-5 mb-4 align-self">
                                    <h6 className="title-subhny">Why Choose</h6>
                                    <h3 className="title-left mx-0">Kindway Biorezens</h3>
                                    <p className="mt-md-4 mt-3">At Kindway Biorezens, we are driven by a mission to reshape the future of dentistry through innovation, accessibility, and compassionate care. As a pioneering startup in dental manufacturing and healthcare services, we design and produce advanced, reliable, and affordable dental implants, biomaterials, and devices that meet global standards of safety and performance. Our vision is clear — to elevate dental care, enhance patient quality of life, and support clinicians with technology that simplifies and strengthens clinical practice.</p>
                                    <Link className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> Read More</Link>
                                </div>
                                <div className="col-lg-5 mt-lg-0 mt-4">
                                    <div className="position-relative">
                                        <img src="../assets/images/b3.jpg" alt="" className="radius-image img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w3l-index2" id="about1">
                    <div className="midd-w3 py-5">
                        <div className="container py-lg-5 py-md-4 py-2">
                            <div className="row">
                                <div className="col-lg-6 left-wthree-img">
                                    <div className="position-relative">
                                        <img src="../assets/images/bg2.jpg" alt="" className="radius-image img-fluid"/>

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-5 align-self">
                                    <h6 className="title-subhny">What Sets us Apart</h6>
                                    <h3 className="title-w3l">Pioneering Products</h3>
                                    <p className="mt-4">At Kindway Biorezens, innovation is at the heart of everything we create. Our product development approach blends cutting-edge technology, scientific precision, and deep clinical insight to deliver solutions that elevate the standard of dental care.

                                        We engineer and manufacture high-performance dental implants, biomaterials, and advanced chairside solutions designed to offer superior functionality, reliability, and patient comfort — all at attainable prices. Every product undergoes rigorous testing and quality validation to ensure optimal biological compatibility, long-term clinical stability, and seamless integration into modern dental practice.
                                    </p>
                                    <Link href="about.html" className="btn btn-style btn-primary mt-4">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w3l-grids-3 py-5" id="why">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <div className="row bottom-ab-grids">
                            <div className="col-lg-6 bottom-ab-left align-self">
                                <span className="title-subhny mb-2">What Sets us Apart</span>
                                <h3 className="title-w3l mb-4">Expertise</h3>
                                <p className="">Powered by a team of highly skilled and experienced dental professionals and material scientists Kindway Biorezens brings unparalleled expertise to every solution we deliver. With deep clinical insight and hands-on industry knowledge, we understand the evolving challenges faced by modern dental practitioners — from technological advancements to patient expectations. Our experts are committed to guiding, supporting, and empowering clinicians with evidence-based solutions, continuous learning, and reliable technical assistance. Whether it’s product innovation, clinical training, or practice support, we stand beside you — helping you achieve excellence in patient care, every step of the way.</p>
                            </div>
                            <div className="col-lg-6 bottom-right-grids pl-lg-5 mt-lg-0 mt-5">
                                <img src="../assets/images/ex1.jpg" alt="" className="radius-image img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w3l-index2" id="about1">
                    <div className="midd-w3 py-5">
                        <div className="container py-lg-5 py-md-4 py-2">
                            <div className="row">
                                <div className="col-lg-6 left-wthree-img">
                                    <div className="position-relative">
                                        <img src="../assets/images/ex2.jpg" alt="" className="radius-image img-fluid"/>

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-5 align-self">
                                    <h6 className="title-subhny">What Sets us Apart</h6>
                                    <h3 className="title-w3l">Training and Education</h3>
                                    <p className="mt-4">At Kindway Biorezens, we believe that excellence in dentistry is built on continuous learning. Our commitment goes beyond manufacturing products — we invest in the growth of dental professionals by offering advanced, practice-oriented training tailored to real-world clinical needs. Our programs are designed to bridge the gap between theory and practice, equipping clinicians with confidence, skill, and the latest evidence-based techniques.
                                    </p>
                                    <Link href="about.html" className="btn btn-style btn-primary mt-4">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w3l-grids-3 py-5" id="why">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <div className="row bottom-ab-grids">
                            <div className="col-lg-6 bottom-ab-left align-self">
                                <span className="title-subhny mb-2">What Sets us Apart</span>
                                <h3 className="title-w3l mb-4">Global Reach</h3>
                                <p className="">Our reach knows no boundaries. We proudly serve dental practitioners around the world, ensuring that our products and services are accessible to all. </p>
                            </div>
                            <div className="col-lg-6 bottom-right-grids pl-lg-5 mt-lg-0 mt-5">
                                <img src="../assets/images/ex3.jpg" alt="" className="radius-image img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w3l-stats py-5" id="stats">
                    <div className="gallery-inner container py-sm-5">
                        <div className="row stats-con py-md-5">
                            <div className="col-md-4 col-6 stats_info counter_grid">
                                <p className="counter">1500 </p>
                                <span className="plus">+</span><br/>
                                    <h3>Workshops/Trainings</h3>
                                    <p className="para-counter">Worskhop and Training Organized</p>
                            </div>
                            <div className="col-md-4 col-6 stats_info counter_grid mt-md-0 mt-0">
                                <p className="counter">1160</p>
                                <span className="plus">+</span><br/>
                                    <h3>Students</h3>
                                    <p className="para-counter">Students enrolled in Workshop/Training/Courses</p>
                            </div>
                            <div className="col-md-4 col-6 stats_info counter_grid2 mt-md-0 mt-4">
                                <p className="counter">1145 </p>
                                <span className="plus">+</span><br/>
                                    <h3>Medical Camps</h3>
                                    <p className="para-counter">Medical camps organized</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w3l-text-11 py-5" id="blogs">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <span className="title-subhny text-center mb-2">Kindway</span>
                        <h3 className="title-w3l text-center mb-5">Recent Activities.</h3>
                        <div className="row text11-content">

                            <div className="col-md-4 item mt-lg-0">
                                <div className="card">
                                    <div className="card-header p-0 position-relative border-0">
                                        <Link href="blog-single.html">
                                            <img className="card-img-bottom d-block radius-image" src="../assets/images/b1.jpg" alt="Card image cap"/>
                                        </Link>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <h6 className="mt-4">Dec 22, 2024</h6>
                                        <Link href="#admin" className="admin">-Kindway Biorezens</Link>
                                        <br/>
                                            <Link href="blog-single.html" className="blog-desc">Dental Implant Training/Workshop-Only for Dentist</Link>
                                            <p>Join our exclusive Dental Implant Training/Workshop, tailored solely for Dentists. Elevate your expertise with hands-on learning, expert guidance, and cutting-edge techniques. Gain invaluable skills to excel in implant dentistry, enhancing patient care and practice success. </p>
                                            <Link href="blog-single.html" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 item mt-lg-0 mt-5">
                                <div className="card">
                                    <div className="card-header p-0 position-relative border-0">
                                        <Link href="blog-single.html">
                                            <img className="card-img-bottom d-block radius-image" src="../assets/images/b3.jpg" alt="Card image cap"/>
                                        </Link>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <h6 className="mt-4">Jan 16-22, 2024</h6>
                                        <Link href="#admin" className="admin">-Kindway Biorezens</Link>
                                        <br/>
                                            <Link href="blog-single.html" className="blog-desc">Dental Implant Training/Workshop-Only for Dentist</Link>
                                            <p>Enroll in our Tissue Augmentation Training/Workshop/Course designed for dental professionals. Explore advanced techniques, hands-on practice, and expert insights in tissue augmentation. Elevate your skills, enhance patient outcomes, and advance your career. </p>
                                            <Link href="blog-single.html" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 item mt-lg-0 mt-5">
                                <div className="card">
                                    <div className="card-header p-0 position-relative border-0">
                                        <Link href="blog-single.html">
                                            <img className="card-img-bottom d-block radius-image" src="../assets/images/b6.jpg" alt="Card image cap"/>
                                        </Link>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <h6 className="mt-4">Dec 22, 2024</h6>
                                        <Link href="#admin" className="admin">-Kindway Biorezens</Link>
                                        <br/>
                                            <Link href="blog-single.html" className="blog-desc">Outreach programs - Camps for general public</Link>
                                            <p>Join us for informative sessions, screenings, and interactive activities focused on oral health education. Empower yourself with valuable knowledge and resources to maintain a healthy smile. </p>
                                            <Link href="blog-single.html" className="btn btn-style btn-primary mt-lg-4 mt-4">Read More </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <script src="assets/js/jquery-3.3.1.min.js"></script>
  <script src="assets/js/theme-change.js"></script>
  <script src="assets/js/owl.carousel.js"></script>
  <script>
    $(document).ready(function () {
      $('.owl-one').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 1
          },
          667: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })
    })
  </script>
  <script>
    $(document).ready(function () {
      $("#owl-demo2").owlCarousel({
        loop: true,
        nav: false,
        margin: 50,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          736: {
            items: 1,
            nav: false
          },
          991: {
            items: 2,
            margin: 30,
            nav: false
          },
          1080: {
            items: 2,
            nav: false
          }
        }
      })
    })
  </script>
  <script>
    $(document).ready(function () {
      $("#owl-demo2").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: false,
            loop: false
          }
        }
      })
    })
  </script>
  <script src="assets/js/jquery.waypoints.min.js"></script>
  <script src="assets/js/jquery.countup.js"></script>
  <script>
    $('.counter').countUp();
  </script>
  <script>
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
      } else {
        $("#site-header").removeClass("nav-fixed");
      }
    });

    $(".navbar-toggler").on("click", function () {
      $("header").toggleClass("active");
    });
    $(document).on("ready", function () {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      }
      $(window).on("resize", function () {
        if ($(window).width() > 991) {
          $("header").removeClass("active");
        }
      });
    });
  </script>

  <script src="assets/js/bootstrap.min.js"></script>


  <script>
    (function (w, d, s, u) {
        w.gbwawc = {
            url: u,
            options: {
                waId: "+91 91988 46529",
                siteName: "Kindway Biorezens",
                siteTag: "Innovation, Quality & Precision",
                siteLogo: "https://assets.gallabox.com/gb-home/wa-chat-widget/bot-logo-3.png",
                widgetPosition: "LEFT",
                welcomeMessage: "Welcome in Kindway Biorezens Pvt. Ltd.",
                triggerMessage: "Kindway Biorezens",
                brandColor: "#25D366",
                messageText: "I am looking for a",
                replyOptions: ["Order product to deliver my home", "Workshop / Training"],
                version: "v1",
                widgetPositionMarginX: "12",
                widgetPositionMarginY: "12",
            },
        };
        var h = d.getElementsByTagName(s)[0],
            j = d.createElement(s);
        j.async = true;
        j.src = u + "/whatsapp-widget.min.js?_=" + "2024-12-10 14";
        h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://waw.gallabox.com");
  </script>
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/690dc56ca2e13a195dc64d8c/1j9esmd10';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script> */}
            </body>

            <Footer />
        </>
    );
};

export default Index;