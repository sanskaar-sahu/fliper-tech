import React from "react";
import { Award } from "lucide-react";   


const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Find Your Dream Home with Expert Consultation
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We provide comprehensive real estate solutions including consultation, design, marketing, and property management services.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition text-lg font-semibold">
              Schedule Consultation
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" 
              alt="Consultation" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <Award className="w-12 h-12 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">500+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;