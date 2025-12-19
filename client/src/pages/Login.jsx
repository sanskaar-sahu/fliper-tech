import React, { useState } from 'react';
import { Lock, UserCircle, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useApp } from '../utils/AppContext.jsx';

const Login = ({ onLoginSuccess, onNavigateBack }) => {
  const { login } = useApp();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Generic handler for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Call the login function from AppContext
    const isSuccess = login(credentials.username, credentials.password);
    
    if (isSuccess) {
      onLoginSuccess();
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      {/* Back to Home Button */}
      <button 
        onClick={onNavigateBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-500">
        {/* Header Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-blue-100 opacity-90">Enter credentials to access dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded text-sm animate-shake">
              {error}
            </div>
          )}
          
          {/* Demo Hint */}
          <div className="bg-blue-50 border border-blue-100 text-blue-800 px-4 py-3 rounded-xl text-sm">
            <p className="font-bold flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Demo Credentials:
            </p>
            <p className="opacity-80">User: <span className="font-mono font-bold">admin</span></p>
            <p className="opacity-80">Pass: <span className="font-mono font-bold">admin123</span></p>
          </div>

          {/* Username Input */}
          <div className="space-y-2">
            <label className="block text-gray-700 text-sm font-bold ml-1">
              Username
            </label>
            <div className="relative group">
              <UserCircle className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white bg-gray-50 transition-all"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="block text-gray-700 text-sm font-bold ml-1">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white bg-gray-50 transition-all"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 font-bold text-lg mt-4 active:scale-[0.98]"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;