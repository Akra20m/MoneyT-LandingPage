import React from "react";
import NavBar from "./NavBar";
import ExchangeRate from "./ExchangeRate";

import "../index.css";
import transfer from "../images/transfer_money.svg";

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className="header-container">
        <div className="header-column">
          <h2>Cheaper way to send money</h2>
          <p>
            Over million people uses our service and get competitive exhange
            rate
          </p>
          <div>
            <button className="button-header">Get started</button>
            <button className="button-header">Learn More</button>
          </div>
        </div>
        <div className="header-column1">
          <img
            className="img-money"
            src={transfer}
            alt="triangle with all three sides equal"
          />
        </div>
        <div className="header-column2">
          <ExchangeRate />
        </div>
      </div>
    </header>
  );
};

export default Header;
