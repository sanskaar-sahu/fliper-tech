import React, { useState } from 'react';
import { useApp } from '../../utils/AppContext.jsx';
    

const NewsletterSection = () => {
  const { addSubscribedEmail } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      addSubscribedEmail(email);
      alert('Successfully subscribed!');
      setEmail('');
    } else {
      alert('Please enter a valid email');
    }
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-blue-100 mb-8">Get the latest updates on properties and market trends</p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition font-semibold"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};


export default NewsletterSection;