import React from "react";
import "../index.css";
import Mobile from "../images/mobile.jpg";
import Google from "../images/google-play-badge.svg";
import Apple from "../images/download-on-the-app-store-apple.svg";

const MobileApp = () => {
  return (
    <section className="app-section">
      <div className="container">
        <h2 className="section-header"> Use our MoneyT app</h2>
        <div className="mobile-container">
          <div className="mobile-col1">
            <p className="section-p">
              With our app, you can send money domestically and internationally
              right from your smart phone. Download the app and get started
            </p>
            <button className="button-header">Learn More</button>
            <div>
              <img
                className="store-img"
                src={Google}
                alt="get it from google play"
              />
              <img
                className="store-img"
                src={Apple}
                alt="get it from apple store"
              />
            </div>
          </div>
          <div className="mobile-col2">
            <img
              className="mobile-img"
              src={Mobile}
              alt="phone with turned on screen"
            />
            {/* Photo by Lisa Fotios from Pexels */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
