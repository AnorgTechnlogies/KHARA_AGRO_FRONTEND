import React, { useContext, useRef, useEffect, useState } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const nutritionFacts = [
  { label: "Calories", value: "347", unit: "kcal / 100g", color: "#d53d56" },
  { label: "Protein", value: "9.7", unit: "g", color: "#e8765a" },
  { label: "Carbs", value: "76.9", unit: "g", color: "#c8a97a" },
  { label: "Fat", value: "0.1", unit: "g", color: "#7d9b6a" },
  { label: "Fiber", value: "14.5", unit: "g", color: "#9b7ec8" },
  { label: "Calcium", value: "60", unit: "mg", color: "#60a5fa" },
];

const benefits = [
  {
    icon: "🌿",
    title: "100% Natural",
    desc: "Zero additives, zero preservatives. Straight from Bihar's lotus ponds to your hands.",
    tag: "Farm Direct",
  },
  {
    icon: "🔥",
    title: "Low Calorie",
    desc: "Only 347 kcal per 100g — guilt-free snacking for the health-conscious.",
    tag: "Diet Friendly",
  },
  {
    icon: "💪",
    title: "Protein Rich",
    desc: "9.7g protein per serving, keeping you full and energised all day long.",
    tag: "High Protein",
  },
  {
    icon: "🌾",
    title: "Gluten-Free",
    desc: "Naturally gluten-free, safe for celiac and gluten-sensitive individuals.",
    tag: "Allergen Safe",
  },
  {
    icon: "❤️",
    title: "Heart Healthy",
    desc: "Rich in magnesium and potassium, proven to support cardiovascular wellness.",
    tag: "Cardio Boost",
  },
  {
    icon: "🧘",
    title: "Anti-Ageing",
    desc: "Contains flavonoids and kaempferol — natural antioxidants that fight ageing.",
    tag: "Antioxidant",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Lotus Pond Harvest",
    desc: "Our makhana seeds are hand-harvested from pristine, pollution-free lotus ponds in Mithila, Bihar — the heartland of makhana cultivation.",
    emoji: "🪷",
  },
  {
    step: "02",
    title: "Sun Drying",
    desc: "Seeds are naturally sun-dried for 3–4 days, removing all moisture while preserving nutrients and natural crunch.",
    emoji: "☀️",
  },
  {
    step: "03",
    title: "Artisan Roasting",
    desc: "Skilled artisans roast seeds in iron kadais at precise temperatures. This ancient technique gives makhana its signature crunch.",
    emoji: "🫕",
  },
  {
    step: "04",
    title: "Flavour Crafting",
    desc: "Each batch is tossed with hand-ground spice blends, natural extracts, and real herb infusions. No artificial flavours, ever.",
    emoji: "✨",
  },
  {
    step: "05",
    title: "Quality Check",
    desc: "Every pack passes a 12-point quality inspection covering size, crunch, moisture level, and taste before leaving our facility.",
    emoji: "🔍",
  },
  {
    step: "06",
    title: "Sealed Fresh",
    desc: "Nitrogen-flushed, resealable packaging locks in freshness for up to 6 months with zero refrigeration needed.",
    emoji: "📦",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    text: "I switched from chips to Makhana House 3 months ago. Lost 4 kg and never felt deprived. The Peri Peri flavour is dangerously good!",
    avatar: "P",
    verified: true,
  },
  {
    name: "Rahul Mehta",
    city: "Bangalore",
    rating: 5,
    text: "Post-workout snack sorted. High protein, light on stomach, and my kids love it too. The Honey Glazed one is a family favourite.",
    avatar: "R",
    verified: true,
  },
  {
    name: "Dr. Ananya Iyer",
    city: "Chennai",
    rating: 5,
    text: "As a nutritionist, I recommend Makhana House to all my clients. Clean ingredients list, no hidden sugars, genuinely healthy.",
    avatar: "A",
    verified: true,
  },
];

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  const scrollContainerRef = useRef(null);
  const [activeNutrition, setActiveNutrition] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="explore-menu">

      {/* ── HERO ── */}
      <section className="em-hero">
        <div className="em-hero-bg">
          <div className="em-orb em-orb-1"></div>
          <div className="em-orb em-orb-2"></div>
          <div className="em-orb em-orb-3"></div>
          <div className="em-grain"></div>
        </div>

        <div className="em-hero-inner">
          <div className="em-hero-left">
            <span className="em-pill">🪷 Bihar's Finest · Since 2019</span>
            <h1 className="em-hero-h1">
              Snack Smart.<br />
              <em className="em-hero-em">Live Better.</em>
            </h1>
            <p className="em-hero-p">
              Makhana — the ancient Indian superfood reimagined for modern
              lifestyles. Zero guilt. Maximum crunch. Infinite flavours.
            </p>
            <div className="em-hero-tags">
              <span>🌿 Organic</span>
              <span>🚫 No Preservatives</span>
              <span>💊 Diabetic Friendly</span>
              <span>🏆 FSSAI Certified</span>
            </div>
          </div>

          <div className="em-hero-right">
            <div className="em-stat-ring">
              <div className="em-ring-circle"></div>
              <div className="em-ring-circle em-ring-2"></div>
              <div className="em-stats-grid">
                <div className="em-stat">
                  <strong>5K+</strong>
                  <span>Customers</span>
                </div>
                <div className="em-stat">
                  <strong>50+</strong>
                  <span>Flavours</span>
                </div>
                <div className="em-stat">
                  <strong>100%</strong>
                  <span>Natural</span>
                </div>
                <div className="em-stat">
                  <strong>4.9★</strong>
                  <span>Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Strip */}
        <div className="em-marquee-wrap">
          <div className="em-marquee-track">
            {[
              "🌰 Spicy Masala",
              "🍯 Honey Glazed",
              "🧂 Classic Salt",
              "🌶️ Peri Peri",
              "🫙 Pudina",
              "🧀 Cheese Herbs",
              "🌿 Tandoori",
              "🔥 Himalayan Salt",
            ]
              .concat([
                "🌰 Spicy Masala",
                "🍯 Honey Glazed",
                "🧂 Classic Salt",
                "🌶️ Peri Peri",
                "🫙 Pudina",
                "🧀 Cheese Herbs",
                "🌿 Tandoori",
                "🔥 Himalayan Salt",
              ])
              .map((item, i) => (
                <span key={i} className="em-marquee-item">
                  {item} <span className="em-marquee-dot">◆</span>
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ── NUTRITION FACTS ── */}
      <section className="em-nutrition">
        <div className="em-section-head">
          <span className="em-eyebrow">Science Backed</span>
          <h2 className="em-section-h2">
            What's Inside <em>Every Bite</em>
          </h2>
          <p className="em-section-sub">
            Per 100g of plain makhana — nature's most complete snack
          </p>
        </div>

        <div className="em-nutrition-grid">
          {nutritionFacts.map((fact, i) => (
            <div
              key={i}
              className={`em-nut-card ${activeNutrition === i ? "active" : ""}`}
              onMouseEnter={() => setActiveNutrition(i)}
              onMouseLeave={() => setActiveNutrition(null)}
              style={{ "--nut-color": fact.color }}
            >
              <div className="em-nut-bar-wrap">
                <div
                  className="em-nut-bar"
                  style={{ width: `${Math.min((parseFloat(fact.value) / 100) * 100, 100)}%` }}
                ></div>
              </div>
              <div className="em-nut-value">{fact.value}</div>
              <div className="em-nut-unit">{fact.unit}</div>
              <div className="em-nut-label">{fact.label}</div>
            </div>
          ))}
        </div>

        <div className="em-nut-note">
          * Values based on USDA nutritional data for Euryale ferox (Fox Nuts)
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="em-benefits">
        <div className="em-section-head">
          <span className="em-eyebrow">Why Makhana</span>
          <h2 className="em-section-h2">
            The <em>Superfood</em> Advantage
          </h2>
        </div>

        <div className="em-benefits-grid">
          {benefits.map((b, i) => (
            <div className="em-benefit-card" key={i} style={{ "--delay": `${i * 0.08}s` }}>
              <div className="em-benefit-top">
                <span className="em-benefit-icon">{b.icon}</span>
                <span className="em-benefit-tag">{b.tag}</span>
              </div>
              <h3 className="em-benefit-title">{b.title}</h3>
              <p className="em-benefit-desc">{b.desc}</p>
              <div className="em-benefit-line"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FARM TO PACK JOURNEY ── */}
      <section className="em-journey">
        <div className="em-journey-bg"></div>
        <div className="em-section-head em-section-head--light">
          <span className="em-eyebrow em-eyebrow--light">Transparency First</span>
          <h2 className="em-section-h2 em-h2--light">
            Farm to <em>Pack</em> — Our Journey
          </h2>
          <p className="em-section-sub em-sub--light">
            Every step is crafted with care, tradition, and uncompromising quality
          </p>
        </div>

        <div className="em-journey-layout">
          {/* Steps nav */}
          <div className="em-journey-steps">
            {journeySteps.map((step, i) => (
              <button
                key={i}
                className={`em-step-btn ${activeStep === i ? "active" : ""}`}
                onClick={() => setActiveStep(i)}
              >
                <span className="em-step-num">{step.step}</span>
                <span className="em-step-label">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="em-journey-detail">
            <div className="em-journey-emoji">{journeySteps[activeStep].emoji}</div>
            <div className="em-journey-step-num">{journeySteps[activeStep].step}</div>
            <h3 className="em-journey-title">{journeySteps[activeStep].title}</h3>
            <p className="em-journey-desc">{journeySteps[activeStep].desc}</p>
            <div className="em-journey-progress">
              {journeySteps.map((_, i) => (
                <span
                  key={i}
                  className={`em-progress-dot ${activeStep === i ? "active" : ""}`}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLAVOURS EXPLORER ── */}
    

      {/* ── TESTIMONIALS ── */}
      <section className="em-testimonials">
        <div className="em-section-head">
          <span className="em-eyebrow">Real Reviews</span>
          <h2 className="em-section-h2">
            Loved by <em>Thousands</em>
          </h2>
        </div>

        <div className="em-testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="em-testi-card" key={i}>
              <div className="em-testi-top">
                <div className="em-testi-avatar">{t.avatar}</div>
                <div className="em-testi-meta">
                  <div className="em-testi-name">
                    {t.name}
                    {t.verified && <span className="em-verified">✓</span>}
                  </div>
                  <div className="em-testi-city">{t.city}</div>
                </div>
                <div className="em-testi-stars">{"★".repeat(t.rating)}</div>
              </div>
              <p className="em-testi-text">"{t.text}"</p>
              <div className="em-testi-quote">"</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="em-cta">
        <div className="em-cta-orb"></div>
        <div className="em-cta-inner">
          <span className="em-eyebrow em-eyebrow--light">Limited Time</span>
          <h2 className="em-cta-h2">
            Get 20% Off Your <em>First Order</em>
          </h2>
          <p className="em-cta-p">
            Use code <strong>MAKHANA20</strong> at checkout. Free shipping on orders above ₹499.
          </p>
          <div className="em-cta-btns">
            <button className="em-cta-primary">Shop Now →</button>
            <button className="em-cta-secondary">View All Flavours</button>
          </div>
          <div className="em-cta-trust">
            <span>🔒 Secure Payment</span>
            <span>🚚 Free Delivery</span>
            <span>↩️ Easy Returns</span>
            <span>🌿 100% Natural</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="em-divider">
        <span>◆ MAKHANA HOUSE ◆</span>
      </div>
    </div>
  );
};

export default ExploreMenu;