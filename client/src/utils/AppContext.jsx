import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      name: 'Consultation',
      description: 'Modern Family Home, Downtown'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      name: 'Design',
      description: 'Contemporary Villa, Suburbs'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      name: 'Marketing & Design',
      description: 'Charming Cottage, Riverside'
    }
  ]);

  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'Rowhan Smith',
      designation: 'CEO, Foredunes',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      description: 'Outstanding service and professional approach. Highly recommended for real estate investments.'
    },
    {
      id: 2,
      name: 'Shipra Kayak',
      designation: 'Brand Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      description: 'Excellent team with great market knowledge. Found my dream home within budget.'
    }
  ]);

  const [contactForms, setContactForms] = useState([]);
  const [subscribedEmails, setSubscribedEmails] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(p => p.id === id ? { ...updatedProject, id } : p));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const addClient = (client) => {
    setClients([...clients, { ...client, id: Date.now() }]);
  };

  const updateClient = (id, updatedClient) => {
    setClients(clients.map(c => c.id === id ? { ...updatedClient, id } : c));
  };

  const deleteClient = (id) => {
    setClients(clients.filter(c => c.id !== id));
  };

  const addContactForm = (form) => {
    setContactForms([...contactForms, { ...form, id: Date.now(), date: new Date().toISOString() }]);
  };

  const deleteContactForm = (id) => {
    setContactForms(contactForms.filter(f => f.id !== id));
  };

  const addSubscribedEmail = (email) => {
    if (!subscribedEmails.find(e => e.email === email)) {
      setSubscribedEmails([...subscribedEmails, { email, id: Date.now(), date: new Date().toISOString() }]);
    }
  };

  const deleteSubscribedEmail = (id) => {
    setSubscribedEmails(subscribedEmails.filter(e => e.id !== id));
  };

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider value={{
      projects,
      clients,
      contactForms,
      subscribedEmails,
      isAuthenticated,
      addProject,
      updateProject,
      deleteProject,
      addClient,
      updateClient,
      deleteClient,
      addContactForm,
      deleteContactForm,
      addSubscribedEmail,
      deleteSubscribedEmail,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};
