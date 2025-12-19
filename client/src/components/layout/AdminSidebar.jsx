import {
  LayoutDashboard,
  FolderOpen,
  UserCircle,
  MessageSquare,
  Bell,
} from "lucide-react";

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "clients", label: "Clients", icon: UserCircle },
    { id: "contacts", label: "Contact Forms", icon: MessageSquare },
    { id: "subscriptions", label: "Subscriptions", icon: Bell },
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
