import React from "react";
import Header from "../Component/Header";
import Services from "../Component/Service";
import About from "../Component/About";
import PortfolioSection from "../Component/PortfolioSection";
import ContactUs from "../Component/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <PortfolioSection />
      <ContactUs />
    </>
  );
};

export default Home;
