import React from "react";
import "./footer.css";
import instagram from "../../assets/instagram.png";
import twitterColor from "../../assets/twitterColor.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-footer section__padding">
      <div className="big-footer section__padding">
        <div className="footer-content ">
          <div className="footer-start">
            <img src={logo} alt="logo" />
            <p>
              Amazon-quality product recommendations for your brand. Increased
              conversions and higher AOV. Easy 3-min setup.
            </p>
          </div>
          <div className="footer-center">
            <Link to="/pricing">Prix</Link>
            <Link to="/contact">Nous Contacter</Link>
            <Link to="/bookdemo">Réserver une demo</Link>
          </div>

          <div className="footer-end">
            <Link to="#">Shopify App FAQ</Link>
            <Link to="#">Terms of Use</Link>
            <Link to="#">Privacy Policy</Link>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-start">
            <p>Copyright © 2022 Suggestr Pte. Ltd.</p>
          </div>
          <div className="footer-bottom-end">
            <img src={instagram} alt="instagram" />
            <img src={twitterColor} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
