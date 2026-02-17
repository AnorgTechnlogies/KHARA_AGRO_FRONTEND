import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list = [],
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge,
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMsg, setPromoMsg] = useState('');

  const handleDecrement = (id) => {
    if (cartItems[id] > 1) {
      removeFromCart(id);
    }
  };

  const handlePromo = () => {
    if (promoCode.trim().toUpperCase() === 'MAKHANA20') {
      setPromoApplied(true);
      setPromoMsg('🎉 20% discount applied!');
    } else {
      setPromoApplied(false);
      setPromoMsg('❌ Invalid promo code.');
    }
  };

  const cartItemsList = Array.isArray(food_list)
    ? food_list.filter((item) => cartItems[item._id] > 0)
    : [];

  const subtotal = getTotalCartAmount();
  const delivery = subtotal === 0 ? 0 : deliveryCharge;
  const total = subtotal === 0 ? 0 : subtotal + delivery;
  const itemCount = cartItemsList.reduce((acc, item) => acc + cartItems[item._id], 0);

  return (
    <div className="cart">

      {/* ── Page Header ── */}
      <div className="cart-header">
        <div className="cart-header-left">
          <span className="cart-eyebrow">🛒 Your Order</span>
          <h1 className="cart-title">Shopping <em>Cart</em></h1>
          {itemCount > 0 && (
            <p className="cart-count">{itemCount} item{itemCount !== 1 ? 's' : ''} in your cart</p>
          )}
        </div>
        <button className="cart-continue-btn" onClick={() => navigate('/')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Continue Shopping
        </button>
      </div>

      {/* ── Main Layout ── */}
      <div className="cart-layout">

        {/* ── LEFT: Items ── */}
        <div className="cart-items-panel">

          {/* Table header */}
          <div className="cart-table-head">
            <span>Product</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Total</span>
            <span></span>
          </div>

          {/* Items */}
          <div className="cart-items-list">
            {cartItemsList.length > 0 ? (
              cartItemsList.map((item, index) => (
                <div
                  className="cart-item-row"
                  key={item._id}
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  {/* Product */}
                  <div className="cart-item-product">
                    <div className="cart-item-img-wrap">
                      <img
                        src={`${url}/images/${item.image}`}
                        alt={item.name}
                        className="cart-item-img"
                      />
                    </div>
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <span className="cart-item-tag">🌿 Natural Snack</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="cart-item-price">
                    <span>{currency}{item.price}</span>
                  </div>

                  {/* Quantity */}
                  <div className="cart-item-qty">
                    <button
                      className="cart-qty-btn"
                      onClick={() => handleDecrement(item._id)}
                      disabled={cartItems[item._id] === 1}
                      aria-label="Decrease"
                    >−</button>
                    <span className="cart-qty-val">{cartItems[item._id]}</span>
                    <button
                      className="cart-qty-btn"
                      onClick={() => addToCart(item._id)}
                      aria-label="Increase"
                    >+</button>
                  </div>

                  {/* Line total */}
                  <div className="cart-item-total">
                    <span>{currency}{item.price * cartItems[item._id]}</span>
                  </div>

                  {/* Remove */}
                  <button
                    className="cart-remove-btn"
                    onClick={() => removeFromCart(item._id)}
                    aria-label="Remove item"
                    title="Remove"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="cart-empty">
                <div className="cart-empty-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some delicious makhana snacks to get started!</p>
                <button className="cart-shop-btn" onClick={() => navigate('/')}>
                  Browse Products
                </button>
              </div>
            )}
          </div>

          {/* Promo Code */}
          {cartItemsList.length > 0 && (
            <div className="cart-promo">
              <div className="cart-promo-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
                Have a promo code?
              </div>
              <div className="cart-promo-row">
                <input
                  type="text"
                  placeholder="Enter code (try MAKHANA20)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className={`cart-promo-input ${promoApplied ? 'applied' : ''}`}
                  onKeyDown={(e) => e.key === 'Enter' && handlePromo()}
                />
                <button className="cart-promo-btn" onClick={handlePromo}>
                  Apply
                </button>
              </div>
              {promoMsg && (
                <p className={`cart-promo-msg ${promoApplied ? 'success' : 'error'}`}>
                  {promoMsg}
                </p>
              )}
            </div>
          )}
        </div>

        {/* ── RIGHT: Summary ── */}
        {cartItemsList.length > 0 && (
          <div className="cart-summary">
            <div className="cart-summary-inner">
              <h2 className="cart-summary-title">Order Summary</h2>

              {/* Mini item list */}
              <div className="cart-summary-items">
                {cartItemsList.map((item) => (
                  <div key={item._id} className="cart-summary-row">
                    <span className="cart-summary-item-name">
                      {item.name}
                      <span className="cart-summary-qty">×{cartItems[item._id]}</span>
                    </span>
                    <span>{currency}{item.price * cartItems[item._id]}</span>
                  </div>
                ))}
              </div>

              <div className="cart-summary-divider"></div>

              {/* Totals */}
              <div className="cart-totals">
                <div className="cart-totals-row">
                  <span>Subtotal</span>
                  <span>{currency}{subtotal}</span>
                </div>
                <div className="cart-totals-row">
                  <span>Delivery</span>
                  <span className={delivery === 0 ? 'cart-free' : ''}>
                    {delivery === 0 ? 'FREE' : `${currency}${delivery}`}
                  </span>
                </div>
                {promoApplied && (
                  <div className="cart-totals-row cart-totals-discount">
                    <span>Promo (MAKHANA20)</span>
                    <span>−{currency}{Math.round(subtotal * 0.2)}</span>
                  </div>
                )}
              </div>

              <div className="cart-summary-divider"></div>

              <div className="cart-grand-total">
                <span>Total</span>
                <span>
                  {currency}
                  {promoApplied
                    ? Math.round(total - subtotal * 0.2)
                    : total}
                </span>
              </div>

              {/* Trust signals */}
              <div className="cart-trust">
                <span>🔒 Secure Checkout</span>
                <span>🚚 Free over ₹499</span>
                <span>↩️ Easy Returns</span>
              </div>

              <button
                className="cart-checkout-btn"
                onClick={() => navigate('/order')}
              >
                Proceed to Checkout
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <p className="cart-checkout-note">
                By proceeding you agree to our terms & conditions
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;