import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PageHeader = () => {
  const [openItem0, setOpenItem0] = useState(false);
  const [openItem1, setOpenItem1] = useState(false);

  return (
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-logo">
          <Link to="/" className="js-logo-clone">Pharma</Link>
        </div>
        <div className="site-mobile-menu-close">
          <span className="ion-ios-close js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li className="has-children">
            <span
              className={`arrow-collapse ${openItem0 ? '' : 'collapsed'}`}
              onClick={() => setOpenItem0(!openItem0)}
              data-toggle="collapse"
              data-target="#collapseItem0"
            ></span>
            <Link to="#">Dropdown</Link>
            <Collapse in={openItem0}>
              <ul className="collapse" id="collapseItem0">
                <li><Link to="#">Supplements</Link></li>
                <li className="has-children">
                  <span
                    className={`arrow-collapse ${openItem1 ? '' : 'collapsed'}`}
                    onClick={() => setOpenItem1(!openItem1)}
                    data-toggle="collapse"
                    data-target="#collapseItem1"
                  ></span>
                  <Link to="#">Vitamins</Link>
                  <Collapse in={openItem1}>
                    <ul className="collapse" id="collapseItem1">
                      <li><Link to="#">Supplements</Link></li>
                      <li><Link to="#">Vitamins</Link></li>
                      <li><Link to="#">Diet &amp; Nutrition</Link></li>
                      <li><Link to="#">Tea &amp; Coffee</Link></li>
                    </ul>
                  </Collapse>
                </li>
                <li><Link to="#">Diet &amp; Nutrition</Link></li>
                <li><Link to="#">Tea &amp; Coffee</Link></li>
              </ul>
            </Collapse>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default PageHeader;
