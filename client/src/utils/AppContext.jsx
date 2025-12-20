import React, { createContext, useContext, useEffect, useState } from "react";
import API from './api.js';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contactForms, setContactForms] = useState([]);
  const [subscribedEmails, setSubscribedEmails] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* -------------------- FETCH INITIAL DATA -------------------- */

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  const fetchProjects = async () => {
    const { data } = await API.get("/api/projects");
    setProjects(data);
  };

  const fetchClients = async () => {
    const { data } = await API.get("/api/clients");
    setClients(data);
  };

  /* -------------------- PROJECT CRUD -------------------- */

  const addProject = async (project) => {
    const { data } = await API.post("/api/projects", project);
    setProjects((prev) => [...prev, data]);
  };

  const updateProject = async (id, updatedProject) => {
    const { data } = await API.put(`/api/projects/${id}`, updatedProject);
    setProjects((prev) =>
      prev.map((p) => (p._id === id ? data : p))
    );
  };

  const deleteProject = async (id) => {
    await API.delete(`/api/projects/${id}`);
    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  /* -------------------- CLIENT CRUD -------------------- */

  const addClient = async (client) => {
    const { data } = await API.post("/api/clients/create", client);
    setClients((prev) => [...prev, data]);
  };

  const updateClient = async (id, updatedClient) => {
    const { data } = await API.put(`/api/clients/${id}`, updatedClient);
    setClients((prev) =>
      prev.map((c) => (c._id === id ? data : c))
    );
  };

  const deleteClient = async (id) => {
    await API.delete(`/api/clients/${id}`);
    setClients((prev) => prev.filter((c) => c._id !== id));
  };

  /* -------------------- CONTACT FORM -------------------- */

  const addContactForm = async (form) => {
    const { data } = await API.post("/api/contacts", form);
    setContactForms((prev) => [...prev, data]);
  };

  const deleteContactForm = async (id) => {
    await API.delete(`/api/contacts/${id}`);
    setContactForms((prev) => prev.filter((f) => f._id !== id));
  };

  /* -------------------- NEWSLETTER -------------------- */

  const addSubscribedEmail = async (email) => {
    const { data } = await API.post("/api/newsletter/subscribe", { email });
    setSubscribedEmails((prev) => [...prev, data]);
  };

  const deleteSubscribedEmail = async (id) => {
    await API.delete(`/api/newsletter/${id}`);
    setSubscribedEmails((prev) => prev.filter((e) => e._id !== id));
  };

  /* -------------------- AUTH -------------------- */

const login = async (email, password) => {
  try {
    const { data } = await API.post("/api/admin/login", {
      email,
      password,
    });

    localStorage.setItem("token", data.token);
    setIsAuthenticated(true);
    return true;
  } catch (err) {
    return false;
  }
};



  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider
      value={{
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
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
