import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Footer() {
    return (
        <footer className="footer" style={{height:"100vh"}}>
  <div className="footer-container">
    <div className="footer-section">
      <h4>About Us</h4>
      <p>Your trusted source for quality products online.</p>
    </div>
    <div className="footer-section">
      <h4>Links</h4>
      <ul>
        <li><a href="/privacy">Privacy</a></li>
        <li><a href="/terms">Terms</a></li>
        <li><a href="/help">Help</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@ecommerce.com</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
  </div>
</footer>

    );
}
export default Footer;