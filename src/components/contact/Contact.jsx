import React from "react";
import "./contact.css";
import contact from "../../assets/contact.png";
import pays from "../../assets/pays.png";
import recherche from "../../assets/recherche.png";
import load from "../../assets/load.png";

const Contact = () => {
  return (
    <div className="container-contact section__padding">
      <div className="content-contact-off">
        <div className="content-img">
          <img src={contact} alt="" />
        </div>
        <div className="contact-text">
          <p>Entrer en contact</p>
          <h3>Faisons quelque chose de grand ensemble</h3>
        </div>
      </div>
      <div className="contact-top">
        <div className="content-left-contact">
          <img src={contact} alt="" />
          <div className="content-contact-text">
            <p>Entrer en contact</p>
            <h3>Faisons quelque chose de grand ensemble</h3>
          </div>
        </div>
        <div className="content-right-contact">
          <img src={pays} alt="" />
          <div className="card-contact-text">
            <h4>Singapour</h4>
            <div className="ligne-card"></div>
            <h6>Siège social</h6>
            <p>6 Raffles Quay, Singapour, 0488580</p>
          </div>
        </div>
      </div>

      <div className="contact-down">
        <div className="container-contact-left">
          <div className="text">
            <p>Discuter</p>
            <p>+65 8029 5778</p>
            <p>info@suggestr.co</p>
          </div>

          <div className="small-card">
            <img src={recherche} alt="" />
          </div>
        </div>
        <div className="container-contact-right">
          <div className="text">
            <p>Essayer</p>
            <p>Vous voulez voir ce qu'est Suggestr ? </p>
            <p>Réserrvez une démo avec nous</p>
          </div>

          <div className="small-card">
            <img src={load} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
