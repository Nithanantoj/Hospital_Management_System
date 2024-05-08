// HomePage.jsx
import React from 'react';
import './HomePage.css';
import Logo from '../assets/logo.png' ;
import Pic from '../assets/doctor2.png';
import Patient from '../assets/patient.jpg';
import Appoint from '../assets/appointment.jpg';
import Billing from '../assets/billing.jpeg';


 
const HomePage = () => {

  return (
    <div className="home-page">
      <header>
        <img src={Logo} alt="CareCentral Plus Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#subscription">Subscription</a></li>
            <li><button className="login-button" >Login</button></li>
          </ul>
          
        </nav>
      </header>
      <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to CareCentral Plus</h1>
        <h2 className="slogan">Your Health, Our Priority, Always.</h2>
        <h2 className='slogan2'>Streamline Your Hospital Operations</h2>
        <p>Our comprehensive management system helps hospitals and healthcare providers efficiently manage patient records, appointments, billing, and more.</p>
        <a href="#subscription" className="cta-button">Subscribe Now</a>
      </div>
        <img src={Pic} alt="ssss" />
      </section>
        
        <section className="features-section" id="features">
        <h2>Key Features</h2>
        <div className="features-list">
            <div className="feature">
              <h3>Patient Management</h3>
              <img src={Patient} alt="Feature Image" className="feature-image" />
              <div className="feature-content">
                <p>Efficiently manage patient records, including personal information, medical history, and insurance details.</p>
              </div>
            </div>
            
            <div className="feature">
              <h3>Appointment Scheduling</h3>
              <img src={Appoint} alt="Feature Image" className="feature-image" />
              <div className="feature-content">
                <p>Streamline appointment scheduling for patients, doctors, and other staff members.</p>
              </div>
            </div>
            
            <div className="feature">
              <h3>Billing and Invoicing</h3>
              <img src={Billing} alt="Feature Image" className="feature-image" />
              <div className="feature-content">
                <p>Generate invoices, track payments, and manage billing records seamlessly.</p>
              </div>
            </div>
            {/* Add more features as needed */}
          </div>

      </section>
      <section className='foot-sub-section'>
      <section className="subscription-section" id="subscription">
      <h2>Subscribe to Our Platform</h2>
      <div className="subscription-plans">
        <div className="plan">
          <h3>6-Month Subscription</h3>
          <p>per month</p>
          <button>Subscribe</button>
        </div>
        <div className="plan">
          <h3>12-Month Subscription</h3>
          <p>per month</p>
          <button>Subscribe</button>
        </div>
      </div>
    
    </section>
    <footer>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* Add more footer links as needed */}
          </ul>
        </nav>
        <div className="social-media">
          {/* Add social media icons/links here */}
        </div>
      </footer>
      </section>
    </div>
  );
};

export default HomePage;
