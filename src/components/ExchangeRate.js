import React from "react";
import Axios from "axios";
import USD from "../images/us.svg";
import CAD from "../images/ca.svg";
import EUR from "../images/eu.svg";
import CNY from "../images/cn.svg";
import GBP from "../images/gb.svg";
import JPY from "../images/jp.svg";
import INR from "../images/in.svg";

import "../index.css";

class ExchangeRate extends React.Component {
  state = { rates: false };
  componentDidMount() {
    let URL = "https://api.exchangeratesapi.io/latest?base=USD";
    Axios.get(URL)
      .then(response => {
        console.log(response.data);
        this.setState({ rates: response.data.rates });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Live Exchange Rates</h2>
        <div className="exchange-table">
          <div className="currency-col">
            <img className="currency-img" src={USD} alt="flag of usa" />
            <h4 className="currency-name">USD</h4>
            <p className="currency-value">{this.state.rates.USD || ""}</p>
          </div>
          <div className="currency-col">
            <img className="currency-img" src={EUR} alt="flag of europe" />
            <h4 className="currency-name">EUR</h4>
            <p className="currency-value">
              {this.state.rates ? this.state.rates.EUR.toFixed(3) : ""}
            </p>
          </div>
          <div className="currency-col">
            <img className="currency-img" src={CAD} alt="flag of canada" />
            <h4 className="currency-name">CAD</h4>
            <p className="currency-value">
              {this.state.rates ? this.state.rates.CAD.toFixed(3) : ""}
            </p>
          </div>
          <div className="currency-col">
            <img className="currency-img" src={CNY} alt="flag of china" />
            <h4 className="currency-name">CNY</h4>
            <p className="currency-value">
              {this.state.rates ? this.state.rates.CNY.toFixed(3) : ""}
            </p>
          </div>
          <div className="currency-col">
            <img className="currency-img" src={GBP} alt="flag of britain" />
            <h4 className="currency-name">GBP</h4>
            <p className="currency-value">
              {this.state.rates ? this.state.rates.GBP.toFixed(3) : ""}
            </p>
          </div>
          <div className="currency-col">
            <img className="currency-img" src={JPY} alt="flag of japan" />
            <h4 className="currency-name">JPY</h4>
            <p className="currency-value">
              {this.state.rates ? this.state.rates.JPY.toFixed(1) : ""}
            </p>
          </div>
          <div className="currency-col">
            <img className="currency-img" src={INR} alt="flag of india" />
            <h4 className="currency-name">INR</h4>
            <p className="currency-value">
              {this.state.rates ? this.state.rates.INR.toFixed(2) : ""}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ExchangeRate;
