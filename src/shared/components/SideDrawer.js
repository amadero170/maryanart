import React from 'react';
import NavLinks from './NavLinks';
import './SideDrawer.css';
import FondoGris from './FondoGris';
import './FondoGris.css'
import './NavLinks.css'

export default function SideDrawer(props) {
  return <aside className='side-drawer'>
    <NavLinks className='sideNav'/>
    <FondoGris close={props.closeDrawer}/>
</aside>;
}
