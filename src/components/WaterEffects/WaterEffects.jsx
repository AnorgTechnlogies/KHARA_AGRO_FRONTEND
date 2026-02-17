// src/components/WaterEffects/WaterEffects.jsx - HOUSE OF MAKHANA STYLE (SMALL)
import React, { useEffect } from 'react';
import './WaterEffects.css';

const WaterEffects = () => {
  useEffect(() => {
    console.log("🏠 House of Makhana - Small Stars Activated!");
    
    // Add premium keyframes
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes makhanaEntry {
        0% {
          transform: translateY(-10px) scale(0.4);
          opacity: 0;
        }
        20% {
          transform: translateY(0) scale(0.8);
          opacity: 0.6;
        }
        40% {
          transform: translateY(5px) scale(0.7);
          opacity: 0.8;
        }
        100% {
          transform: translateY(100vh) scale(0.4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    // ========== CREATE SMALL MAKHANA STARS ==========
    const createMakhanaStar = () => {
      const star = document.createElement('div');
      star.className = 'makhana-star';
      
      // Premium makhana colors
      const makhanaTypes = [
        'makhana-gold',
        'makhana-orange', 
        'makhana-bronze',
        'makhana-copper',
        'makhana-amber',
        'makhana-spice'
      ];
      
      const starType = makhanaTypes[Math.floor(Math.random() * makhanaTypes.length)];
      star.classList.add(starType);
      
      // SMALL SIZE: 6px to 12px (bohot chote)
      const size = 4 + Math.random() * 6; // 4-10px
      
      // Position with slight variation
      const left = Math.random() * 100;
      
      // Slow, graceful falling (10-15 seconds)
      const duration = 10 + Math.random() * 5;
      
      // Random rotation for natural look
      const rotation = Math.random() * 360;
      
      star.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        transform: rotate(${rotation}deg);
        animation: makhanaFloat ${duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        pointer-events: none;
        z-index: 9999;
      `;
      
      document.body.appendChild(star);
      
      // Remove after animation
      setTimeout(() => {
        if (star.parentNode) star.remove();
      }, duration * 1000);
    };
    
    // ========== CREATE AMBIENT PARTICLES (EXTRA SMALL) ==========
    const createMakhanaParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'makhana-particle';
      
      const size = 2 + Math.random() * 4; // 2-6px
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = 3 + Math.random() * 4;
      
      particle.style.cssText = `
        position: fixed;
        top: ${top}vh;
        left: ${left}vw;
        width: ${size}px;
        height: ${size}px;
        opacity: ${0.1 + Math.random() * 0.2};
        animation: makhanaTwinkle ${duration}s ease-in-out infinite;
        pointer-events: none;
        z-index: 9998;
      `;
      
      document.body.appendChild(particle);
      
      // Remove after some time
      setTimeout(() => {
        if (particle.parentNode) particle.remove();
      }, 15000);
    };
    
    // ========== CREATE SPARKLE TRAIL (SMALL) ==========
    const createSparkleTrail = (x, y) => {
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          const spark = document.createElement('div');
          spark.className = 'makhana-star makhana-gold';
          
          const size = 2 + Math.random() * 3; // 2-5px
          
          spark.style.cssText = `
            position: fixed;
            top: ${y}px;
            left: ${x}px;
            width: ${size}px;
            height: ${size}px;
            opacity: 0.4;
            transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px);
            animation: makhanaGlow 0.8s ease-out forwards;
            pointer-events: none;
            z-index: 10000;
          `;
          
          document.body.appendChild(spark);
          
          setTimeout(() => {
            if (spark.parentNode) spark.remove();
          }, 800);
        }, i * 50);
      }
    };
    
    // ========== CREATE WAVE OF STARS ==========
    const createStarWave = (count = 4) => {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          createMakhanaStar();
          
          // Occasionally create a sparkle
          if (Math.random() > 0.8) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createSparkleTrail(x, y);
          }
        }, i * 200); // 200ms gap
      }
    };
    
    // ========== AMBIENT BACKGROUND PARTICLES ==========
    const createAmbientParticles = () => {
      const particleCount = 8;
      for (let i = 0; i < particleCount; i++) {
        setTimeout(createMakhanaParticle, i * 300);
      }
    };
    
    // ========== ADD AMBIENCE CLASS TO BODY ==========
    document.body.classList.add('makhana-ambience');
    
    // ========== INITIALIZE PREMIUM EFFECTS ==========
    // Create initial wave of stars
    createStarWave(10); // 10 small stars initially
    
    // Create ambient particles
    createAmbientParticles();
    
    // ========== CONTINUOUS PREMIUM EFFECTS ==========
    // Main star interval - frequent small stars
    const mainInterval = setInterval(() => {
      createStarWave(2); // Har baar 2 small stars
    }, 1800); // Har 1.8 second mein
    
    // Occasional extra stars
    const extraInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance
        createStarWave(3); // Extra small stars!
      }
    }, 5000); // Har 5 second mein chance
    
    // Refresh ambient particles
    const particleInterval = setInterval(() => {
      createMakhanaParticle();
    }, 4000);
    
    // Subtle sparkle on mouse move (very rare)
    const handleMouseMove = (e) => {
      if (Math.random() > 0.98) { // 2% chance
        createSparkleTrail(e.clientX, e.clientY);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // ========== CLEANUP ==========
    return () => {
      clearInterval(mainInterval);
      clearInterval(extraInterval);
      clearInterval(particleInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      
      document.body.classList.remove('makhana-ambience');
      style.remove();
      
      document.querySelectorAll('.makhana-star, .makhana-particle').forEach(el => el.remove());
    };
  }, []);
  
  return null;
};

export default WaterEffects;