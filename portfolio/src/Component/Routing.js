import React from "react"
import { Routes, Route } from 'react-router-dom';
import  Resume from "../Pages/Resume"
import  Skill from "../Pages/Skill"
import  Contact from "../Pages/Contact"

import  About from "../Pages/About"

const Routing=()=>{
    return(
     
  
    
      <Routes>
        <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
   
        
    )
}

export default Routing;