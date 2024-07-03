import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize token state from cookies
  const [token, setToken] = useState(() => Cookies.get("token"));
  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
