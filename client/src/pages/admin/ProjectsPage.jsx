import React, { useState } from 'react';
import { useApp } from '../../utils/AppContext.jsx';

const ProjectsPage = () => {
  const { projects, addProject, updateProject, deleteProject } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', image: '' });

  // Generic input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', image: '' });
    setEditingId(null);
    setIsAdding(false);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Validation
    if (formData.name.trim() && formData.description.trim() && formData.image.trim()) {
      if (editingId) {
        updateProject(editingId, formData);
      } else {
        addProject(formData);
      }
      resetForm();
    } else {
      alert('Please fill all fields');
    }
  };

  const handleEdit = (project) => {
    setFormData({ name: project.name, description: project.description, image: project.image });
    setEditingId(project.id);
    setIsAdding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Project Management</h2>
        <button
          onClick={() => (isAdding ? resetForm() : setIsAdding(true))}
          className={`${
            isAdding ? 'bg-gray-500' : 'bg-blue-600'
          } text-white px-6 py-2 rounded-lg hover:opacity-90 transition shadow-md`}
        >
          {isAdding ? 'Cancel' : '+ Add Project'}
        </button>
      </div>

      {/* Add/Edit Form */}
      {isAdding && (
        <form 
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {editingId ? '📝 Edit Project' : '🚀 Add New Project'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                name="image"
                placeholder="Project Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                rows="3"
              />
            </div>

            {/* Image Preview Container */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
              {formData.image ? (
                <img 
                  src={formData.image} 
                  alt="Preview" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Invalid+Image+URL'; }}
                />
              ) : (
                <span className="text-gray-400">Image Preview</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            {editingId ? 'Update Project' : 'Save Project'}
          </button>
        </form>
      )}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative h-48">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">Project</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{project.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this project?')) deleteProject(project.id);
                    }}
                    className="flex-1 bg-red-50 text-red-600 font-semibold px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-gray-500">No projects added yet. Get started by clicking "+ Add Project".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;