import React from 'react';

const Footer = () => {
  return (

    <div>  <div className="site-section bg-secondary bg-image" style={{ backgroundImage: "url('images/bg_2.jpg')" }}>
    <div className="container">
      <div className="row align-items-stretch">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
            <div className="banner-1-inner align-self-center">
              <h2>PharmaTrack Products</h2>
              PharmaTrack display 
            </div>
          </a>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: "url('images/bg_2.jpg')" }}>
            <div className="banner-1-inner ml-auto align-self-center">
              <h2>Rated by Experts</h2>
              Experts display 
            </div>
          </a>
        </div>
      </div>
    </div>
  </div> 
  
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div className="block-7">
            <h3 className="footer-heading mb-4">About Us</h3>
            <p>
               about discription
            </p>
          </div>
        </div>
        <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
          <h3 className="footer-heading mb-4">Quick Links</h3>
          <ul className="list-unstyled">
            <li><a href="#">Supplements</a></li>
            <li><a href="#">Vitamins</a></li>
            <li><a href="#">Diet &amp; Nutrition</a></li>
            <li><a href="#">Tea &amp; Coffee</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="block-5 mb-5">
            <h3 className="footer-heading mb-4">Contact Info</h3>
            <ul className="list-unstyled">
            Contact Info display
            </ul>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All rights reserved  
            with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://github.com/dushyanthak1988" target="_blank" className="text-primary">DushyanthaK</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  </div>
  );
};

export default Footer;
