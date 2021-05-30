import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";
import emoji from "react-easy-emoji";

export default function SoftwareSkill() {
    return (
        <div>
            <div className="software-skills-main-div">
                <b>Main</b>
                <ul className="dev-icons">
                    {skillsSection.softwareMainSkills.map(skills => {
                        return (
                            <li className="software-skill-inline" name={skills.skillName}>
                                <p>
                                    {emoji("🔸" + skills.skillName)}
                                </p>
                            </li>
                        );
                    })}
                </ul>
                <b>Experienced</b>
                <ul className="dev-icons">
                    {skillsSection.softwareExperiencedSkills.map(skills => {
                        return (
                            <li className="software-skill-inline" name={skills.skillName}>
                                <p>{emoji("🔹" + skills.skillName)}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
