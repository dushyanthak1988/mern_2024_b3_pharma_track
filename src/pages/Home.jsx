import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/images/hero_1.jpg'; 
 
const Home = () => {
  return (
    <div> 
      <div className="site-blocks-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
              <div className="site-block-cover-content text-center">
                <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                <h1>Welcome To Pharma</h1>
                <p>
                  <Link to="/store" className="btn btn-primary px-5 py-3">Shop Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add other sections like Popular Products here */}
    </div>
  );
};

export default Home;
