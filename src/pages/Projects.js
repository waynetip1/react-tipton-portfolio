import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <Hero hero="projectsHero">
      <Banner title="projects">
        <Link to="/" className="btn-primary">
          return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Projects;
