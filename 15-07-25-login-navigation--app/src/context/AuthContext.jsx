import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvier = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storeduser = localStorage.getItem("loggenInUser");
    if (storeduser) {
      setIsAuthenticated(true);
      setUsername(storeduser);
    }
  }, []);

  const login = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
    localStorage.setItem("loggedInUser", user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('loggedInUser');
  };

  return(
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};
