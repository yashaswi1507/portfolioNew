/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import hero_pic from "../../assets/hero_pic.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <h1>
        <img src={hero_pic} alt="" />
        <span>I am Yashaswi Jain,</span> fullStack Web Developer based in India.
      </h1>
      <p>
        I am a fullStack web developer from India, with B.tech degree in
        Artificial Intelligence And Machine Learning.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
