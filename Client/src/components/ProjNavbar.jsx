import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjNavbar = () => {
  const [openItem0, setOpenItem0] = useState(false);
  const [openItem1, setOpenItem1] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" className="js-logo-clone">
      <Container>
        <Navbar.Brand as={Link} to="/">PharmaTrack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            </Nav.Item>
            {!user ? (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Nav.Link as={Link} to="#" onClick={handleLogout}>Logout</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ProjNavbar;
