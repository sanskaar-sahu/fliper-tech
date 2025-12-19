import React from 'react';
import { Home, Users, TrendingUp } from 'react-feather';  

const FeaturesSection = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: 'Premium Properties',
      description: 'Access to exclusive listings and premium real estate opportunities in prime locations.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Expert Guidance',
      description: 'Professional consultation from experienced real estate experts to guide your journey.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Market Insights',
      description: 'Stay informed with latest market trends and investment opportunities in real estate.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive real estate services tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-lg hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;