import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [userId, setUserId] = useState("");

  // Initialize state from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setAuthToken(storedToken);
      setIsLoggedIn(true);
    }

    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Function to handle login
  const loggedIn = (token, id) => {
    setIsLoggedIn(true);
    setAuthToken(token);
    setUserId(id);
    localStorage.setItem("authToken", token); // Store token in localStorage
    localStorage.setItem("userId", id); // Store user ID in localStorage
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setAuthToken("");
    setUserId("");
    localStorage.removeItem("authToken"); // Remove token from localStorage
    localStorage.removeItem("userId"); // Remove user ID from localStorage
  };

  // Value provided by the context
  const authContextValue = {
    isLoggedIn,
    authToken,
    loggedIn,
    logout,
    userId,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
