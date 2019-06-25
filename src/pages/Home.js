import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Wayne Tipton" subtitle="front end web developer">
          <Link to="/resume" className="btn-primary">
            resume
          </Link>
        </Banner>
      </Hero>
      <Skills />
    </>
  );
};

export default Home;
