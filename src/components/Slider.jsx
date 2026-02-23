import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSlider = () => {
  return (
    <section className="w3l-main-slider" id="home">
      <div className="companies20-content">
      <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slider-info banner-view bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Elevating Dental Excellence</h5>
                    <p className="mt-md-4 mt-3">
                      At Kindway Biorezens, we are dedicated to the advancement
                      of dental healthcare. We take pride in our mission to
                      empower dental professionals with innovative solutions,
                      cutting-edge products, and unwavering support.
                    </p>
                    <a
                      className="btn btn-style btn-white mt-sm-5 mt-4 mr-2"
                      href="#read"
                    >
                      Discover Now
                    </a>
                    <Link
                      className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                      to="/about"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slider-info banner-view banner-top1 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Why Choose Kindway</h5>
                    <p className="mt-md-4 mt-3">
                      We’re not just a company but committed to advancing dental
                      care through innovation, quality, and precision.
                    </p>
                    <a
                      className="btn btn-style btn-white mt-sm-5 mt-4 mr-2"
                      href="#read"
                    >
                      Discover Now
                    </a>
                    <Link
                      className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                      to="/about"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slider-info banner-view banner-top2 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Pioneering Products</h5>
                    <p className="mt-md-4 mt-3">
                      We offer a curated selection of dental products and
                      medical devices that are at the forefront of dental
                      technology.
                    </p>
                    <a
                      className="btn btn-style btn-white mt-sm-5 mt-4 mr-2"
                      href="#read"
                    >
                      Discover Now
                    </a>
                    <Link
                      className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                      to="/about"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="slider-info banner-view banner-top3 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="banner-info-bg">
                    <h5>Training and Education</h5>
                    <p className="mt-md-4 mt-3">
                      At Kindway Biorezens, we believe in continuous learning.
                      We offer training, workshops, and educational resources to
                      empower dental professionals.
                    </p>
                    <a
                      className="btn btn-style btn-white mt-sm-5 mt-4 mr-2"
                      href="#read"
                    >
                      Discover Now
                    </a>
                    <Link
                      className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                      to="/about"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MainSlider;