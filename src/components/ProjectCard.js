import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { id, title, disc, imageUrl } = props.project;
  return (
    <div className="card shadow h-100">
      <img src={imageUrl} alt={title} className="card-img-top img-fluid" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{disc}</p>
        <Link to={`/project/${id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
}
export default ProjectCard;
