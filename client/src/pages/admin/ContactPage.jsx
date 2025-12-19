import { MessageSquare } from "lucide-react";
import { useApp } from "../../utils/AppContext";

const ContactsPage = () => {
  const { contactForms, deleteContactForm } = useApp();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Contact Form Submissions
      </h2>

      {contactForms.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            No contact form submissions yet
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">
                  Full Name
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">
                  City
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {contactForms.map((form) => (
                <tr key={form._id}>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {form.fullName}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {form.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {form.mobile}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {form.city}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {new Date(form.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this submission?"
                          )
                        ) {
                          deleteContactForm(form._id);
                        }
                      }}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
