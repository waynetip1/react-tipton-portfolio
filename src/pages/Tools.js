import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <Hero hero="toolsHero">
      <Banner title="tools">
        <Link to="/" className="btn-primary">
          return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Tools;
