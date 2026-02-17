// ContactUs.jsx
import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle } from "lucide-react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    errors: {},
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, errors: {} }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormState((prev) => ({ ...prev, isSubmitted: true }));
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        errors: { submit: "Failed to submit form. Please try again." },
      }));
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: undefined },
      }));
    }
  };

  return (
    <div className={`makhana-contact-page ${isVisible ? "visible" : ""}`}>
      {/* Hero Banner - Image preserved as is */}
      <div className="contact-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          {/* Banner content is empty as per your requirement */}
        </div>
      </div>

      {/* Floating Stats */}
      <div className="floating-stats">
        <div className="stat-bubble">
          <span className="stat-bubble-number">24/7</span>
          <span className="stat-bubble-label">Support</span>
        </div>
        <div className="stat-bubble">
          <span className="stat-bubble-number">500+</span>
          <span className="stat-bubble-label">Happy Clients</span>
        </div>
        <div className="stat-bubble">
          <span className="stat-bubble-number">100%</span>
          <span className="stat-bubble-label">Satisfaction</span>
        </div>
      </div>

      {/* Contact Info Cards - Modern Design */}
      <div className="contact-info-container">
        {[
          {
            icon: <MapPin className="contact-icon" />,
            title: "Visit Our Farm",
            lines: [
              "Ramchandra Bada, Infront of Grampanchayat",
              "Village Khara, Tehsil Kirnapur",
              "District Balaghat (MP), INDIA - 481226",
            ],
            gradient: "linear-gradient(135deg, #E63946, #FF8C42)"
          },
          {
            icon: <Phone className="contact-icon" />,
            title: "Call Us Anytime",
            lines: ["+91 91742 07069", "+91 80098 00980"],
            gradient: "linear-gradient(135deg, #FF8C42, #E63946)"
          },
          {
            icon: <Mail className="contact-icon" />,
            title: "Email Us",
            lines: ["makhanahouse@gmail.com", "support@makhanahouse.com"],
            gradient: "linear-gradient(135deg, #E63946, #FF8C42)"
          },
          {
            icon: <Clock className="contact-icon" />,
            title: "Working Hours",
            lines: ["24/7 Customer Support", "Orders processed daily"],
            gradient: "linear-gradient(135deg, #FF8C42, #E63946)"
          },
        ].map((card, index) => (
          <div
            key={index}
            className="modern-contact-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-glow"></div>
            <div className="icon-wrapper" style={{ background: card.gradient }}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="contact-grid-container">
        {/* Form Section */}
        <div className="form-wrapper">
          <div className="form-header">
            <span className="form-badge">Get In Touch</span>
            <h2>We'd Love to <span className="gradient-text">Hear From You</span></h2>
            <p>Have questions about our makhana products? We're here to help!</p>
          </div>

          {formState.isSubmitted ? (
            <div className="success-animation">
              <div className="success-checkmark">
                <CheckCircle size={48} />
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-grid">
                <div className={`form-group ${formState.errors.name ? "error" : ""}`}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="form-input"
                  />
                  {formState.errors.name && (
                    <div className="error-tooltip">
                      <AlertCircle size={14} />
                      {formState.errors.name}
                    </div>
                  )}
                </div>

                <div className={`form-group ${formState.errors.email ? "error" : ""}`}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="form-input"
                  />
                  {formState.errors.email && (
                    <div className="error-tooltip">
                      <AlertCircle size={14} />
                      {formState.errors.email}
                    </div>
                  )}
                </div>

                <div className={`form-group ${formState.errors.phone ? "error" : ""}`}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="form-input"
                  />
                  {formState.errors.phone && (
                    <div className="error-tooltip">
                      <AlertCircle size={14} />
                      {formState.errors.phone}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (Optional)"
                    className="form-input"
                  />
                </div>
              </div>

              <div className={`form-group full-width ${formState.errors.message ? "error" : ""}`}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  className="form-textarea"
                ></textarea>
                {formState.errors.message && (
                  <div className="error-tooltip">
                    <AlertCircle size={14} />
                    {formState.errors.message}
                  </div>
                )}
              </div>

              {formState.errors.submit && (
                <div className="submit-error">
                  <AlertCircle size={16} />
                  {formState.errors.submit}
                </div>
              )}

              <button
                type="submit"
                className={`modern-submit-btn ${formState.isSubmitting ? "submitting" : ""}`}
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="btn-icon" size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Map Section */}
        <div className="map-wrapper">
          <div className="map-header">
            <h3>Visit Our <span className="gradient-text">Location</span></h3>
            <p>Come visit our farm and experience the freshness</p>
          </div>
          <div className="map-container">
            <iframe
              className="modern-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29662.95144675069!2d80.17153590481121!3d21.668955452531485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a5167501e9d7d%3A0xa0bc4f505d654de5!2sKhara%2C%20Madhya%20Pradesh%20481226!5e0!3m2!1sen!2sin!4v1737529814015!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Makhana House Location"
            ></iframe>
          </div>
          
          {/* Quick Info Tags */}
          <div className="location-tags">
            <span className="location-tag">🚚 Free Shipping</span>
            <span className="location-tag">🌿 Organic Farm</span>
            <span className="location-tag">⭐ 5 Star Service</span>
          </div>
        </div>
      </div>

      {/* FAQ Preview Section */}
      <div className="faq-preview">
        <h3>Quick <span className="gradient-text">Answers</span></h3>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>What are your delivery charges?</h4>
            <p>Free delivery on orders above ₹500</p>
          </div>
          <div className="faq-item">
            <h4>Do you ship internationally?</h4>
            <p>Currently shipping across India only</p>
          </div>
          <div className="faq-item">
            <h4>How do I track my order?</h4>
            <p>You'll receive tracking info via SMS/Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;