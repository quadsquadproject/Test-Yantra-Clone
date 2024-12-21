import React, { useState } from "react";
import "./SoftwareTesting.css";
import ManageQA from "./ServiceImages/ManageQA.webp";
import Crowdtesting from "./ServiceImages/CrowdTesting.webp";
import TESTINGSOLUTION from "./ServiceImages/TestingSolution.webp";
import blog16 from "../Home/blog16.webp";
import blog15 from "../Home/blog15.webp";
import blog14 from "../Home/blog14.webp";
import VideoThumbnail1 from "./ServiceImages/video-thumbnail6.png";


const SoftwareTesting = () => {
  const [showImage, setShowImage] = useState("")


  const handleThumbnailClick = () => {
    setShowImage(!showImage);
  };


  return (
    <div className="software-testing-container">
      <section className="background-img-testing">
        <div className="contact-banner">
          <div className="details-content">
            <div className="text-span">
              <span>Software Testing Services (TaaS)</span>
            </div>
            <div className="text-para">
              <p>
                Trusted by 3000+ clients across the globe to provide a range of
                Software testing solutions, expertise, and AI based software
                testing platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second_section">
        <div className="testing-section-second">
          <div className="header-leverage">
            <h1>Leverage two decades of Testing Expertise </h1>
            <p>
              Our testing center of excellence (CoE) provides a unified
              solutions for web, android, ios, API, and databases.
            </p>
          </div>
          <div className="software-section-allbox">
            <div className="software-section-box">
              <img src={ManageQA} alt="manageQA" />
              <h3>Managed QA</h3>
              <p>
                Our team of IT consultants and managed services experts provide
                timely consulting, software configuration, deployment, and
                support for an array of cloud and premise based applications.
              </p>
            </div>
            <div className="software-section-box">
              <img src={Crowdtesting} alt="manageQA" />
              <h3>Crowd Testing</h3>
              <p>
                Crowdsourced Testing is a necessity and important solution for
                companies that are launching time-sensitive products, such as
                mobile applications and web-based platforms with UI, UX issues
                and software bugs.
              </p>
            </div>
            <div className="software-section-box">
              <img src={TESTINGSOLUTION} alt="manageQA" />
              <h3>Testing Solutions</h3>
              <p>
                Test Yantra Global offers a suite of software testing tools,
                methodology, and resources aimed at enhancing the quality
                assurance of your applications including testing services like
                automation, performance, application and security testing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="video_container">
            <div className="thumbnail">
              {/* <img src={VideoThumbnail} alt="video thumbnail" /> */}
              {showImage ? (
                <div
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={handleThumbnailClick}
                >
                  <img
                    src={VideoThumbnail1}
                    alt="video thumbnail"
                    onClick={() => setShowImage(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "0",
                        height: "0",
                        borderLeft: "20px solid white",
                        borderTop: "12px solid transparent",
                        borderBottom: "12px solid transparent",
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="900px"
                  height="420px"
                  src="https://www.youtube.com/embed/tuwxrL7Kh4E"
                  title="TestYantra Global"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  onClick={() => setShowImage(true)}
                ></iframe>
              )}
            </div>
          </div>
      </section>
      <section className="section-three">
        <div className="article_container">
          <div>
            <h2>Our Recent Articles</h2>
          </div>
          <div className="article-box">
            <div className="box">
              <div className="blog-img">
                <img src={blog16} alt="" id="blog" />
              </div>
              <div className="enter-meta">
                <div>
                  <ul>
                    <li>Blog </li>
                    <li>Software Testing</li>
                  </ul>
                </div>
                <div>
                  <h2>
                    Comprehensive Guide to Developing Test Scripts for Software
                    Testing
                  </h2>
                </div>
                <div>
                  <p>
                    Effective software testing is essential for the delivery of
                    high-quality software products. The development of test
                    scripts is a critical...
                  </p>
                </div>
              </div>
              <div className="readMe-btn">
                <button>Read Me</button>
              </div>
            </div>
            <div className="box">
              <div className="blog-img">
                <img src={blog15} alt="" id="blog" />
              </div>
              <div className="enter-meta">
                <div>
                  <ul>
                    <li>Blog</li>
                    <li>Categeries of Test</li>
                  </ul>
                </div>
                <div>
                  <h2>Guidelines for Writing Effective Unit Tests</h2>
                </div>
                <div>
                  <p>
                    Unit testing is a core component of software testing that
                    targets the smallest testable parts of an application. By
                    validating .....
                  </p>
                </div>
              </div>
              <div className="readMe-btn">
                <button>Read Me</button>
              </div>
            </div>
            <div className="box">
              <div className="blog-img">
                <img src={blog14} alt="" id="blog" />
              </div>
              <div className="enter-meta">
                <div>
                  <ul>
                    <li>Blog</li>
                    <li>Test Data</li>
                  </ul>
                </div>
                <div>
                  <h2>
                    Automation Testing Tools: Selenium, Cypress, Playwright,
                    Robot Framework vs. FireFlink
                  </h2>
                </div>
                <div>
                  <p>
                    Exploring the diverse realm of automation testing tools is
                    essential for understanding the specific advantages,
                    limitations.....
                  </p>
                </div>
              </div>
              <div className="readMe-btn">
                <button>Read Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareTesting;
