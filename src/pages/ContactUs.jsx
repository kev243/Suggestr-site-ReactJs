import React from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./pageCss/contact.css";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
