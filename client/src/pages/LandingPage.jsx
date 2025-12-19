import React, { useState } from 'react';
import { useApp } from '../utils/AppContext.jsx';

import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const LandingPage = ({ onNavigateToHome }) => {
  const { projects, clients, addContactForm, addSubscribedEmail } = useApp();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Building2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">ReState</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-gray-600">
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#clients" className="hover:text-blue-600 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <button
            onClick={onNavigateToHome}
            className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
          >
            Admin Portal
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Find Your Dream Home <br />
            <span className="text-blue-600 font-serif italic">Beyond Expectations.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Leading the market in luxury real estate and commercial developments.
            We turn visions into brick and mortar reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg">
              View Our Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="bg-white border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-blue-600 transition">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* 3. Projects Section (Dynamic) */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 h-64 shadow-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-blue-600 transition">{project.name}</h3>
              <p className="text-gray-500 line-clamp-2 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Clients Section (Dynamic Testimonials) */}
      <section id="clients" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div key={client.id} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <p className="italic text-gray-300 mb-6">"{client.description}"</p>
                <div className="flex items-center gap-4">
                  <img src={client.image} alt={client.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold">{client.name}</h4>
                    <p className="text-sm text-blue-400">{client.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Discuss Your <br /> Next Property</h2>
            <p className="text-gray-600 mb-8">Ready to invest? Our team of experts is here to guide you through every step of the process.</p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><MapPin size={24} /></div>
                <div><p className="font-bold">Head Office</p><p className="text-gray-500">123 Real Estate Ave, Luxury City</p></div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-green-100 p-3 rounded-lg text-green-600"><Phone size={24} /></div>
                <div><p className="font-bold">Phone</p><p className="text-gray-500">+1 (234) 567-890</p></div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);

              addContactForm({
                fullName: formData.get("fullName"),
                email: formData.get("email"),
                mobile: formData.get("mobile"),
                city: formData.get("city"),
              });

              e.target.reset();
              alert("Message sent successfully!");
            }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-4"
          >
            <input
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="mobile"
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="city"
              placeholder="City"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Building2 className="text-blue-600" />
              <span className="text-xl font-bold">ReState</span>
            </div>
            <div className="flex gap-6">
              <Facebook className="text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Twitter className="text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="text-gray-400 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm">© 2025 ReState Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;