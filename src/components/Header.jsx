import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile toggle

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Sticky navbar logic
  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("site-header");
      if (!header) return;
      window.scrollY >= 80
        ? header.classList.add("nav-fixed")
        : header.classList.remove("nav-fixed");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (menu) => {
    // On mobile, we toggle; on desktop, hover handles it
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header id="site-header" className="w3lhny-head fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke px-0">
          <h1>
            <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
              Kindway<span className="sublog">BioReZens</span>
            </Link>
          </h1>

          {/* MOBILE TOGGLE BUTTON (Hamburger) */}
          <button 
            className={`navbar-toggler ${isMobileMenuOpen ? "" : "collapsed"}`} 
            type="button" 
            aria-label="Toggle navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          {/* ADDED 'show' class conditionally for mobile visibility */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMobileMenu}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMobileMenu}>About</Link>
              </li>

              {/* PRODUCTS DROPDOWN */}
              <li
                className={`nav-item dropdown ${openDropdown === "products" ? "show" : ""}`}
                onMouseEnter={() => window.innerWidth > 991 && setOpenDropdown("products")}
                onMouseLeave={() => window.innerWidth > 991 && setOpenDropdown(null)}
              >
                <span
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown("products")}
                  style={{ cursor: "pointer" }}
                >
                  Products <span className="fa fa-angle-down"></span>
                </span>
                <ul className={`dropdown-menu ${openDropdown === "products" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/products/dental-implants" onClick={closeMobileMenu}>Dental Implants</Link></li>
                  <li><Link className="dropdown-item" to="/products/bone-grafts" onClick={closeMobileMenu}>Bone Grafts</Link></li>
                  <li><Link className="dropdown-item" to="/products/surgical-kits" onClick={closeMobileMenu}>Surgical Kits</Link></li>
                </ul>
              </li>

              {/* TRAINING DROPDOWN */}
              <li
                className={`nav-item dropdown ${openDropdown === "training" ? "show" : ""}`}
                onMouseEnter={() => window.innerWidth > 991 && setOpenDropdown("training")}
                onMouseLeave={() => window.innerWidth > 991 && setOpenDropdown(null)}
              >
                <span
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown("training")}
                  style={{ cursor: "pointer" }}
                >
                  Training <span className="fa fa-angle-down"></span>
                </span>
                <ul className={`dropdown-menu ${openDropdown === "training" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/training/implant-training" onClick={closeMobileMenu}>Implant Training</Link></li>
                  <li><Link className="dropdown-item" to="/training/bone-graft-workshops" onClick={closeMobileMenu}>Bone Graft Workshops</Link></li>
                  <li><Link className="dropdown-item" to="/events" onClick={closeMobileMenu}>Event Calendar</Link></li>
                </ul>
              </li>

              {/* OUTREACH DROPDOWN */}
              <li
                className={`nav-item dropdown ${openDropdown === "outreach" ? "show" : ""}`}
                onMouseEnter={() => window.innerWidth > 991 && setOpenDropdown("outreach")}
                onMouseLeave={() => window.innerWidth > 991 && setOpenDropdown(null)}
              >
                <span
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown("outreach")}
                  style={{ cursor: "pointer" }}
                >
                  Outreach <span className="fa fa-angle-down"></span>
                </span>
                <ul className={`dropdown-menu ${openDropdown === "outreach" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/mobile-clinic" onClick={closeMobileMenu}>Mobile Dental Clinic</Link></li>
                  <li><Link className="dropdown-item" to="/csr-programs" onClick={closeMobileMenu}>CSR Programs</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={closeMobileMenu}>Blog</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
              </li>

              <li className="nav-item ms-lg-3 mt-lg-0 mt-3">
                <Link className="btn btn-primary" to="/training/register" onClick={closeMobileMenu}>
                  Book Training
                </Link>
              </li>
            </ul>
          </div>

          {/* THEME SWITCH */}
          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={handleThemeChange}
                    checked={theme === "dark"}
                  />
                  <div className="mode-container">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;