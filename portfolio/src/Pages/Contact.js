import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com"; 

const Contact = () => {
    // State for each field
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const [required ,setRequired]=useState(false)

    // Handle change for all fields
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure the name and value from the event target
        
        // Set the state based on the name of the input field
        switch (name) {
            case "fname":
                setFname(value);
                break;
            case "lname":
                setLname(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "subject":
                setSubject(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    };

const hnadleSubmit=(e)=>{
    e.preventDefault();

    // setRequired(!required)
    const templateParams = {
        from_name: `${fname} ${lname}`, // Combine first and last name
        from_email: email,
        subject: subject,
        message: message,
     
    };
    emailjs.send("service_2gs5dzy", "template_pllw7kk", templateParams, "TuIrqm-Lclj8aO-3e")
    .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset the form fields after successful submission
        setFname("");
        setLname("");
        setEmail("");
        setSubject("");
        setMessage("");
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
 setTimeout(()=>{
    setIsSubmitted(false);
 },2000)
 setIsSubmitted(true);

}
    return (
        <>
            <div className="contact">
                <div className="contact_name">
                    <h1><span className="circle_contact"></span> Let's talk</h1>
                </div>
                <form className="contact_form" onSubmit={hnadleSubmit}>
               
                    <div className="name">
                        <div className="first_name">
                            <label>First Name:</label>
                            <input 
                                type="text" 
                                name="fname"         // Add name attribute
                                value={fname} 
                                onChange={handleChange} 
                               required
                            />
                        </div>
                        <div className="last_name">
                            <label>Last Name:</label>
                            <input 
                                type="text" 
                                name="lname"         // Add name attribute
                                value={lname} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                    </div>
                    <div className="email">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email"         // Add name attribute
                            value={email} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="subject">
                        <label>Subject:</label>
                        <input 
                            type="text" 
                            name="subject"       // Add name attribute
                            value={subject} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="message">
                        <label>Message:</label>
                        <textarea 
                            name="message"        // Add name attribute
                            value={message} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
               
                </form>

                {isSubmitted && ( // Conditionally rendering the success message
        <p className="success-message">Successfully Submitted!</p>
      )}
                
            </div>
        </>
    );
}

export default Contact;
