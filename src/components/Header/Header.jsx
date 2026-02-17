import React from 'react';
import './Header.css';
import Scroll from "../../pages/scroll"


const Header = () => {
  return (
    <>
      <div className='header'>
        <div className="navbar">
          <div className="nav-actions">
            {/* Navigation actions can go here */}
          </div>
        </div>
        
        <div className="header-content-wrapper">
          {/* Left Side - Content */}
          <div className='header-left'>
            <div className='header-contents'>
              <h1 className="tagline">Premium Quality <span className="highlight">Makhana</span> Snacks</h1>
              <p className="description">Discover the finest roasted, spiced, and flavored fox nuts crafted with traditional recipes and modern innovation. Our makhanas are sourced directly from farmers for maximum freshness and nutritional value.</p>
              <div className="cta-buttons">
                <button className="primary-btn">Shop Now</button>
                <button className="secondary-btn">Explore Flavors</button>
              </div>
            </div>
            
            <div className="header-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Product Variants</p>
              </div>
              <div className="stat">
                <h3>10K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Natural Ingredients</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="header-right">
            <div className="header-image">
              <img 
                src="../../../public/123.png" 
                alt="Makhana Snacks"
                className="makhana-image"
              />
              <div className="image-overlay">
                <div className="overlay-text">
                  <span className="overlay-title">Farm Fresh</span>
                  <span className="overlay-subtitle">Direct from Farmers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Products Section - unchanged */}
      <section className="featured-section">
        <h2 className="section-title">Our <span className="highlight">Featured</span> Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-badge">Bestseller</div>
            <div className="product-image" style={{backgroundColor: "#e8f4ff"}}>
              <div className="product-flavor">Masala</div>
            </div>
            <h3 className="product-name">Spicy Masala Makhana</h3>
            <p className="product-desc">Traditional Indian spices roasted to perfection</p>
            <div className="product-price">
              <span className="current-price">₹199</span>
              <span className="original-price">₹249</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          
          <div className="product-card">
            <div className="product-badge trending">Trending</div>
            <div className="product-image" style={{backgroundColor: "#fff0f0"}}>
              <div className="product-flavor">Salted</div>
            </div>
            <h3 className="product-name">Classic Salted Makhana</h3>
            <p className="product-desc">Lightly salted for a healthy crunchy snack</p>
            <div className="product-price">
              <span className="current-price">₹179</span>
              <span className="original-price">₹229</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          
          <div className="product-card">
            <div className="product-badge new">New</div>
            <div className="product-image" style={{backgroundColor: "#f5f0ff"}}>
              <div className="product-flavor">Peri Peri</div>
            </div>
            <h3 className="product-name">Peri Peri Makhana</h3>
            <p className="product-desc">Tangy and spicy with a peri-peri twist</p>
            <div className="product-price">
              <span className="current-price">₹219</span>
              <span className="original-price">₹279</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          
          <div className="product-card">
            <div className="product-badge">Sweet</div>
            <div className="product-image" style={{backgroundColor: "#fff9e6"}}>
              <div className="product-flavor">Honey</div>
            </div>
            <h3 className="product-name">Honey Glazed Makhana</h3>
            <p className="product-desc">Sweet and crunchy with natural honey coating</p>
            <div className="product-price">
              <span className="current-price">₹239</span>
              <span className="original-price">₹299</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
      <Scroll />
    </>
  );
}

export default Header;