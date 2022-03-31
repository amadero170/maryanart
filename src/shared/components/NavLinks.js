import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css'

export default function NavLinks() {
  return <ul className='navLinks'>
  <li><NavLink to='/about'>ABOUT</NavLink></li>
  <li><NavLink to='/projects'>PROJECTS</NavLink></li>
  <li><NavLink to='/artwork'>ARTWORK</NavLink></li>
  <li><NavLink to='/contact'>CONTACT</NavLink></li>
</ul>;
}
