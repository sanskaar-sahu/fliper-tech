import { useState , React } from "react";
import { useApp } from "./utils/AppContext.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";  


const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const { isAuthenticated, logout } = useApp();

  const handleLogout = () => {
    logout();
    setCurrentView('home');
  };

  return (
    <>
      {currentView === 'home' && (
        <HomePage 
          onNavigateToSite={() => setCurrentView('landing')}
          onNavigateToLogin={() => setCurrentView('login')}
        />
      )}
      
      {currentView === 'landing' && (
        <LandingPage onNavigateToHome={() => setCurrentView('home')} />
      )}
      
      {currentView === 'login' && (
        <Login onLoginSuccess={() => setCurrentView('admin')} />
      )}
      
      {currentView === 'admin' && isAuthenticated && (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;