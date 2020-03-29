import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "../index.css";
const options = ["USD", "EUR", "CAD", "CNY", "GBP", "JPY", "INR"];

class TransferCalc extends React.Component {
  state = {
    value1: "",
    value2: "",
    fee: null,
    rates: false,
    send: "USD",
    receive: "EUR"
  };

  componentDidUpdate = prevProps => {
    if (this.props.rates !== prevProps.rates) {
      console.log(this.props.rates);
      this.setState({ rates: this.props.rates });
    }
  };

  handleChange1 = e => {
    let num = parseFloat(e.target.value);
    let fee = num * 0.05;
    let rateSend = this.state.rates[this.state.send];
    let ratereceive = this.state.rates[this.state.receive];
    let received = num - fee;
    let result = received * (ratereceive / rateSend);
    this.setState({
      value1: num,
      value2: result.toFixed(2),
      fee: isNaN(fee) ? " " : fee.toFixed(2)
    });
  };

  handleChange2 = e => {
    let num = parseFloat(e.target.value);
    let rateSend = this.state.rates[this.state.send];
    let ratereceive = this.state.rates[this.state.receive];
    let received = (num * (rateSend / ratereceive)) / 0.95;
    let fee = received * 0.05;
    this.setState({
      value1: received.toFixed(2),
      value2: num,
      fee: isNaN(fee) ? " " : fee.toFixed(2)
    });
  };

  onSelectSend = e => {
    console.log(e);
    this.setState({ send: `${e.value}`, value1: "", value2: "" });
  };

  onSelectReceive = e => {
    console.log(e);
    this.setState({ receive: `${e.value}`, value1: "", value2: "" });
  };

  render() {
    console.log(this.state.receive);
    return (
      <div className="mon-trans-col">
        {/* <h3 className="transfer-title">Money Transfer</h3> */}
        <div className="transfer-col">
          <p>You Send:</p>
          <div className="input-send">
            <input
              type="number"
              value={this.state.value1}
              onChange={this.handleChange1}
              className="input-amount"
            />
            <span className="currency-opt">
              <Dropdown
                options={options}
                onChange={this.onSelectSend}
                value={this.state.send}
              />
            </span>
          </div>
        </div>
        <div className="transfer-col">
          <p>
            <small>Total fees </small>
            <span className="fee">{this.state.fee}</span>
          </p>
        </div>
        <div className="transfer-col">
          <p>They receive:</p>
          <div className="input-send">
            <input
              type="number"
              value={this.state.value2}
              onChange={this.handleChange2}
              className="input-amount"
            />
            <span className="currency-opt">
              <Dropdown
                options={options}
                onChange={this.onSelectReceive}
                value={this.state.receive}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TransferCalc;
