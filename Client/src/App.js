import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjNavbar from './components/ProjNavbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/cart';
import Dashboard from  './pages/Dashboard' 
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={< Dashboard />} />
          <Route
            path="/store"
            element={
              <PrivateRoute>
                <Store />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard  />
              </PrivateRoute>
            }
          />

        <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          /> 

        </Routes>
        <ConditionalFooter/>
      </Router>
    </AuthProvider>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  const excludePaths = ['/login', '/register'];

  if (excludePaths.includes(location.pathname)) {
    return null;
  }

  return <ProjNavbar />;
};


const ConditionalFooter = () => {
  const location = useLocation();
  const excludePaths = ['/login', '/register'];

  if (excludePaths.includes(location.pathname)) {
    return null;
  }

  return <Footer />;
};
export default App;
