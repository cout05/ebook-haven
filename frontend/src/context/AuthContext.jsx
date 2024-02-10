import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");

  const loggedIn = (token) => {
    setIsLoggedIn(true);
    setAuthToken(token);
    localStorage.setItem("authToken", token); // Store token in localStorage
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAuthToken("");
    localStorage.removeItem("authToken"); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
