import React from 'react';
import { useApp } from '../../utils/AppContext.jsx';    


const ClientsSection = () => {
  const { clients } = useApp();

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Happy Clients</h2>
          <p className="text-gray-600">Meet our satisfied clients and their testimonials</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((member) => (
            <div key={member.id} className="text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-sm text-gray-600 mb-4 px-2">
                {member.description}
              </p>
              <h4 className="font-bold text-blue-600">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};