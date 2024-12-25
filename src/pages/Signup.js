import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from '../components/DarkModeContext';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const { darkMode } = useDarkMode();

  const handleCreateUser  = (e) => {
    e.preventDefault();
    const user = { username, password, emailOrMobile };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/page-layout", { state: { username } });
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200" : "bg-gradient-to-br from-blue-50 to-blue-200 text-gray-800"}`}>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">Create an Account</h1>
        <div className={`p-8 rounded-lg shadow-lg w-96 max-w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <form onSubmit={handleCreateUser}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full p-2 rounded border border-blue-600 focus:outline-none ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-transparent text-black'}`}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-2 rounded border border-blue-600 focus:outline-none ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-transparent text-black'}`}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or Mobile Number"
                value={emailOrMobile}
                onChange={(e) => setEmailOrMobile(e.target.value)}
                className={`w-full p-2 rounded border border-blue-600 focus:outline-none ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-transparent text-black'}`}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;