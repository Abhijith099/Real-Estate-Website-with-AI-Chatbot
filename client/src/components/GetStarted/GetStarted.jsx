import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe to unlock exclusive, attractive price quotes from us.
            <br />
            Discover your dream residence today!
          </span>

          {/* ✅ Fix: use only <a> and give it a button class */}
          <a
            href="mailto:random08@gmail.com"
            className="button"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
