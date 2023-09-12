import React from "react";
import "./StartupProjects.css";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StartupProject() {
    const titleStyle = {"font-weight":"bold", "margin-right":"0.5rem"}
    return (
        // <Fade bottom duration={1000} distance="20px">
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
                                                {project.subImages && project.subImages.map(subImage => {
                                                    return <img src={subImage}/>
                                                })}
                                                {project.mobileImages && project.mobileImages.map(mobileImage => {
                                                    return <img className="mw" src={mobileImage}/>
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="project-description">
                                                <p><span style={titleStyle}>요약</span> {project.comment[0]}</p>
                                                <p><span style={titleStyle}>프로젝트 기여도</span> {project.comment[1]}</p>
                                                <p><span style={titleStyle}>Skills</span> {project.comment[2]}</p>
                                                <p><span style={titleStyle}>주요 개발 기능</span> {project.comment[3]}</p>
                                                {project.link && <p><span style={titleStyle}>링크</span><ul>{project.link.map(item => <li><a href={item.linkUrl}>{item.text}</a></li>)}</ul></p>}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        // </Fade>
    );
}
