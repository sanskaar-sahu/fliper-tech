import { useState } from "react";
import { Home, Lock, Menu, X } from "react-feather";

const Navbar = ({ onNavigateToAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">RealEstate</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
              Get Started
            </button>
            <button 
              onClick={onNavigateToAdmin}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Admin
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 py-2">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 py-2">Projects</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 py-2">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};