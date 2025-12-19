import React, { useState } from 'react';
import AdminHeader from '../../components/layout/AdminHeader.jsx';
import AdminSidebar from '../../components/layout/AdminSidebar.jsx'
import OverviewPage from '../../pages/admin/OverviewPage.jsx'
import ProjectsPage from '../../pages/admin/ProjectsPage';
import ClientsPage from '../../pages/admin/ClientsPage';
import ContactPage from '../../pages/admin/ContactPage';
import SubscriptionsPage from './SubscriptionsPage.jsx';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Helper function to render the correct page content
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'clients':
        return <ClientsPage />;
      case 'contacts':
        return <ContactPage />;
      case 'subscriptions':
        return <SubscriptionsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation Bar */}
      <AdminHeader onLogout={onLogout} />
      
      <div className="flex flex-1">
        {/* Left Sidebar - Fixed or Sticky recommended */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;