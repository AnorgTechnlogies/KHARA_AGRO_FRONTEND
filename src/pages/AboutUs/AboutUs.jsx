import React from "react";
import "./AboutUs.css";
import Card1 from "./AboutUsImg/card1.jpg";
import { Leaf, Award, Heart, Truck, Shield, Clock } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <div className="about-banner">
        <h1>Our Story</h1>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50+</span>
            <span className="stat-label">Organic Farms</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Natural</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Customer Support</span>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-main">
          <div className="about-content-wrapper">
            <div className="about-section">
              <div className="section-icon">🌰</div>
              <h2 className="about-section-title">Our Story</h2>
              <p className="about-text">
                Welcome to Makhana House, where nature's finest snack meets 
                modern wellness. Our journey began with a simple realization — 
                that the healthiest snacks are often the simplest. We set out to 
                bring the purest, most flavorful makhana (fox nuts) from the 
                organic farms of Madhya Pradesh to health-conscious families 
                across India.
              </p>
            </div>

            <div className="about-section">
              <div className="section-icon">🎯</div>
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-text">
                At Makhana House, our mission is to make healthy snacking 
                accessible, enjoyable, and sustainable. We're committed to 
                delivering premium quality makhana that's 100% natural, 
                gluten-free, and packed with nutrients. Every packet we sell 
                represents our promise of purity, quality, and taste.
              </p>
            </div>

            <div className="about-section">
              <div className="section-icon">💚</div>
              <h2 className="about-section-title">Our Values</h2>
              <p className="about-text">
                Quality, authenticity, and customer well-being are at the heart 
                of everything we do. We believe in transparent sourcing, ethical 
                partnerships with local farmers, and delivering products that 
                you can trust. Our makhana is carefully processed to retain its 
                natural goodness while offering the perfect crunch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Content Section - Image exactly as you want it */}
      <div className="image-content-container">
        <div className="image-content-wrapper">
          <div className="image-section">
            <img
              src={Card1}
              alt="Premium Makhana Collection"
              className="content-image"
            />
          </div>

          <div className="content-section">
            <span className="content-badge">Since 2020</span>
            <h2 className="content-title">Welcome to <span className="gradient-text">Makhana House</span></h2>
            <div className="content-divider"></div>

            <p className="content-text">
              Discover the magic of makhana – nature's perfect snack. Our journey 
              began in the heart of Madhya Pradesh, where we partnered with local 
              farmers who share our passion for quality. Each piece of makhana we 
              offer is carefully harvested, naturally processed, and packed with 
              the goodness that nature intended.
            </p>

            <p className="content-text">
              What makes our makhana special? It's the perfect balance of taste 
              and nutrition. Low in calories, high in protein, and completely 
              gluten-free, our makhana is crafted for those who refuse to 
              compromise on health or flavor. From classic salted to exciting 
              new flavors, every variant is a celebration of quality.
            </p>

            {/* Feature Grid */}
            <div className="feature-grid">
              <div className="feature-item">
                <Leaf className="feature-icon" size={24} />
                <span>100% Organic</span>
              </div>
              <div className="feature-item">
                <Award className="feature-icon" size={24} />
                <span>Premium Quality</span>
              </div>
              <div className="feature-item">
                <Heart className="feature-icon" size={24} />
                <span>Made with Love</span>
              </div>
              <div className="feature-item">
                <Truck className="feature-icon" size={24} />
                <span>Free Shipping</span>
              </div>
              <div className="feature-item">
                <Shield className="feature-icon" size={24} />
                <span>Quality Assured</span>
              </div>
              <div className="feature-item">
                <Clock className="feature-icon" size={24} />
                <span>Fresh Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Makhana Section */}
      <div className="why-makhana-section">
        <div className="why-makhana-container">
          <h2 className="why-title">Why <span className="gradient-text">Makhana?</span></h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌿</div>
              <h3>100% Natural</h3>
              <p>No preservatives, no additives – just pure nature</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔥</div>
              <h3>Low Calorie</h3>
              <p>Perfect for guilt-free snacking anytime</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>High Protein</h3>
              <p>Rich in essential nutrients and amino acids</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌾</div>
              <h3>Gluten-Free</h3>
              <p>Safe for everyone to enjoy</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <h3>Heart Healthy</h3>
              <p>Good for cardiovascular health</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Energy Boosting</h3>
              <p>Natural energy without the crash</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="testimonial-container">
          <h2 className="testimonial-title">What Our <span className="gradient-text">Customers Say</span></h2>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "I've tried many makhana brands, but Makhana House is truly special. 
              The quality is consistent, the flavors are amazing, and knowing it's 
              sourced from organic farms makes me feel good about my snacking choices."
            </p>
            <div className="testimonial-author">
              <strong>- Priya Sharma</strong>
              <span>Happy Customer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;