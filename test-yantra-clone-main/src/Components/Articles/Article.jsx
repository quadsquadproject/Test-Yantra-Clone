import React from "react";
import "./Article.css";

const Article = () => {
  const info = [{
    title:
      "Comprehensive Guide to Developing Test Scripts for Software Testing",
    image:
      "https://www.testyantraglobal.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FcomprehensiveBg.bf047d34.jpg&w=1080&q=100",
    description:
      "Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical component of this process...",
    name: "Daren Khatib",
    date: "July 16, 2024"
  

    },

  ];

  return (
    <div className="article-container">
      <section className="background-img">
        <div className="article-banner">
          <div className="article-details-content">
            <div className="text-span">
              <span>Article</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </div>
  );
};

export default Article;
