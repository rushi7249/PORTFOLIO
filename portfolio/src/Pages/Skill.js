import React from "react";
import "./Skill.css";
import css from "../Imges/css-3.png";
import html from "../Imges/html.png";
import js from "../Imges/js.png";
import react from "../Imges/atom.png";
import ex from "../Imges/Express.png";
import monoDb from "../Imges/databases.png";
import node from "../Imges/nodejs.png";
import css_html from "../Imges/css_html.PNG"
import js_project from "../Imges/js_project.PNG"

import js_react from "../Imges/js_react.PNG"







const Skill = () => {
    return (
        <>
            <div className="skill">
                <h3>SKILLS</h3>
                <div className="skill_container">
                    <div className="skill_card">
                        <div className="skill_card-inner">
                            <div className="skill_card-front">
                                <div className="css">
                                    <img src={css} />
                                    <h6>CSS</h6>
                                </div>
                                <div className="html">
                                    <img src={html} />
                                    <h6>HTML</h6>
                                </div>

                            </div>
                            <div onClick={() => {
  window.open("https://66ec3971558e39cf1a2926eb--helpful-kelpie-b9d56e.netlify.app/" , "_blank");
}} className="skill_card-back">
                                <img src={css_html} />
                            </div>
                        </div>
                    </div>
                    <div className="skill_card">
                        <div className="skill_card-inner">
                            <div className="skill_card-front">
                                <div className="css">
                                    <img src={css} />
                                    <h6>CSS</h6>
                                </div>
                                <div className="html">
                                    <img src={html} />
                                    <h6>HTML</h6>
                                </div>
                                <div className="js">
                                    <img src={js} />
                                    <h6>JavaScript</h6>
                                </div>
                            </div>
                            <div onClick={() => {
  window.open("https://66f8e42a140decc4349bd077--legendary-zabaione-0962bf.netlify.app/", "_blank");
}} className="skill_card-back">
                                <img src={js_project} />
                            </div>
                        </div>
                    </div>
                    <div className="skill_card">
                        <div className="skill_card-inner">
                            <div className="skill_card-front">
                                <div className="css">
                                    <img src={css} />
                                    <h6>CSS</h6>
                                </div>
                                <div className="html">
                                    <img src={html} />
                                    <h6>HTML</h6>
                                </div>
                                <div className="react">
                                    <img src={react} />
                                    <h6>React</h6>
                                </div></div>
                               
                                <div onClick={() => {
  window.open("https://statuesque-tarsier-18f545.netlify.app/", "_blank");
}} className="skill_card-back">
                                <img src={js_react} />
                            </div>
                        </div>
                    </div>

                    <div className="skill_card">
                        <div className="skill_card-inner">
                            <div className="skill_card-front">
                                <div className="node">
                                    <img src={node} />
                                    <h6>Node-Js</h6>
                                </div>
                                <div className="ex">
                                    <img src={ex} />
                                    <h6>Express</h6>
                                </div>
                                <div className="mongo">
                                    <img src={monoDb} />
                                    <h6>MongoDB</h6>
                                </div>
                            </div>
                            <div  className="skill_card-back">Coming Soon</div>
                        </div>
                    </div>
                </div>
                <div className="certification">
                    <div className="card">
                        <h2>Certification</h2>
                        <ul>
                            <li>PreCAT - Preparatory Course For Entrance Exam by SunBeam</li>
                            <li>Core Java by SunBeam</li>
                            <li>Azure Devops Traning by Laminaar aviation infotech</li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Skill;
