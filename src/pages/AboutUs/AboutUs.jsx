import React from "react";
import "./AboutUs.css";
import Card1 from "./AboutUsImg/card1.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <div className="about-main">
          <div className="about-content-wrapper">
            <div className="about-section">
              <h2 className="about-section-title">Our Story</h2>
              <p className="about-text">
                Welcome to our journey of bringing the finest quality products
                to your table. Our commitment to excellence and authentic taste
                has been our driving force.
              </p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-text">
                We strive to provide the healthiest and most authentic products
                while maintaining the highest standards of quality and customer
                satisfaction.
              </p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title">Our Values</h2>
              <p className="about-text">
                Quality, Authenticity, and Customer Trust form the cornerstone
                of our business. Every product we offer is carefully selected
                and quality-tested to ensure the best experience for our
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-content-container">
        <div className="image-content-wrapper">
          <div className="image-section">
            <img
              src={Card1} // Replace with your image path
              alt="About Our Store"
              className="content-image"
            />
          </div>

          <div className="content-section">
            <h2 className="content-title">Welcome to KHARA AGROTECH</h2>
            <div className="content-divider"></div>

            <p className="content-text">
              Ideal for Everyday Dishes: Bhogprada broken rice is a dream come
              true for busy cooks. Unlike whole rice varieties, it requires
              minimal soaking time, making it perfect for whipping up quick and
              delicious South Indian staples. Unlocking Flavorful Depths: The
              unique aging process enhances the inherent flavor of the rice,
              resulting in idlis and dosas that burst with taste in every bite.
              The broken rice absorbs spices and lentil batters more
              effectively, ensuring your favorite dishes are not just fluffy and
              crispy but also bursting with South Indian flavors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
