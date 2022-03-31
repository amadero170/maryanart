import React from 'react'
import logo from '../../imagenes/logo.png'
import NavLinks from './NavLinks'
import './Header.css'
import { useState } from 'react'
import SideDrawer from './SideDrawer'
import { Link } from 'react-router-dom'

export default function Header() {

const [drawerIsOpen,setDrawerIsOpen]= useState(false)
const openDrawer=()=>{setDrawerIsOpen(true)}
const closeDrawer=()=>{setDrawerIsOpen(false)}
    return (
        <div className='header'>
            <Link to='/'>
                <div className='logoContainer'>
                    <img className='logo' src={logo} alt='logo'/>
                </div>
            </Link>
            <button className='hamburger-btn' onClick={openDrawer}>
                <span></span>        
                <span></span>        
                <span></span>        
            </button>
            <nav>
                <NavLinks />
            </nav>
          { drawerIsOpen && <SideDrawer closeDrawer={closeDrawer}/>}
        </div>
    )
}
