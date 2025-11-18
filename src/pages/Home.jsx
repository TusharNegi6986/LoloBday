import React, { useState, useEffect } from 'react'
import HeartsBackground from '../components/HeartsBackground'

// --- CONFIGURATION: Add your image paths here ---
const slideImages = [
  "/Images/SlideShow1.jpg", // Make sure these exist in public/slideshow/
"/Images/SlideShow2.jpg",
"/Images/SlideShow3.jpg",
"/Images/SlideShow4.jpg",
"/Images/SlideShow5.jpg",
"/Images/SlideShow6.jpg",
"/Images/SlideShow7.jpg",
"/Images/SlideShow8.jpg",
"/Images/SlideShow9.jpg",
"/Images/SlideShow10.jpg",
  // Add more if you like!
];

function Home({ girlfriendName }) {
  const [showCake, setShowCake] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Slideshow Logic ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000); // Change slide every 4000ms (4 seconds)

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, []);

  const handleHeartClick = () => {
    setShowCake(!showCake);
  };

  return (
    <>
      <HeartsBackground />
      <div className="container home-container">
        <header className="main-header animated-header">
          <h1>Happy Birthday, <span className="highlight-name">{girlfriendName}</span>!</h1>
          <p className="subtitle">My love, my everything. Wishing you endless joy!</p>
          
          {/* --- SLIDESHOW SECTION --- */}
          <div className="slideshow-wrapper animated-photo">
            <div className="slideshow-container">
              {slideImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt={`Slide ${index + 1}`}
                  className={`slide-image ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>
            
            {/* Optional: Little dots at the bottom to show which slide is active */}
            <div className="slide-dots">
              {slideImages.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)} // Allow manual clicking
                ></span>
              ))}
            </div>
          </div>
          {/* ------------------------- */}
          
          <p className="intro-text animated-text">
            This little corner of the internet is dedicated to celebrating the most amazing person in my life – you. 
            Every moment with you is a cherished memory.
          </p>
          
          <div className="heart-button-area">
            <button className="animated-heart-button" onClick={handleHeartClick}>
              ❤️ Click my heart ❤️
            </button>
            {showCake && <div className="animated-cake">🎂</div>}
          </div>

        </header>
      </div>
    </>
  )
}

export default Home