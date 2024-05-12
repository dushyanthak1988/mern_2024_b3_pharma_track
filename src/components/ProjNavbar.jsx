import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjNavbar = () => {
  const [openItem0, setOpenItem0] = useState(false);
  const [openItem1, setOpenItem1] = useState(false);

  return (
    
    <Navbar bg="light" expand="lg" className="js-logo-clone">
      <Container>
        <Navbar.Brand as={Link} to="/">Pharma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
            </Nav.Item>
            <Nav.Item className="has-children">
              <Nav.Link
                onClick={() => setOpenItem0(!openItem0)}
                aria-expanded={openItem0}
                className={openItem0 ? '' : 'collapsed'}
              >
                Dropdown
              </Nav.Link>
              <Collapse in={openItem0}>
                <div>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Nav.Link as={Link} to="#">Supplements</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="has-children">
                      <Nav.Link
                        onClick={() => setOpenItem1(!openItem1)}
                        aria-expanded={openItem1}
                        className={openItem1 ? '' : 'collapsed'}
                      >
                        Vitamins
                      </Nav.Link>
                      <Collapse in={openItem1}>
                        <div>
                          <Nav className="flex-column">
                            <Nav.Item>
                              <Nav.Link as={Link} to="#">Supplements</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link as={Link} to="#">Vitamins</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link as={Link} to="#">Diet &amp; Nutrition</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link as={Link} to="#">Tea &amp; Coffee</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="#">Diet &amp; Nutrition</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="#">Tea &amp; Coffee</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Collapse>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ProjNavbar;
