import React from 'react';
import { Bell, Trash2, Mail, Copy } from 'lucide-react';
import { useApp } from '../../utils/AppContext.jsx';

const SubscriptionsPage = () => {
  const { subscribedEmails, deleteSubscribedEmail } = useApp();

  // Helper to copy email to clipboard
  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Newsletter Subscriptions</h2>
        <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium">
          Total: {subscribedEmails.length}
        </div>
      </div>
      
      {subscribedEmails.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center border border-gray-100">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg font-medium">No newsletter subscriptions yet</p>
          <p className="text-gray-400 text-sm">When users subscribe on the website, they will appear here.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subscribed Date</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[...subscribedEmails].reverse().map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-50 p-2 rounded-full">
                          <Mail className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{sub.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(sub.date).toLocaleDateString()} at {new Date(sub.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => copyToClipboard(sub.email)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Copy Email"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Remove this subscription?')) deleteSubscribedEmail(sub.id);
                          }}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete Subscription"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionsPage;