import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import profile_img from "../Imges/profile.png"

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav_name">
      <img  src={profile_img} alt="profile_img"/>
        <h1>Rushikesh Chavhan</h1>
        <h5>Software Developer</h5>
      </div>
      <div className="nav_list">
        <ul>
          <li>
            <NavLink  to="/about" className={({ isActive }) => (isActive ? 'active-link navlink' : 'navlink')}>
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
      </div>
    </div>
  );
};

export default NavBar;
