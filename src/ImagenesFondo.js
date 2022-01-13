import React from 'react';
import foto1 from './imagenes/foto1.jpg'
import foto2 from './imagenes/foto2.jpg'
import foto3 from './imagenes/foto3.jpg'
import foto4 from './imagenes/foto4.jpg'
import foto5 from './imagenes/foto5.jpg'
import './ImagenesFondo.css'
import {useState, useEffect} from 'react';
import {AiOutlineInstagram} from 'react-icons/ai'



export default function ImagenesFondo() {
const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount=== 4 ? prevCount=0 : prevCount+ 1);
    }, 4000);
  }, []);

  const arr = [foto1,foto2,foto3,foto4,foto5]
    return (
        <div className='fotoContainer'>
            <img className='fotoFondo' src={arr[count]} alt='foto'/>
            <div className="titulo">
              <h1>MURALES | DISEÑO</h1>
              <h2>MARIANA VALDIVIA REYES</h2>
            </div>
            <a className='sup' href=''>QIUBO</a>
            <a href="https://www.instagram.com/maryanart_design/?hl=en" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className='ig'/>
            </a>
        </div>
    )
}
