import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import profile_img from "../Imges/profile.png"
import menu from "../Imges/menu.png"
import close from "../Imges/close.png"

const NavBar = () => {
const [isMenuOpen,setIsMenuOpen]=React.useState(false)
  const handledhamburg=()=>{

setIsMenuOpen((prev)=>!prev)
  }
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); 
  };
  return (
      <div className="NavBar" >
          <div className="nav_name">
              <img src={profile_img} alt="profile_img" />
              <h1>Rushikesh Chavhan</h1>
              <h5>Software Developer</h5>
          </div>
          <div className="nav_list">
            {
            
              !isMenuOpen?  <img onClick={handledhamburg} className="hamburg" src={menu} alt="Menu" />:null
            }
             <ul className="nav_list_ul">
                  <li>
                      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          ABOUT ME
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          RESUME
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          SKILL/CERTIFICATION
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          CONTACT
                      </NavLink>
                  </li>
              </ul>
              {isMenuOpen?<div className="hamb_menu">
                <div className="close_icon">
                  <img onClick={handledhamburg} src={close} />
                </div>
              <ul className="hamb_menu_ul">
              <li>
                      <NavLink to="/about" onClick={handleMenuItemClick} className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          ABOUT ME
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/resume" onClick={handleMenuItemClick} className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          RESUME
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/skills" onClick={handleMenuItemClick} className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          SKILL/CERTIFICATION
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/contact" onClick={handleMenuItemClick} className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
                          CONTACT
                      </NavLink>
                  </li>



              </ul>
               </div>:null}
           
            
          </div>
      </div>
  );
};


export default NavBar;
