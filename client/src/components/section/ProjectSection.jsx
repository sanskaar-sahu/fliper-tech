import React from 'react';
import { useApp } from '../../utils/AppContext.jsx';   

const ProjectsSection = () => {
  const { projects } = useApp();

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-gray-600">Explore our latest real estate projects and success stories</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;