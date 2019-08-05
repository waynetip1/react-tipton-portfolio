import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/default.jpg";
import PropTypes from "prop-types";
export default function Project({ project }) {
  const { name, slug, images, banner } = project;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="project image" />
        <div className="price-top">
          <h6>{banner}</h6>
          <p>Built!</p>
        </div>
        <Link to={`/projects/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    banner: PropTypes.string.isRequired
  })
};
