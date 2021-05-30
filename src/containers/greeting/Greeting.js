﻿import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Greeting() {
    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1 className="greeting-text">
                                {" "}
                                {greeting.title}
                            </h1>
                            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
                            <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact"/>
                            </div>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <img alt="programmer-image" src={require("../../assets/images/20945431.svg")}></img>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
