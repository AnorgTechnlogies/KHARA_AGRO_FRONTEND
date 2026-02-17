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

        {/* Decorative floating seeds */}
        <div className="seed seed-1">◉</div>
        <div className="seed seed-2">◉</div>
        <div className="seed seed-3">◉</div>
        <div className="seed seed-4">◉</div>
        <div className="seed seed-5">◉</div>
        <div className="seed seed-6">◉</div>

        {/* Hero grain overlay */}
        <div className="grain-overlay"></div>

        <div className="header-content-wrapper">
          {/* Left Side - Content */}
          <div className='header-left'>
            <div className='header-contents'>
              <div className="eyebrow-label">
                <span className="dot-pulse"></span>
                Farm to Snack — Since 2019
              </div>
              <h1 className="tagline">
                Premium Quality <br />
                <span className="highlight">Makhana</span>
                <span className="tagline-accent"> Snacks</span>
              </h1>
              <p className="description">
                Discover the finest roasted, spiced, and flavored fox nuts crafted with traditional recipes and modern innovation. Our makhanas are sourced directly from farmers for maximum freshness and nutritional value.
              </p>
              <div className="cta-buttons">
                <button className="primary-btn">
                  <span className="btn-inner">Shop Now</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="secondary-btn">Explore Flavors</button>
              </div>
            </div>

            <div className="header-stats">
              <div className="stat">
                <h3>50<span className="stat-plus">+</span></h3>
                <p>Product Variants</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <h3>10K<span className="stat-plus">+</span></h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <h3>100<span className="stat-plus">%</span></h3>
                <p>Natural Ingredients</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="header-right">
            <div className="image-ring image-ring-outer"></div>
            <div className="image-ring image-ring-inner"></div>
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

            {/* Floating nutrition badge */}
            <div className="nutrition-badge">
              <div className="nutrition-icon">🌿</div>
              <div className="nutrition-info">
                <span className="nutrition-value">Low Calorie</span>
                <span className="nutrition-label">Guilt-free snack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="featured-pattern"></div>
        <div className="featured-blob"></div>
        <div className="featured-blob-2"></div>

        <div className="featured-container">

          {/* Section Header */}
          <div className="section-header">
            <span className="section-badge">✦ Premium Collection ✦</span>
            <h2 className="section-title">
              Our <span className="gradient-text">Featured</span> Products
            </h2>
            <p className="section-subtitle">Handcrafted with love, packed with nutrition</p>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar">
            <div className="filter-left">
              <button className="filter-btn">
                Sort
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="chevron-icon">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="filter-btn">
                Availability
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="chevron-icon">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="filter-btn">
                Price
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="chevron-icon">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="filter-right">
              <span className="product-count">10 products</span>
              <div className="view-toggle">
                <button className="view-toggle-btn active" title="Grid view">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                </button>
                <button className="view-toggle-btn" title="List view">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <rect x="3" y="4" width="18" height="3" rx="1"/><rect x="3" y="10.5" width="18" height="3" rx="1"/>
                    <rect x="3" y="17" width="18" height="3" rx="1"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">

            {/* Card 1 - Spicy Masala */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">20% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/333b231c-cfcc-4807-ae4d-47fa96e282ce.__CR0,0,3880,2400_PT0_SX970_V1___.jpg" alt="Spicy Masala Makhana" className="pc-img" />
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Spicy Masala Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹199</span>
                  <span className="pc-original">₹249</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Classic Salted */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">22% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400" alt="Classic Salted Makhana" className="pc-img" />
                <div className="pc-trending-strip">📈 Trending</div>
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Classic Salted Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹179</span>
                  <span className="pc-original">₹229</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Peri Peri */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge pc-new-badge">NEW</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://m.media-amazon.com/images/I/91ZfrPkPQkL.jpg" alt="Peri Peri Makhana" className="pc-img" />
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Peri Peri Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹219</span>
                  <span className="pc-original">₹279</span>
                </div>
              </div>
            </div>

            {/* Card 4 - Honey Glazed */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">20% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1606312619071-d5b523f564b2?w=400" alt="Honey Glazed Makhana" className="pc-img" />
                <div className="pc-trending-strip">⭐ Bestseller</div>
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Honey Glazed Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹239</span>
                  <span className="pc-original">₹299</span>
                </div>
              </div>
            </div>

            {/* Card 5 - Cheese & Herbs */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">18% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400" alt="Cheese & Herbs Makhana" className="pc-img" />
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Cheese &amp; Herbs Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹209</span>
                  <span className="pc-original">₹255</span>
                </div>
              </div>
            </div>

            {/* Card 6 - Himalayan Salt */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge pc-new-badge">NEW</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400" alt="Himalayan Salt Makhana" className="pc-img" />
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Himalayan Salt Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹189</span>
                  <span className="pc-original">₹230</span>
                </div>
              </div>
            </div>

            {/* Card 7 - Pudina */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">25% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400" alt="Pudina Makhana" className="pc-img" />
                <div className="pc-trending-strip">🔥 Hot Deal</div>
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Pudina Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹169</span>
                  <span className="pc-original">₹225</span>
                </div>
              </div>
            </div>

            {/* Card 8 - Party Mix Pack */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">15% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400" alt="Party Mix Pack" className="pc-img" />
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Party Mix Pack — 6 Flavors</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹549</span>
                  <span className="pc-original">₹649</span>
                </div>
              </div>
            </div>

            {/* Card 9 - Tandoori */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">21% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" alt="Tandoori Makhana" className="pc-img" />
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Tandoori Makhana</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹229</span>
                  <span className="pc-original">₹289</span>
                </div>
              </div>
            </div>

            {/* Card 10 - Starter Value Pack */}
            <div className="product-card">
              <div className="pc-image-area">
                <span className="pc-discount-badge">30% OFF</span>
                <button className="pc-wishlist-btn" title="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" alt="Starter Value Pack" className="pc-img" />
                <div className="pc-trending-strip">💰 Best Value</div>
                <button className="pc-cart-quick-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
              <div className="pc-info">
                <h3 className="pc-name">Starter Value Pack</h3>
                <div className="pc-price-row">
                  <span className="pc-price">₹349</span>
                  <span className="pc-original">₹499</span>
                </div>
              </div>
            </div>

          </div>

          {/* View All Button */}
          <div className="view-all-container">
            <button className="view-all-btn">
              <span>Explore All Flavors</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </section>

      <Scroll />
    </>
  );
}

export default Header;