import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const storedUser = localStorage.getItem("User");
    
    if (token && role && storedUser && storedUser !== "undefined") {
      setUser({ token, role, User: JSON.parse(storedUser) });
    }
  }, []);

  const login = (token, role, User) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("User", JSON.stringify(User));

    setUser({ token, role,User}); // 🔥 THIS IS WHAT FIXES YOUR ISSUE

    
  };

 const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("User");
  setUser(null); // 🔥 THIS triggers rerender everywhere
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>

      {children}
    </AuthContext.Provider>
  );
};
