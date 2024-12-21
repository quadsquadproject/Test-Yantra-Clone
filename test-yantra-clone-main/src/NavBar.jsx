import React, { useEffect, useState } from "react";
import LOGO from "./testyantralogo.jpeg";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
const NavBar = () => {
  const [serviceHover, setServiceHover] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [partnerDropdown, setPartnerDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else if (currentScrollY <= lastScrollY) {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`container ${
        isNavbarVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="img_containers">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="list_btn">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setActiveRoute("home")}
              className={activeRoute === "home" ? "home-active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <div
              id="ig"
              to="/service"
              onClick={() => setActiveRoute("service")}
              className={activeRoute === "service" ? "service-active" : ""}
            >
              <div
                className="dropdown-container"
                onMouseEnter={() => {
                  setServiceHover(true);
                }}
                onMouseLeave={() => {
                  setServiceHover(false);
                }}
              >
                <div className="dropdown-button">
                  <span>Service</span>{" "}
                  {serviceHover ? (
                    <FaChevronUp style={{ paddingTop: "6px" }} />
                  ) : (
                    <FaChevronDown style={{ paddingTop: "6px" }} />
                  )}
                </div>
                {serviceHover && (
                  <div className="dropdown-options">
                    <div className="dropdown-option">
                      <Link to="/service/softwaretesting">
                        Software Testing (TAAS)
                      </Link>
                    </div>
                    <div className="dropdown-option">
                      <Link to="/service/softwaredevelopment">
                        Software Development
                      </Link>
                    </div>
                    <div className="dropdown-option">
                      <Link to="/service/skillenhancement">
                        Skill Enhancement
                      </Link>
                    </div>
                    <div className="dropdown-option">
                      <Link to="/service/consultant">IT consultant</Link>
                    </div>
                    <div className="dropdown-option">
                      <Link to="/service/testing">Crowd Testing</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
          <li>
            <div
              id="ig"
              to="/partner"
              onClick={() => setActiveRoute("service")}
              className={activeRoute === "service" ? "service-active" : ""}
            >
              <div
                className="dropdown-container"
                onMouseEnter={() => {
                  setPartnerDropdown(true);
                }}
                onMouseLeave={() => {
                  setPartnerDropdown(false);
                }}
              >
                <div className="dropdown-button">
                  <span>Partners</span>{" "}
                  {partnerDropdown ? (
                    <FaChevronUp style={{ paddingTop: "6px" }} />
                  ) : (
                    <FaChevronDown style={{ paddingTop: "6px" }} />
                  )}
                </div>
                {partnerDropdown && (
                  <div className="dropdown-options">
                    <div className="dropdown-option">
                      <Link>FireFlink</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/articles"
              onClick={() => setActiveRoute("article")}
              className={activeRoute === "article" ? "active-article" : ""}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              onClick={() => setActiveRoute("touch")}
              className={activeRoute === "touch" ? "active-touch" : ""}
            >
              <button className="btn_get">Get in Touch</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
