import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import bannerImage from '../assets/images/hero_1.jpg'; 
// Import images if using src directory
import product01 from '../assets/images/product_01.png';
import product02 from '../assets/images/product_01.png';
// Repeat for other images

const Store = () => {
  return (
    <div>
      
     
      <div className="site-section">
        <Container>
          <Row>
            {/* Filter by Price */}
            <Col lg={6}>
              <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
              <div id="slider-range" className="border-primary"></div>
              <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
            </Col>
            {/* Filter by Reference */}
            <Col lg={6}>
              <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Reference</h3>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Reference
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Relevance</Dropdown.Item>
                  <Dropdown.Item href="#">Name, A to Z</Dropdown.Item>
                  <Dropdown.Item href="#">Name, Z to A</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Price, low to high</Dropdown.Item>
                  <Dropdown.Item href="#">Price, high to low</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
 
          <Row>
            {/* Product Item */}
            <Col sm={6} lg={4} className="text-center item mb-4">
              <span className="tag">Sale</span>
              <Link to="/shop-single"><img src={product01} alt="Product" /></Link>
              <h3 className="text-dark"><Link to="/shop-single">Bioderma</Link></h3>
              <p className="price"><del>95.00</del> &mdash; $55.00</p>
            </Col>
            <Col sm={6} lg={4} className="text-center item mb-4">
              <Link to="/shop-single"><img src={product02} alt="Product" /></Link>
              <h3 className="text-dark"><Link to="/shop-single">Chanca Piedra</Link></h3>
              <p className="price">$70.00</p>
            </Col>
            {/* Repeat similar blocks for other products */}
          </Row>

          {/* Pagination */}
          
        </Container>
      </div> 
      
    </div>
  );
};

export default Store;
