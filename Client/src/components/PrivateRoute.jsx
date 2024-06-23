// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//   const isAuthenticated = !!localStorage.getItem('userInfo');
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
