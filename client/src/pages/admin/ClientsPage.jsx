import React, { useState } from "react";
import { useApp } from "../../utils/AppContext.jsx";

const ClientsPage = () => {
  const { clients, addClient } = useApp();

  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    image: "",
    description: "",
  });

  /* -------------------- HANDLERS -------------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      designation: "",
      image: "",
      description: "",
    });
    setIsAdding(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (!isValid) {
      alert("Please fill out all fields before saving.");
      return;
    }

    addClient(formData);
    resetForm();
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="p-4 max-w-7xl mx-auto animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Client Management
        </h2>
        <button
          onClick={() => (isAdding ? resetForm() : setIsAdding(true))}
          className={`${
            isAdding ? "bg-gray-500" : "bg-green-600"
          } text-white px-6 py-2 rounded-lg hover:opacity-90 transition shadow-md`}
        >
          {isAdding ? "Cancel" : "+ Add Client"}
        </button>
      </div>

      {/* Add Client Form */}
      {isAdding && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            👤 Add New Client
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Client Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="text"
                name="designation"
                placeholder="Designation (e.g. Project Manager)"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />

              <textarea
                name="description"
                placeholder="Client Testimonial / Description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Image Preview */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg p-4">
              {formData.image ? (
                <>
                  <p className="text-xs text-gray-400 mb-2">
                    Image Preview
                  </p>
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150?text=Invalid+URL";
                    }}
                  />
                </>
              ) : (
                <span className="text-gray-400 text-sm">
                  Enter image URL to preview
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full md:w-auto bg-green-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Save Client
          </button>
        </div>
      )}

      {/* Clients Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.length > 0 ? (
          clients.map((client) => (
            <div
              key={client._id || client.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-50"
            >
              <div className="text-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-green-50"
                />

                <h3 className="text-xl font-bold text-gray-800">
                  {client.name}
                </h3>

                <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-3">
                  {client.designation}
                </p>

                <p className="text-gray-600 italic text-sm">
                  "{client.description}"
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed">
            <p className="text-gray-500 text-lg">
              No clients found. Click “+ Add Client” to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientsPage;
