//write the logout utility function
export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/"; // Redirect to login page
};      