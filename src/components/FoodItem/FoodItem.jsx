import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ image, name, price, desc, id }) => {
  const { addToCart, url, currency } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationQuantity, setNotificationQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(id);
    const newQuantity = notificationQuantity + 1;
    setNotificationQuantity(newQuantity);
    setShowNotification(true);
    // Removed setTimeout to keep notification visible continuously
  };

  const handleBuyNow = () => {
    addToCart(id);       // Add item to cart
    navigate("/cart");   // Redirect to cart page
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
        />

        {/* Notification popup for added quantity - positioned at bottom of image */}
        {showNotification && (
          <div className="add-notification">
            +{notificationQuantity}
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className="food-item-desc">{desc}</p>

        <p className="food-item-price">
          {currency}
          {price}
        </p>

        {/* Buttons container for side-by-side layout */}
        <div className="buttons-container">
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;