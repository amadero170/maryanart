import React from 'react'
import proy01 from '../../imagenes/Proyectos/proy01.jpg'
import proy02 from '../../imagenes/Proyectos/proy02.jpg'
import proy03 from '../../imagenes/Proyectos/proy03.jpg'
import proy04 from '../../imagenes/Proyectos/proy04.jpg'
import proy05 from '../../imagenes/Proyectos/proy05.jpg'
import proy06 from '../../imagenes/Proyectos/proy06.jpg'
import proy07 from '../../imagenes/Proyectos/proy07.jpg'
import proy08 from '../../imagenes/Proyectos/proy08.jpg'
import proy09 from '../../imagenes/Proyectos/proy09.jpg'
import proy10 from '../../imagenes/Proyectos/proy10.jpg'
import proy11 from '../../imagenes/Proyectos/proy11.jpg'
import proy12 from '../../imagenes/Proyectos/proy12.jpg'
import Footer from '../../shared/components/Footer'
import Header from '../../shared/components/Header'
import ProjectsList from '../components/ProjectsList';
import './Projects.css'

export default function Projects() {

const PROJECTS = [{id:1,name:'proyecto1',image:proy01},{id:2,name:'proyecto2',image:proy02},{id:3,name:'proyecto3',image:proy03},{id:4,name:'proyecto4',image:proy04},{id:5,name:'proyecto5',image:proy05},{id:6,name:'proyecto6',image:proy06},{id:7,name:'proyecto7',image:proy07},{id:8,name:'proyecto8',image:proy08},{id:9,name:'proyecto9',image:proy09},{id:10,name:'proyecto10',image:proy10},{id:11,name:'proyecto11',image:proy11},{id:12,name:'proyecto12',image:proy12}]
    return (
        <div className='wrapper'>
            <Header/>
            <ProjectsList item={PROJECTS}/>
            <Footer/>
        </div>
    )
}
