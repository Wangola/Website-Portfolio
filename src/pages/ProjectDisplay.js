import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { BsGithub as GithubIcon } from "react-icons/bs";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      {/* If gif does not exist just put image */}
      {project.gif === "" ? (
        <img alt="" src={project.image}></img>
      ) : (
        <img alt="" src={project.gif}></img>
      )}
      <span>
        <b>Skills: </b> {project.skills}
      </span>

      <div className="descript-block">
        <p>
          {" "}
          <b>Description: </b> {project.description}
        </p>
        <a href={project.github} target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
