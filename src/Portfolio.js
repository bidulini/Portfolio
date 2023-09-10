import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="page-container">
      <button className="print">Print CV</button>
      <div className="name-container">
        <h1>ABIDA GANIĆ LIČINA</h1>
        <h2 className="description">Front End Developer</h2>
      </div>
      <div className="lower-content">
        <div className="work-experience">
          <h3>Work Experience</h3>
          <ul className="jobs">
            <li>
            <PortfolioItem
                title="React Native Developer"
                company="Nada.ba"
                date="(2023 - present)"
                description="Opis za React Native Developer."
              />
            </li>
            <li>
            <PortfolioItem
                title="Business English Trainer"
                company="1to1progress"
                date="(2017 - present)"
                description="Opis za Business English Trainer."
              />
            </li>
          </ul>
          <h3>Education</h3>
          <ul className="jobs">
            <li>
              <PortfolioItem
                title="Electronic University of Nis"
                company="Ph.D. in Computer Science"
                date="(2016 - present)"
                description="Amazingly challenging, interesting, and never-ending experience!"
              />
            </li>
            <li>
              <PortfolioItem
                title="State University of Novi Pazar"
                company="Master Degree in Computer Science"
                date="2014"
                description="VoIP protocols."
              />
            </li>
          </ul>
        </div>

        <div className="right-sidebar">
          <h3>Contact</h3>
          <p id="email">abidaganic@gmail.com</p>
          <p id="number">+381 62 604 401</p>
          <h3>About Me</h3>
          <p>I am amazing!</p>
          <h3>Key Technical Skills</h3>
          <p>abidaganic@gmail.com</p>
          <h3>Soft Skills</h3>
          <p>abidaganic@gmail.com</p>
          <p>+381 62 604 401</p>
          <h3>Languages</h3>
          <p>Bosnian</p>
          <p>English</p>
          <p>Turkish</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
