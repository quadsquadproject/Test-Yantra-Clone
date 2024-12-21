import React, { useState } from "react";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import INDIA from "./Image/india.webp";
import IRELAND from "./Image/Ireland.webp";
import NETHERLAND from "./Image/Netherland.webp";
import UNITEDSTATE from "./Image/united-states.webp";
import UNITEDLKINGDOM from "./Image/unitedKingdom.webp";
import CANADA from "./Image/canada.webp";

const Contacts = () => {
  const [isEnter1, setIsEnter1] = useState(false);
  const [isEnter2, setIsEnter2] = useState(false);
  const [isEnter3, setIsEnter3] = useState(false);
  const [isEnter4, setIsEnter4] = useState(false);
  const [isEnter5, setIsEnter5] = useState(false);
  const [isEnter6, setIsEnter6] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-area">
      <section className="background-banner">
        <div className="contact-banner">
          <div className="details-content">
            <div className="text-span">
              <span>Contact</span>
            </div>
            <div className="text-para">
              <p>
                Please complete the form below and we will get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="form-container">
          <div className="layout-container">
            <form className="container-form" onSubmit={handleFormSubmit}>
              <div className="col-lg-1">
                <div className="input_text">
                  <input type="text" placeholder="Name*" />
                </div>
                <div>
                  <input type="email" placeholder="Email*" />
                </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <select name="Select Topic">
                    <option value="">Select Topic</option>
                    <option value="">Software Development</option>
                    <option value="">Software Testing</option>
                    <option>IT Skills Enhancement</option>
                    <option>IT consultant</option>
                    <option>Carrear Opportunity</option>
                    <option>Other Topic</option>
                  </select>
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" />
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <input type="text" placeholder="subject *" />
                </div>
                <div>
                  <textarea placeholder="Write a Message..." />
                </div>
              </div>
              <div>
                <button type="submit" className="btn_submit_detail">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="table-container">
            <table cellPadding="20px">
              <tbody>
                <tr>
                  <td className="td-lg-1">Contact Us By Phone</td>
                  <td style={{ color: "orange", fontWeight: "bold" }}>
                    <BsFillTelephoneFill style={{ color: "orange" }} /> 1800 572
                    7905
                  </td>
                </tr>
                <tr>
                  <td className="td-lg-1">Number Or Email Address</td>
                  <td style={{ color: "orange", fontWeight: "bold" }}>
                    <MdOutlineEmail /> hello@testyantraglobal.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section-service-area">
        <div className="country_card">
          <div>
            <h1>Reach out to us at your nearest office.</h1>
          </div>
          <div className="country-name-container">
            <div
              className="country-box"
              onMouseEnter={() => setIsEnter1(true)}
              onMouseLeave={() => setIsEnter1(false)}
              id={isEnter1 ? "active" : "inActive"}
            >
              <div>
                <img src={UNITEDSTATE} />
              </div>
              <div>
                <h2>United States of America</h2>
              </div>
              <div>
                <p>
                  99 South Almaden Blvd, Suite 600, San Jose, California, CA
                  95113
                </p>
              </div>
              <div>
                <p>Ph: 1800 572 7905</p>
              </div>
              <div className="small-border"></div>
            </div>
            <div
              className="country-box"
              onMouseEnter={() => setIsEnter2(true)}
              onMouseLeave={() => setIsEnter2(false)}
              id={isEnter2 ? "active" : "inActive"}
            >
              <div>
                <img src={CANADA} />
              </div>
              <div>
                <h2>Canada</h2>
              </div>
              <div>
                <p>
                  120 Adelaide Street West, Suite 2500 Toronto, ON, M5H 1T1,
                  Canada
                </p>
              </div>
              <div>
                <p>Ph: 1800 572 7905</p>
              </div>
            </div>
            <div
              className="country-box"
              onMouseEnter={() => setIsEnter3(true)}
              onMouseLeave={() => setIsEnter3(false)}
              id={isEnter3 ? "active" : "inActive"}
            >
              <div>
                <img src={UNITEDLKINGDOM} />
              </div>
              <div>
                <h2>United Kingdom</h2>
              </div>
              <div>
                <p>1 Elmfield Park, Bromley - BR1 1LU, United Kingdom</p>
              </div>
              <div>
                <p>Ph: 0800 949 6909</p>
              </div>
            </div>
            <div
              className="country-box"
              onMouseEnter={() => setIsEnter4(true)}
              onMouseLeave={() => setIsEnter4(false)}
              id={isEnter4 ? "active" : "inActive"}
            >
              <div>
                <img src={IRELAND} />
              </div>
              <div>
                <h2>Ireland</h2>
              </div>
              <div>
                <p>
                  The black church, St. Mary’s place, Dublin, Ireland - D07 P4AX
                </p>
              </div>
              <div>
                <p>Ph: 1800 851 886</p>
              </div>
            </div>
            <div
              className="country-box"
              onMouseEnter={() => setIsEnter5(true)}
              onMouseLeave={() => setIsEnter5(false)}
              id={isEnter5 ? "active" : "inActive"}
            >
              <div>
                <img src={NETHERLAND} />
              </div>
              <div>
                <h2>Netherlands</h2>
              </div>
              <div>
                <p>Vliegend Hertlaan 15-97, 3526 KT Utrecht, Netherlands</p>
              </div>
              <div>
                <p>Ph: +31 308 992 386</p>
              </div>
            </div>
            <div
              className="country-box"
              onMouseEnter={() => setIsEnter6(true)}
              onMouseLeave={() => setIsEnter6(false)}
              id={isEnter6 ? "active" : "inActive"}
            >
              <div>
                <img src={INDIA} />
              </div>
              <div>
                <h2>India</h2>
              </div>
              <div>
                <p>
                  #88, 3rd Floor, Brigade Chambers, Gandhi Bazaar Main Rd,
                  Basavanagudi, Bangalore-560004 Karnataka, India
                </p>
              </div>
              <div>
                <p>Ph: 1800 203 9989</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
