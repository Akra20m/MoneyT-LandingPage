import React from "react";
import "../index.css";
import Mobile from "../images/mobile.jpg";

const MobileApp = () => {
  return (
    <section className="app-section">
      <div className="container">
        <h3> Use our app</h3>
        <div>
          <div>
            <p>paragraph about the service with buttons ios andriod</p>
          </div>
          <div>
            <img className="currency-img" src={Mobile} alt="mobile picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
