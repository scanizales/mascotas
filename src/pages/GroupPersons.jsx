import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./groupPersons.css";

const GroupPersons = () => {
  const miembros = [
    {
      id: 1,
      nombre: "Nombre Apellido",
      cargo: "Desarrolladora",
      descripcion: "Descripción 1",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      id: 2,
      nombre: "Nombre Apellido",
      cargo: "Desarrolladora",
      descripcion: "Descripción 2",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
    },
    {
      id: 3,
      nombre: "Nombre Apellido",
      cargo: "Desarrolladora",
      descripcion: "Descripción 3",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
    }
  ];

  return (
    <div className="miembro-container">
      <div className="paw-background">
        <div className="section-conocenos">
          <h2>Conócenos</h2>
          <div className="miembros-grid">
            {miembros.map((miembro) => (
              <div key={miembro.id} className="miembro-card">
                <div className="miembro-image"></div>
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
            <h3>Propósito de la página</h3>
            <p>Nuestra app web busca brindar a los dueños de gatitos una plataforma integral para conocer y cuidar mejor a sus mascotas, proporcionándoles información detallada sobre razas, cuidados, comportamientos y necesidades específicas,
             con el fin de promover una vida saludable y feliz para ellos..</p>
          </div>
          <div className="metas">
            <h3>Metas del proyecto</h3>
            <ul>
              <li>Crear una comunidad informada de dueños de gatos</li>
              <li>Proporcionar recursos educativos de alta calidad</li>
              <li>Mejorar la calidad de vida de los gatos domésticos</li>
              <li>Fomentar el cuidado responsable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPersons;