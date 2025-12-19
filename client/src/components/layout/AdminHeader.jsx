import React from 'react';
import { LayoutDashboard, LogOut } from 'lucide-react'; 

const AdminHeader = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LayoutDashboard className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Admin Dashboard</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;