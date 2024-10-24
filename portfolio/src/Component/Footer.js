import React from"react"
import "./Footer.css"
import instagram from "../Imges/instagram-logo.png";
import message from "../Imges/message.png";

const Footer=()=>{
    return(
        <>
        <div className="footer">
<div className="copyRight">
<p>&copy; 2024 Rushikesh Chavhan. All rights reserved.</p>
</div>
<div className="mobNum"> 
<h5>Call</h5>
<p>9834078335</p>
</div>
<div className="email1">
<h5>Email</h5>
<p>crushikesh075@gmail.com</p>
</div>
<div className="follow">
<h5>follow</h5>
<div className="folow_logo">
    <a href="https://www.instagram.com/yes_i_am_rushi/profilecard/?igsh=YjluamxocGRwMTFm" target="_blank">
    <img className="insatgram" src={instagram} alt="instagram"/>

    </a>
    <a href="https://www.linkedin.com/in/rushikesh-chavhan-b084461b0" target="_blank">

    <img className="linkdin_message" src={message} alt="linkden" />

    </a>
</div>
</div>
        </div>
        </>
    )
}

export default Footer