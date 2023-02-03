import React from "react";
import DetailPrice from "../components/detailPrice/DetailPrice";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import FAQ from "../containers/faq/FAQ";

const Pricing = () => {
  return (
    <div className="container-pricing">
      <Navbar />
      <DetailPrice />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Pricing;
