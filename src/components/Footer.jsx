import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="block-7">
              <h3 className="footer-heading mb-4">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#">Supplements</a></li>
              <li><a href="#">Vitamins</a></li>
              <li><a href="#">Diet & Nutrition</a></li>
              <li><a href="#">Tea & Coffee</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li className="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                <li className="email">emailaddress@domain.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} All rights reserved | Template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-primary">Colorlib</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
