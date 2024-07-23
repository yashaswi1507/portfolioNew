/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img2 from "../../assets/profile_img2.jpeg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Fresher Frontend Developer with over a decade of projects
              in the field. Throughout my study, I have gained the knowledge of
              web development, python and machine learning.
            </p>
            <p>
              My passion for web development is not only reflected in my
              knowledge but also in the enthusiasm and dedication I bring to
              each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React.Js</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>ML</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
