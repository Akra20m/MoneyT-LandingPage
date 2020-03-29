import React from "react";

import "../index.css";

class NavBar extends React.Component {
  state = { show: "" };
  onClick = () => {
    this.setState({ show: this.state.show === "show" ? "" : "show" });
  };
  render() {
    let list = `nav-list ${this.state.show}`;

    return (
      <nav>
        <div>
          <a href="/" className="logo">
            MONEY<span>T</span>
          </a>
        </div>
        <ul className={list}>
          <li className="nav-item">
            <a href="#">Money transfer</a>
          </li>
          <li className="nav-item">
            <a>Track transfer</a>
          </li>
          <li className="nav-item">
            <a>Help</a>
          </li>
          <li className="nav-item">
            <a>Get the app</a>
          </li>
          <li className="nav-item">
            <a>Register</a>
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
