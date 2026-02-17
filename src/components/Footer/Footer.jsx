import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Leaf, Award, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="makhana-footer" id="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img className="footer-logo" src={assets.logo1} alt="Makhana House" />
            <div className="footer-logo-text">
              <span className="footer-brand-name">Makhana House</span>
              <span className="footer-tagline">Pure by Nature, Perfect by Taste</span>
            </div>
          </Link>
          
          <p className="footer-description">
            At Makhana House, we bring you the finest quality fox nuts sourced directly from 
            organic farms in Madhya Pradesh. Our makhanas are carefully processed to retain 
            their natural nutrients, making them the perfect healthy snack for your family.
          </p>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <Leaf size={18} />
              <span>100% Organic</span>
            </div>
            <div className="trust-badge">
              <Award size={18} />
              <span>Premium Quality</span>
            </div>
            <div className="trust-badge">
              <Heart size={18} />
              <span>Made with Love</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">Our Story</Link></li>
            <li><Link to="/products">Makhana Flavors</Link></li>
            <li><Link to="/contact-us">Get in Touch</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-list">
            <li>
              <div className="contact-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-detail">
                <strong>Visit Us</strong>
                <span>District Balaghat,</span>
                <span>Madhya Pradesh, India - 481001</span>
              </div>
            </li>
            <li>
              <div className="contact-icon">
                <Phone size={18} />
              </div>
              <div className="contact-detail">
                <strong>Call Us</strong>
                <span>+91 80098 00980</span>
                <span>Mon-Sat, 9AM - 7PM</span>
              </div>
            </li>
            <li>
              <div className="contact-icon">
                <Mail size={18} />
              </div>
              <div className="contact-detail">
                <strong>Email Us</strong>
                <span>makhanahouse@gmail.com</span>
                <span>We reply within 24 hrs</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3 className="footer-title">Stay Updated</h3>
          <p className="newsletter-text">
            Subscribe to get updates on new flavors and special offers!
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>

          {/* Social Links */}
          <div className="social-links">
            <div className="social-icons">
              <a 
                href="https://www.facebook.com/profile.php?id=61575420719800"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <img src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a 
                href="https://twitter.com/makhanahouse"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <img src={assets.twitter_icon} alt="Twitter" />
              </a>
              <a 
                href="https://www.instagram.com/makhanahouse"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <img src={assets.instagram_icon} alt="Instagram" />
              </a>
              <a 
                href="https://www.linkedin.com/company/makhanahouse"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <img src={assets.linkedin_icon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p className="copyright">
            © {currentYear} Makhana House. All rights reserved.
          </p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms-of-service">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
          <p className="credit">
            Crafted with ❤️ by{" "}
            <a 
              href="https://kharaagrotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="credit-link"
            >
              Makhana House
            </a>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;