import React, { useState, useEffect } from 'react'

// --- CONFIGURATION ---
// 1. Set your start date here (Year, Month (0-11), Day)
const startDate = new Date(2025, 8, 28); // Example: April 15, 2022 (Month is 0-indexed: Jan=0, Apr=3)

// 2. Add your events with images!
const timelineEvents = [
  { 
    year: "2025", 
    date: "September 15", 
    title: "we met online", 
    description: "Saw you on comment section and entered in your dm hehe",
    image: "/Images/img1.jpg" // Optional: Link to a photo in public folder
  },
  { 
    year: "2025", 
    date: "September 21", 
    title: "The Day We Met", 
    description: "It all started with a simple 'hello' that changed everything. My heart knew it then.",
    image: "/Images/img1.jpg" // Optional: Link to a photo in public folder
  },
  { 
    year: "2025", 
    date: "September 28", 
    title: "We became one", 
    description: "You gave me that letter and accepted my love for you and I became yours",
    image: "/Images/Proposal.jpg" // No image for this one
  },
  { 
    year: "2025", 
    date: "October 28", 
    title: "Our First Month Anniversary", 
    description: "I messed up ,slept without wishing , disappointed you and I promised to never disappoint you again",
    image: "/Images/sep28.png"
  },
  { 
    year: "2025", 
    date: "November 19", 
    title: "My Baby Doll's Birthday", 
    description: "My Baby turns 17 today ",
    image: "/Images/Home.jpg"
  },

];

function Story({ girlfriendName }) {
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Logic for the "Time Together" Counter
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now - startDate;
// Result: Positive number (milliseconds elapsed since you met)
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Our Beautiful Journey, {girlfriendName}</h1>
        <p>Every second with you is precious.</p>
      </header>

      {/* --- THE LIVE COUNTER --- */}
      <div className="timer-section animated-text">
        <h2>We've been in love for:</h2>
        <div className="timer-grid">
            <div className="timer-box">
                <span className="timer-number">{timeTogether.days}</span>
                <span className="timer-label">Days</span>
            </div>
            <div className="timer-box">
                <span className="timer-number">{timeTogether.hours}</span>
                <span className="timer-label">Hours</span>
            </div>
            <div className="timer-box">
                <span className="timer-number">{timeTogether.minutes}</span>
                <span className="timer-label">Mins</span>
            </div>
            <div className="timer-box">
                <span className="timer-number">{timeTogether.seconds}</span>
                <span className="timer-label">Secs</span>
            </div>
        </div>
      </div>

      {/* --- THE TIMELINE --- */}
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item animated-timeline-item" style={{ animationDelay: `${index * 0.3}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              
              {/* Show Image if it exists */}
              {event.image && (
                <img src={event.image} alt={event.title} className="timeline-img" />
              )}

              <h3>{event.title} <span className="timeline-date">({event.date})</span></h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Story