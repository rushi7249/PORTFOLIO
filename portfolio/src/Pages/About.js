import React from "react"
import "./About.css"
import profile from "../Imges/profile_photo.jpg"
import instagram from "../Imges/instagram-logo.png";
import message from "../Imges/message.png";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate=useNavigate();
    const handleResume=()=>{
        navigate("/resume")
    }
    const handleskill=()=>{
        navigate("/skills")
    }
    return (
        <>
            <div className="about">
                <div className="about_container">
                    <div className="container_1">
                        <div className="profile_container">
                            <img src={profile} alt="profile" />
                        </div>
                        <div className="container_name">
                            <h2>Rushikesh Chavhan</h2>
                        </div>
                        <p className="border"></p>
                        <div className="container_profession">
                            <p>SOFTWARE DEVELOPER</p>
                        </div>
                        <div className="follws_container">
                            <a href="https://www.instagram.com/yes_i_am_rushi/profilecard/?igsh=YjluamxocGRwMTFm" target="_blank">
                                <img src={instagram} alt="instagram" />

                            </a>
                            <a href="https://www.linkedin.com/in/rushikesh-chavhan-b084461b0" target="_blank">

                                <img src={message} alt="linkden" />

                            </a>
                        </div>
                    </div>

                    <div className="container_2">
                        <div className="container2_intro">
                            <h1>Hello,</h1>
                            <h5>Here's who I am and what I do!!!</h5>
                        </div>
                        <div className="container2_btn">
                            <button onClick={handleResume} className="resume_btn">Resume</button>
                            <button onClick={handleskill} className="skill_btn">Sikll/Certification</button>
                        </div>
                        <div className="summary">
                            <p><b>React.js Developer: </b>Experienced with React.js, Redux, and related tools.
                            <p><b>Advanced React Concepts:</b> Knowledge of hooks, context API, and HOCs (Higher-Order Components).</p>
                           <b>Frontend Skills:</b>  Strong in JavaScript, CSS, and HTML.
                            UI Architecture: Skilled in building frontend structures to support user interfaces.
Reusable Components: Expertise in creating reusable components.</p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default About;