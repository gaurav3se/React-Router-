import React from 'react'
import { SiReact } from "react-icons/si";
import { Link } from 'react-router-dom';
import { NavLink,useNavigate } from 'react-router-dom';
const Navbar = () => {
const navigate = useNavigate();
  return (
    <div className='navbar'>
       <SiReact size={30} color="skyblue" />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
        </ul>
        <button onClick={()=> navigate ('/about', {replace:true})}
          >Get Started</button>
    </div>
  )
}

export default Navbar;
