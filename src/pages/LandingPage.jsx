import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
    <div className="container">
      <img className="image" src="https://themewagon.github.io/coloshop/images/slider_1.jpg" alt="Slider" />
     
      <div className="text">
        <p>Get upto 30% Off<br /> New Arrivals</p>
      </div>
  
      <div className="start" >
    <Link  to="/login"><button>Get Started</button></Link>
      </div>
    </div>
  </>
  
  );
};

export default LandingPage;
