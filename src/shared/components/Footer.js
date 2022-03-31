import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import './Header.css'

export default function Footer() {
  return <div className='footer'>        
            <a href="https://www.instagram.com/maryanart_design/?hl=en" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className='ig'/>
            </a>
        </div>;
}
