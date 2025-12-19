import React from 'react';
import { Home, Lock, Building2 } from 'lucide-react'; // Added icons

const HomePage = ({ onNavigateToSite, onNavigateToLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      {/* Container with entrance animation */}
      <div className="max-w-4xl w-full animate-in fade-in zoom-in duration-700">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Building2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            RealEstate <span className="text-blue-200">Pro</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium opacity-90">
            Select your destination to get started
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* User Side Card */}
          <div 
            onClick={onNavigateToSite}
            className="group bg-white rounded-2xl p-8 shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border-b-8 border-blue-500"
          >
            <div className="text-center">
              <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Home className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Visit Website</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Explore our current properties, featured projects, and services as a visitor.
              </p>
              <button 
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 font-bold"
              >
                Go to Website
              </button>
            </div>
          </div>

          {/* Admin Side Card */}
          <div 
            onClick={onNavigateToLogin}
            className="group bg-white rounded-2xl p-8 shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border-b-8 border-orange-500"
          >
            <div className="text-center">
              <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Lock className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Admin Portal</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Log in to the dashboard to manage listings, clients, and view form submissions.
              </p>
              <button 
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-200 font-bold"
              >
                Login as Admin
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center mt-12 text-blue-100 text-sm opacity-60">
          © 2025 RealEstate Pro Management System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HomePage;