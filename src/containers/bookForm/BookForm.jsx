import React from "react";
import "./bookform.css";
import deemo from "../../assets/deemo.jpg";
import Form from "../../components/form/Form";
import { motion } from "framer-motion";

const BookForm = () => {
  return (
    <div className="book-container section__margin">
      <motion.div
        className="book-content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="book-content-right">
          <div className="top-text">
            <p>Entrer en contact </p>
            <h3>Tu as mon attention</h3>
            <p>
              Montrez-moi comment l'IA de Suggestr peut aider ma marque à
              augmenter les conversions et à améliorer l'expérience client.
            </p>
          </div>
          <Form />
        </div>
        <div className="book-content-img">
          <img src={deemo} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default BookForm;
