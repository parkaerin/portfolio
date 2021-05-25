import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map(project => {
              return (
                <div className="saaya-health-div">
                  <div className="project-title">{project.title}</div>
                  <div className="project-period">{project.period}</div>
                  <div className="project-image">
                    <div className="main-image">
                      <img src={project.image}/>
                      {project.subImages.map(subImage => {return <img src={subImage}/> })}
                    </div>
                  </div>
                  <div>
                    <ul0 className="project-description">
                      {project.comment.map(comment => {return <li>{comment}</li>})}
                    </ul0>
                  </div>
                </div>
              );
            })}
          </div>
          {/*<div className="starup-project-image"></div>*/}
        </div>
      </div>
    </div>
    </Fade>
  );
}
