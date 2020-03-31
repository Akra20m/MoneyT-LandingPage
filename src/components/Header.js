import React from "react";
import Axios from "axios";
import NavBar from "./NavBar";

import TransferCalc from "./TransferCalc";
import ExchangeRate from "./ExchangeRate";
import "../index.css";
import transfer from "../images/transfer_money.svg";

class Header extends React.Component {
  state = { rates: false, date: "" };

  componentDidMount() {
    let URL = "https://api.exchangeratesapi.io/latest?base=USD";
    Axios.get(URL)
      .then(response => {
        this.setState({ rates: response.data.rates, date: response.data.date });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <header>
        <NavBar />
        <div className="header-container">
          <div className="header-column">
            <h2 className="section-header">A Cheaper way to send money</h2>
            <p className="section-p">
              Over 2 million people use our service and get competitive exhange
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
              alt="It shows people transferring money"
            />
          </div>
          <div className="header-column2">
            <TransferCalc rates={this.state.rates} />
            <ExchangeRate rates={this.state.rates} date={this.state.date} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
