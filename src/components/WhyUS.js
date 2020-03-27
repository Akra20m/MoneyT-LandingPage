import React from "react";
import "../index.css";
import World from "../images/iconfinder_world8_216560.png";
import Clock from "../images/iconfinder_clock_226587.png";
import Phone from "../images/iconfinder_ic_phone_android_48px_352066.png";

const WhyUs = () => {
  return (
    <section className="whyus-section">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="whyus-container">
          <div className="whyus-col">
            <h3>Worldwide reach</h3>
            <img className="currency-img" src={World} alt="world map icon" />
          </div>
          <div className="whyus-col">
            <h3>Send Money Fast</h3>
            <img className="currency-img" src={Clock} alt="clock icon" />
          </div>
          <div className="whyus-col">
            <h3>Convenience</h3>
            <img className="currency-img" src={Phone} alt="phone icon" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
