import React from "react";
import CardPrice from "../cardPrice/CardPrice";
import Plan from "../plan/Plan";
import "./detailPrice.css";
import { plan } from "../../data/planData";
import FAQ from "../../containers/faq/FAQ";
import Footer from "../../components/footer/Footer";

const DetailPrice = () => {
  return (
    <div className="big-detail">
      <div className="container-detail section__padding">
        <div className="content-detail ">
          <div className="content-header">
            <p>
              Transformez les spectateurs en acheteurs grâce à l'intelligence
              artificielle
            </p>
          </div>

          <div className="container-price section__margin">
            <div className="content-price">
              <CardPrice
                text_title="Augmenter "
                price="199 $"
                devise="USD"
                text=" pour les marques dont les revenus mensuels se situent entre 100 000 et
        200 000 USD (sur la base des 30 derniers jours)"
                text_btn="Essayer gratuitement"
              />
              <CardPrice
                text_title="CPD"
                price="499 $"
                devise="USD"
                text="pour les marques dont les revenus mensuels se situent entre 200 000 USD et 1 million USD (sur la base des 30 derniers jours)"
                text_btn="Essayer gratuitement"
              />
            </div>

            <div className="price-down">
              <div className="price-down_title">
                <p>
                  30 jours d'essai gratuit. Pas de carte de crédit nécessaire.
                  Paiements via Shopify.
                </p>
              </div>
              <CardPrice
                text_title="Entreprise"
                price="Personnalisé"
                devise=""
                text="pour les marques dont le chiffre d'affaires mensuel dépasse 1 million USD (sur la base des 30 derniers jours)"
                text_btn="Réserver une démo"
              />
            </div>
          </div>
        </div>

        <div className="container-plan">
          <div className="content-plan">
            <p>Tous les plans de compte incluent</p>
          </div>
          <div className="ligne"></div>
          <div className="plan-card">
            {plan.map((plan) => {
              return <Plan plan={plan} />;
            })}
          </div>
        </div>
      </div>

      <FAQ />
      <Footer />
    </div>
  );
};

export default DetailPrice;
