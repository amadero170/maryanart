import React from 'react';
import './ProjectItem.css';
import { Link } from 'react-router-dom';

export default function ProjectItem(props) {
  return    <li className="project-item">
                    <Link to={`/projects/${props.id}`} className='link'>
                        <div className="project-item-image">
                            <img src={props.image} alt={props.name} />
                        </div>
                        <div className="project-item-info">
                            <h2>{props.name}</h2>
                        </div>
                    </ Link>
            </li>;
}
