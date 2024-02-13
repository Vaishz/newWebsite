import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="flogo">
          <img src="/Images/p1.png" className="flogo" />
        </div>
        <div id="box1">
          <ul>
            <div className="fhead">Home</div>
            <li>What</li>
            <li>Who</li>
            <li>Why</li>
          </ul>
        </div>
        <div id="box2">
          <ul>
            <div className="fhead">Services</div>
            <li>Shop</li>
            <li>Case Study</li>
            <li>Blog</li>
          </ul>
        </div>
        <div id="box3">
          <ul>
            <div className="fhead">About Us</div>
            <li>Company</li>
            <li>Falana</li>
            <li>Dhimkana</li>
          </ul>
        </div>
      </div>
      <div className="ficons">
        <a href="https://github.com/"><FontAwesomeIcon icon={faLocationCrosshairs}/></a>
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faLocationCrosshairs} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div id="copy">
        <p>© Copyright since 1967</p>
      </div>
    </>
  );
};

export default Footer;
