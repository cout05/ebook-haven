import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState({});
  const [userDetails, setuserDetails] = useState({});

  // Initialize state from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const stored = JSON.parse(storedToken);
    if (stored) {
      setAuthToken(stored);
      setIsLoggedIn(true);
    }

    const storeduserDetails = localStorage.getItem("userDetails");
    const storedDetails = JSON.parse(storeduserDetails);
    if (storedDetails) {
      setuserDetails(storedDetails);
    }
  }, []);

  // Function to handle login
  const loggedIn = (token, id) => {
    setIsLoggedIn(true);
    setAuthToken(token);
    setuserDetails(id);
    const tk = JSON.stringify(token);
    const ud = JSON.stringify(id);
    localStorage.setItem("authToken", tk); // Store token in localStorage
    localStorage.setItem("userDetails", ud); // Store user ID in localStorage
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    setAuthToken({});
    setuserDetails({});
    localStorage.removeItem("authToken"); // Remove token from localStorage
    localStorage.removeItem("userDetails"); // Remove user ID from localStorage
  };

  // Value provided by the context
  const authContextValue = {
    isLoggedIn,
    authToken,
    loggedIn,
    logout,
    userDetails,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
