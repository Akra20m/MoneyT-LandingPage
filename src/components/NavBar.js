import React from "react";

import "../index.css";

class NavBar extends React.Component {
  state = { show: "" };
  onClick = () => {
    this.setState({ show: this.state.show === "show" ? "" : "show" });
  };
  render() {
    return (
      <nav>
        <div>
          <a href="/" className="logo">
            MONEY<span>T</span>
          </a>
        </div>
        <ul className={this.state.show}>
          <li>
            <a>ONE</a>
          </li>
          <li>
            <a>TWO</a>
          </li>
          <li>
            <a>THREE</a>
          </li>
          <li>
            <a>Get the app</a>
          </li>
          <li>
            <a>register</a>
          </li>
        </ul>
        <div className="nav-icon" onClick={this.onClick}>
          <div className="first-line"></div>
          <div className="second-line"></div>
          <div className="third-line"></div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
