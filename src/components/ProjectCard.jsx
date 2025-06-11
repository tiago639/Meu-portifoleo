import React from 'react';

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Ver projeto
        </a>
      )}
    </div>
  );
}
