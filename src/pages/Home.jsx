import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../containers/header/Header";
import Cta from "../containers/cta/Cta";
import Value from "../containers/value/Value";
import Research from "../containers/research/Research";
import Getting from "../containers/getting/Getting";
import FAQ from "../containers/faq/FAQ";
import Tariffication from "../containers/tariffication/Tariffication";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cta />
      <Value />
      <Research />
      <Getting />
      <FAQ />
      <Tariffication />
      <Footer />
    </div>
  );
};

export default Home;
