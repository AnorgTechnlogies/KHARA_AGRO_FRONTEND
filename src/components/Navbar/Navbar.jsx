import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const handleNavClick = (sectionId, menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`makhana-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo" onClick={() => setMenu("home")}>
          <img src={assets.logo1} alt="Makhana House" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">Makhana House</span>
            <span className="logo-tagline">Pure by Nature, Perfect by Taste</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-menu-desktop">
          <li>
            <Link 
              to="/" 
              onClick={() => setMenu("home")}
              className={`nav-link ${menu === "home" ? "active" : ""}`}
            >
              <span className="nav-icon">🏠</span>
              Home
            </Link>
          </li>
          
          <li>
            <a 
              href="#explore-menu" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('explore-menu', 'menu');
              }}
              className={`nav-link ${menu === "menu" ? "active" : ""}`}
            >
              <span className="nav-icon">🌰</span>
              Makhana Flavors
            </a>
          </li>
          
          <li>
            <Link 
              to="/about-us" 
              onClick={() => setMenu("about")}
              className={`nav-link ${menu === "about" ? "active" : ""}`}
            >
              <span className="nav-icon">📖</span>
              Our Story
            </Link>
          </li>
          
          <li>
            <Link 
              to="/ContactUs" 
              onClick={() => setMenu("contactUs")}
              className={`nav-link ${menu === "contactUs" ? "active" : ""}`}
            >
              <span className="nav-icon">📞</span>
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="navbar-actions">
          {/* Cart Icon */}
          <Link to='/cart' className="cart-icon">
            <div className="cart-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 2H5L6 15H20L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {getTotalCartAmount() > 0 && (
                <span className="cart-badge">{getTotalCartAmount()}</span>
              )}
            </div>
          </Link>

          {/* Auth Section */}
          {!token ? (
            <button 
              className="sign-in-btn"
              onClick={() => setShowLogin(true)}
            >
              <span>Sign In</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v18h-6M10 17l5-5-5-5M13 12H4"/>
              </svg>
            </button>
          ) : (
            <div className="profile-dropdown">
              <button className="profile-btn">
                <img src={assets.profile_icon} alt="Profile" />
                <span>My Account</span>
              </button>
              
              <div className="dropdown-menu">
                <Link to="/cart" className="dropdown-item">
                  <img src={assets.bag_icon} alt="Orders" />
                  <span>My Orders</span>
                </Link>
                <div className="dropdown-divider"></div>
                <button onClick={logout} className="dropdown-item logout">
                  <img src={assets.logout_icon} alt="Logout" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        </div>
        
        <ul className="mobile-menu-list">
          <li>
            <Link to="/" onClick={() => setMenu("home")}>
              <span className="mobile-icon">🏠</span>
              Home
            </Link>
          </li>
          <li>
            <a 
              href="#explore-menu"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('explore-menu', 'menu');
              }}
            >
              <span className="mobile-icon">🌰</span>
              Makhana Flavors
            </a>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setMenu("about")}>
              <span className="mobile-icon">📖</span>
              Our Story
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" onClick={() => setMenu("contactUs")}>
              <span className="mobile-icon">📞</span>
              Contact Us
            </Link>
          </li>
        </ul>

        {!token && (
          <div className="mobile-auth">
            <button 
              className="mobile-signin-btn"
              onClick={() => {
                setShowLogin(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Sign In / Register
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;