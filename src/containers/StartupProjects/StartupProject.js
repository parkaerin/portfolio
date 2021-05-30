import React from "react";
import "./StartupProjects.css";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StartupProject() {
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
                                                {project.subImages.map(subImage => {
                                                    return <img src={subImage}/>
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="project-description">
                                                <p><b>Goals</b> {project.comment[0]}</p>
                                                <p><b>Responsibility</b> {project.comment[1]}</p>
                                                <p><b>Skills</b> {project.comment[2]}</p>
                                                <p><b>주요 개발 기능</b> {project.comment[3]}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
