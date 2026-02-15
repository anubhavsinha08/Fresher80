import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setUser({ token, role });
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    setUser({ token, role }); // 🔥 THIS IS WHAT FIXES YOUR ISSUE
  };

 const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  setUser(null); // 🔥 THIS triggers rerender everywhere
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>

      {children}
    </AuthContext.Provider>
  );
};
