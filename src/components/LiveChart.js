import React from "react";
import "../index.css";

class LiveChat extends React.Component {
  render() {
    return (
      <div className="live-chart">
        <div>
          <iframe src="https://sslcharts.forexprostools.com/index.php?force_lang=1&pair_ID=1&timescale=900&candles=25&style=line" />
          <div>
            <a target="_blank" href="https://www.investing.com">
              <img
                src="https://wmt-invdn-com.akamaized.net/forexpros_en_logo.png"
                alt="Investing.com"
                title="Investing.com"
                border={0}
              />
            </a>
            <span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#333333",
                  textDecoration: "none"
                }}
              >
                Forex Charts powered by
                <a
                  href="https://www.investing.com/"
                  rel="nofollow"
                  target="_blank"
                  style={{
                    fontSize: "11px",
                    color: "#06529D",
                    fontWeight: "bold"
                  }}
                  className="underline_link"
                >
                  Investing.com
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveChat;
