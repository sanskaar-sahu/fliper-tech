import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'react-feather';
import { useApp } from '../../utils/AppContext.jsx';

const ContactSection = () => {
  const { addContactForm } = useApp();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    area: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.fullName && formData.email && formData.mobile && formData.area) {
      addContactForm(formData);
      alert('Thank you! We will contact you soon.');
      setFormData({ fullName: '', email: '', mobile: '', area: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get Expert Real Estate Advice Today</h2>
            <p className="text-lg mb-8 text-blue-100">
              Schedule a free consultation with our experienced team and take the first step towards finding your perfect property.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <span>info@realestate.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span>123 Real Estate Blvd, City, State 12345</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Get a Free Consultation</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded bg-transparent border-2 border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded bg-transparent border-2 border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded bg-transparent border-2 border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                placeholder="Area, City"
                className="w-full px-4 py-3 rounded bg-transparent border-2 border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
              >
                Get Quick Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;