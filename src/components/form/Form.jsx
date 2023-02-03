import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="text-form">
      <form>
        <div className="input-name">
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Nom de famille" />
        </div>
        <div className="input-email-number">
          <input type="email" placeholder="Email de travail" />
          <input type="text" placeholder="Numero de téléphone" />
        </div>
        <input type="text" placeholder="URL site web" />
        <input type="text" placeholder="GMV mensuel" />
        <input type="text" placeholder="Autre commentaire:(facultatif)" />

        <input type="submit" value="Entrer en contact" />
      </form>
    </div>
  );
};

export default Form;
