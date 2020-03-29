import React from "react";
import "../index.css";

import img1 from "../images/undraw_account_490v.png";
import img2 from "../images/undraw_online_banking_7jy4.png";
import img3 from "../images/undraw_online_payments_luau.png";

const HowSend = () => {
  return (
    <section className="how-section">
      <div className="container">
        <h2>How to send</h2>
        <div className="how-container">
          <div className="how-col">
            <h3>Register for free</h3>
            <p>
              All you need is your email address. Sign up online or use the app
            </p>
            <img src={img1} alt="register for free" />
          </div>
          <div className="how-col">
            <h3>Fill transfer request</h3>
            <p>
              Add how much you want to send and the details of recipient bank
              account
            </p>
            <img src={img2} alt="fill transfer request" />
          </div>
          <div className="how-col">
            <h3>Pay for transfer</h3>
            <p>
              Use Direct debit, wire transfer, or debit/credit card to pay for
              the transaction.
            </p>
            <img src={img3} alt="pay for transfer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSend;
