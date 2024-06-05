// components/ProjectCard.js
import React from 'react';

interface ProjectCardProps {
  children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      {children}
    </div>
  );
};

export default ProjectCard;
