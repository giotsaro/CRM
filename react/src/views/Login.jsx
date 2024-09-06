import React, { useState } from "react";
import { useNavigate } from "react-router-dom";





function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simulate an API call
    if (email === "user@example.com" && password === "password") {
      // Simulate storing a token in localStorage
      
      console.log('success');
     // Cookies.setItem("token", "fakeToken123");
      // Navigate to a different route on success
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };
  

    return (
      <>
          <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-800 p-6 rounded-lg  w-full max-w-sm">
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 max-w-sm">
            <label htmlFor="email" className="block text-gray-200 mb-2"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border text-sm rounded-lg"
              required
              placeholder="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-200 mb-2"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg"
              required
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-lg text-sm hover:bg-sky-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
      </>
    )
  }

  

export default Login;