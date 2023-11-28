import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <main className="mx-32">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
