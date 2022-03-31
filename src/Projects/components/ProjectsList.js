import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectsList.css'


export default function ProjectsList(props) {
  return <ul className='grid-container'>
    {props.item.map(x=>
      <ProjectItem key={x.id} id={x.id} image={x.image} name={x.name}/>
    )}
  </ul>;
}
