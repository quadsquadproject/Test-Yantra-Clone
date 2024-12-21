import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PartnersOverview from "./Components/Partners/PartnersOverview";
import Article from "./Components/Articles/Article";
import Footer from "./Footer";
import Contacts from "./Components/Contacts/Contacts";
import SoftwareTesting from "./Components/Services/SoftwareTesting";
import SoftwareDevelopment from "./Components/Services/SoftwareDevelopment";
import SkillEnhancement from "./Components/Services/SkillEnhancement";
import Consultant from "./Components/Services/Consultant";
import CrowdTesting from "./Components/Services/CrowdTesting";

const App = () => {
  return (
    <div className="app_container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/service/softwaretesting"
            element={<SoftwareTesting />}
          />
          <Route
            path="/service/softwaredevelopment"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="/service/skillenhancement"
            element={<SkillEnhancement />}
          />
          <Route path="/service/testing" element={<CrowdTesting />} />
          <Route path="/service/consultant" element={<Consultant />} />
          <Route path="/partners" element={<PartnersOverview />} />
          <Route path="/articles" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
