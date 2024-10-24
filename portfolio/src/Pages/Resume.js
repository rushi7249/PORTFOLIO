import React from "react"
import "./Resume.css"
import resumefile from "../Imges/resume-1.png"
const Resume = () => {
    return (
        <>
            <div className="resume">
                <div className="resume_name">
                    <h1><span className="circle_contact"></span> Resume</h1>
                </div>
                <div className="content_resume">
                    <div className="heading">
                        <h4>Experience</h4>
                        <a href={resumefile} download>
                        <button>DOWNLOAD CV</button>
                        </a>
                    </div>
                    <div className="exp_content">
                        <div className="exp_content_div1">
                            <h2> Jan 2023-Present</h2>
                            <h4>Associate Software Developer(Reactjs Developer),</h4>
                            <h5>Laminaar Avition Infotech,Mumbai</h5>
                        </div>
                        <div className="exp_content_div2">
                            <ul>
                                <li><b>Custom Frontend Components:</b>Developed and implemented custom frontend components using React.js, HTML, and Material-UI (MUI) library to enhance UI functionality and visual appeal.</li>
                                <li><b>Data Visualization:</b>Designed and built interactive pie chart and line chart components using Google Chart library and Re-Chart library to visualize data trends.</li>
                                <li><b>Custom Info Panel:</b>Developed a custom info panel feature using HTML, CSS, and React.js to display upcoming messages prominently for user interaction </li>
                                <li><b>Login Interface:</b>Designed and developed a customized login interface with features such as forgot password, OTP verification, and QR code login, implemented across all modules</li>
                                <li><b>Internal Web Application:</b>Designed and developed a comprehensive internal web application called Texting App, integrating various components to streamline internal communication and collaboration.</li>
                                <li><b>Theme Builder Project:</b>Participated in a theme builder project, enabling comprehensive customization of form components through color, text, and property adjustments.</li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="eduction_container">
                    <div className="eduction_name">
                        <h4>Education</h4>
                    </div>

                    <div className="eduction_content">
                        <div className="eduction_content_div2">
                            <h2>Mar 2022-Oct 2023</h2>
                            <h4>CDAC, Kharghar, Mumbai</h4>
                            <h5>Post Graduate Diploma in Computer Application.</h5>


                        </div>
                        <div className="eduction_content_div1">
                            <h2>2015-2019</h2>
                            <h4>Pune University</h4>
                            <h5>Bachelore Of Engineering,Pune</h5>
                        </div>

                    </div>

                </div>


                <div className="langauge_container">
                    <div className="laguage_name">
                        <h4>Languages</h4>
                    </div>

                    <div className="langauge_content">
                        <div className="language_content_div2">
                            <ul>
                                <li>English</li>
                                <li>Marathi</li>
                                <li>Hindi</li>
                            </ul>

                        </div>


                    </div>

                </div>
                </div>
        </>
    )
}

export default Resume;