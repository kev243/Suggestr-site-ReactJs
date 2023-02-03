import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/bookdemo");
  }

  return (
    <div className="header ">
      <motion.div
        className="header-content "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="header-content-text">
          <div className="container">
            <div className="header-content-img "></div>
          </div>

          <div className="header-title">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Gagnez plus d'argent avec de meilleures recommandations de
              produits{" "}
            </motion.h1>
          </div>

          <div className="header-subtitle">
            <h3>
              Augmentez vos revenus de plus de 11 % sans travail supplémentaire.
              Découvrez ce que Suggestr peut faire pour votre boutique.
            </h3>
          </div>

          <div className="header-btn">
            <button onClick={handleClick}>Réserver une démo</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
