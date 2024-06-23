import React, { createContext, useState, useEffect } from 'react';
import * as api from '../services/ApiServices';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const login = async (formData) => {
    try {
      const { data } = await api.login(formData);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
    } catch (error) {
      throw error;
    }
  };

  const register = async (formData) => {
    try {
      await api.register(formData);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
