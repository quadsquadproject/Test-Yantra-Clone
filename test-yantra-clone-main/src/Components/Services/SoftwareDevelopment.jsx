import React from "react";
import "./SoftwareDevelopment.css";
// import Blog15 from './ServiceImages/blog15.jpg'
import cloud from "./ServiceImages/cloud.webp";
import aws from "./ServiceImages/aws-service.webp";
import iwt from "./ServiceImages/IWT-Service.webp";

const SoftwareDevelopment = () => {
  return (
    <div className="software-development-container">
      <section className="development_background_img">
        <div className="contact-banner">
          <div className="details-content">
            <div className="text-span">
              <span>Software Development</span>
            </div>
            <div className="text-para">
              <p>
                Our 1,100+ expert software developers utilize the latest
                technology stack to build and integrate leading applications
                across a variety of domains.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second_section">
        <div className="testing-section-second">
          <div className="header-leverage">
            <h1>Digital Transformation Services</h1>
            <p>
              A holistic range of services covering all aspects of software
              development life cycle (SDLC) with industry domain expertise
            </p>
          </div>
          <div className="software-section-allbox">
            <div className="software-section-box">
              <img src={cloud} alt="manageQA" />
              <h3>Cloud Services</h3>
              <p>
                Test Yantra Global offers a comprehensive suite of cloud
                computing services that form the foundation for a scalable
                hybrid cloud management platform that drives holistic digital
                transformation.
              </p>
            </div>
            <div className="software-section-box">
              <img src={aws} alt="manageQA" />
              <h3>AWS Services</h3>
              <p>
                Test Yantra Global is an AWS consulting firm specializing in
                cloud-first solutions and serverless applications. Our services
                encompass AWS architecture optimization and proactive
                monitoring. Additionally, we emphasize Infrastructure as Code
                (IaC) using AWS.
              </p>
            </div>
            <div className="software-section-box">
              <img src={iwt} alt="manageQA" />
              <h3>IOT Services</h3>
              <p>
                The synergy of IoT connecting individuals and devices fosters
                enhanced efficiency and creativity. At Test Yantra Global, we
                are committed to delivering top-notch IoT consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
