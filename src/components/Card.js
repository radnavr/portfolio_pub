import React from "react";
import Button from "./Button";
import DecoLine from "./DecoLine";

const Card = ({
  githubLink,
  projectDesc,
  projectLink,
  projectName,
  techUsed,
}) => {
  return (
    <article className="card">
      <div>
        <DecoLine indented={false} />
        <div className="card-tech-info">
          {techUsed.map((tech) => (
            <span key={techUsed.indexOf(tech)} className="card-tech-typo">
              {tech}
            </span>
          ))}
        </div>
        <h3>{projectName}</h3>
        <div className="card-desc-info">
          <p>{projectDesc}</p>
        </div>
      </div>
      <div className="button-container">
        <a href={githubLink} target="_blank">
          <Button className="button--right-indent" tag="GITHUB REPO" />
        </a>
        <a href={projectLink} target="_blank">
          <Button className="button--left-indent" tag="SEE PROJECT" />
        </a>
      </div>
    </article>
  );
};

export default Card;
