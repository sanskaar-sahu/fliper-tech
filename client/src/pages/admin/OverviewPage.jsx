import React from 'react';
import { FolderOpen, UserCircle, MessageSquare, Bell } from 'lucide-react'; // Added icons
import { useApp } from '../../utils/AppContext.jsx'; // Added missing import

const OverviewPage = () => {
  const { projects, clients, contactForms, subscribedEmails } = useApp();

  const stats = [
    { title: 'Total Projects', value: projects.length, icon: <FolderOpen className="w-8 h-8" />, color: 'bg-blue-500' },
    { title: 'Total Clients', value: clients.length, icon: <UserCircle className="w-8 h-8" />, color: 'bg-green-500' },
    { title: 'Contact Forms', value: contactForms.length, icon: <MessageSquare className="w-8 h-8" />, color: 'bg-orange-500' },
    { title: 'Subscriptions', value: subscribedEmails.length, icon: <Bell className="w-8 h-8" />, color: 'bg-purple-500' }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-lg shadow-inner`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contact Forms Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-orange-500" />
            Recent Contact Forms
          </h3>
          
          {contactForms.length === 0 ? (
            <div className="py-8 text-center text-gray-400 italic">
              No contact forms received yet.
            </div>
          ) : (
            <div className="space-y-4">
              {/* Slicing to show the most recent 3 entries */}
              {[...contactForms].slice(-3).reverse().map((form) => (
                <div key={form.id} className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                  <p className="font-semibold text-gray-800">{form.fullName}</p>
                  <p className="text-sm text-gray-500">{form.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Subscription Summary Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-500" />
            Recent Subscriptions
          </h3>
          {subscribedEmails.length === 0 ? (
            <p className="py-8 text-center text-gray-400 italic">No subscriptions yet.</p>
          ) : (
            <div className="space-y-4">
              {[...subscribedEmails].slice(-3).reverse().map((sub, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border-l-4 border-purple-500 bg-purple-50">
                  <span className="text-gray-700 font-medium">{sub.email || sub}</span>
                  <span className="text-xs text-purple-600 font-bold uppercase">New</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;