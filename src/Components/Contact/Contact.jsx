/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "63144612-5c87-4298-9878-5dbc85b2ba4a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get In Touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Lets Talk</h1>
            <p>
              I am currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>yashaswijain1507@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>(+91) 9027708159</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p> Noida, India</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter Your Email" name="email" />
            <label htmlFor="">Write Your Message Here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter Your Message"></textarea>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
