import React from "react";
import "./research.css";
import Article from "../../components/article/Article";
import { icon1 } from "./import";

const research = () => {
  return (
    <div className="research-container section__padding">
      <div className="research-content ">
        <div className="research-left">
          <p>IA commerciale de niveau recherche</p>
          <h3>
            Des modèles d'apprentissage automatique qui comprennent vos produits
            comme les humains. Recommandations parfaites dès le premier jour.
          </h3>
        </div>
        <div className="research-right">
          <div className="research-right-content">
            <Article
              imgUrl={icon1}
              text="Plus de 16 paramètres de style pour une personnalisation granulaire"
            />
            <Article
              imgUrl={icon1}
              text="Efficace pour les nouveaux visiteurs qui viennent dans votre magasin"
            />
            <Article
              imgUrl={icon1}
              text="Prend en charge les nouveaux SKU et les nouveaux magasins sans commandes"
            />
            <Article
              imgUrl={icon1}
              text="Tableau de bord des performances avec attribution équitable des ventes de Suggestr"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default research;
