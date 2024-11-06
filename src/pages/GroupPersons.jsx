import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import imgCat from '../assets/cat.png'
import "./groupPersons.css";

const GroupPersons = () => {
  const miembros = [
    {
      id: 1,
      nombre: "Andrea Contreras",
      cargo: "Developer",
      descripcion: "Passionate developer of the fronted process. Cat lover and digital inclusion.",
      github: "https://github.com/AndreaCSalazar",
      linkedin: "https://linkedin.com/",
    },
    {
      id: 2,
      nombre: "Sofía Canizales",
      cargo: "Developer",
      descripcion: "Project leader, process developer. Cat lover and mother of one of them.",
      github: "https://github.com/scanizales",
      linkedin: "https://www.linkedin.com/in/canizales-sofía",
    },
    {
      id: 3,
      nombre: "Johanna Manzuera",
      cargo: "Developer",
      descripcion: "Passionate developer of the fronted process. Cat lover and digital inclusion.",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      id: 4,
      nombre: "Karina Vasquez",
      cargo: "Developer",
      descripcion: "Passionate developer of the fronted process. Cat lover and digital inclusion.",
      github: "https://github.com/karinavasquez10",
      linkedin: "https://linkedin.com/",
    }
  ];

  return (
    <div className="miembro-container">
      <div className="paw-background">
        <div className="section-conocenos">
          <h2>Team</h2>
          <div className="miembros-grid">
            {miembros.map((miembro) => (
              <div key={miembro.id} className="miembro-card">
                <h3>{miembro.nombre}</h3>
                <p className="cargo">{miembro.cargo}</p>
                <p className="descripcion">{miembro.descripcion}</p>
                <div className="social-icons">
                  <a href={miembro.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-proposito-metas">            
          <div className="proposito">
            <h3>A team of Tevelopers Passionate about Cats and Technology</h3>
            <p>
              At FelineCare, we are a team of innovative and passionate cat developers, committed
              with creating exceptional digital experiences for cat lovers. Our mission is to merge
              technology and love for cats to offer content that promotes well-being and
              the happiness of our feline children.
            </p>
          </div>
          <div className="metas">
            <h3>Goals</h3>
            <ul>
              <li>Promote education about the care and well-being of kittens.</li>
              <li>Create a supportive and committed community with kittens.</li>
              <li>Provide useful information.</li>
            </ul>           
            <figure>
                <img src={imgCat}></img>
            </figure>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPersons;