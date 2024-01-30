import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import projectsData from "../projectsData.json";

import Button from "../components/Button";
import Card from "../components/Card";
import DecoLine from "../components/DecoLine";

const Projects = () => {
  const { showMoreProjects, handleShowMoreLessClick } = useContext(AppContext);

  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <h2>MY WORKS</h2>
        <DecoLine indented={true} />
      </div>
      <div className="grid-container">
        <div
          className={
            showMoreProjects
              ? "section-content projects-content"
              : "section-content projects-content projects-content--limited"
          }
        >
          {projectsData.map((project) => (
            <Card
              key={projectsData.indexOf(project)}
              githubLink={project.githubLink}
              projectDesc={project.projectDesc}
              projectLink={project.projectLink}
              projectName={project.projectName}
              techUsed={project.techUsed}
            />
          ))}
        </div>
      </div>

      <Button
        className="button--top-indent"
        onClick={handleShowMoreLessClick}
        tag={showMoreProjects ? "SHOW LESS" : "SHOW MORE"}
      />
    </section>
  );
};

export default Projects;
