import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made  <span role="img">❤️</span> by {greeting.full_name}
        </p>
      </Fade>
    </div>
  );
}
