import React from "react";
import CardPrice from "../cardPrice/CardPrice";
import Plan from "../plan/Plan";
import "./detailPrice.css";
import { plan } from "../../data/planData";
import { motion } from "framer-motion";

const DetailPrice = () => {
  return (
    <div className="container-detail section__padding">
      <motion.div
        className="content-detail"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="content-header">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Transformez les spectateurs en acheteurs grâce à l'intelligence
            artificielle
          </motion.p>
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
      </motion.div>

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
  );
};

export default DetailPrice;
