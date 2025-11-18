import React, { useState, useEffect } from 'react'

// Default messages from you
const defaultWishes = [
  { id: 1, text: "Happy birthday, my dearest! You light up my world every single day. I cherish every moment with you.", author: "Your Loving Partner" },
  { id: 2, text: "To the most incredible girlfriend, may your special day be as radiant and beautiful as your smile. I adore you.", author: "Your Admirer" },
  { id: 3, text: "Every day with you is a gift. Wishing my beautiful girlfriend a birthday filled with all the happiness you deserve.", author: "Your Biggest Fan" },
]

function Wishes({ girlfriendName }) {
  const [wishes, setWishes] = useState(defaultWishes);
  const [newName, setNewName] = useState('');
  const [newMessage, setNewMessage] = useState('');

  // Load any saved messages from LocalStorage when the page loads
  useEffect(() => {
    const savedWishes = localStorage.getItem('birthdayWishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    }
  }, []);

  // Function to handle adding a new message
  const handleAddMessage = (e) => {
    e.preventDefault(); // Stop page refresh

    if (!newMessage.trim()) return; // Don't add empty messages

    const newWish = {
      id: Date.now(), // Unique ID based on time
      text: newMessage,
      author: newName || "My Love", // Default name if empty
      isNew: true // Tag to style it differently if we want
    };

    const updatedWishes = [...wishes, newWish];
    setWishes(updatedWishes);
    setNewName('');
    setNewMessage('');

    // Save to LocalStorage so it stays after refresh
    localStorage.setItem('birthdayWishes', JSON.stringify(updatedWishes));
  };

  // Function to clear added messages (optional helper)
  const handleClearStorage = () => {
    if(window.confirm("Clear all your added messages?")) {
        setWishes(defaultWishes);
        localStorage.removeItem('birthdayWishes');
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Messages From My Heart to Yours</h1>
        <p>Just a few words to express my love on your special day, {girlfriendName}.</p>
      </header>

      <div className="wishes-list">
        {wishes.map((wish, index) => (
          <div 
            key={wish.id} 
            className={`wish-card animated-wish ${wish.isNew ? 'new-wish' : ''}`} 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p>"{wish.text}"</p>
            <span className="wish-author">- {wish.author}</span>
          </div>
        ))}
      </div>

      {/* --- INTERACTIVE MESSAGE SECTION --- */}
      <div className="her-message-section">
        <h2>Leave a Note for Me?</h2>
        <p>Write a wish or a memory to add it to this wall!</p>
        
        <form onSubmit={handleAddMessage} className="message-form">
            <input 
                type="text" 
                placeholder="Your Name (Optional)" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="interactive-input"
            />
            
            <textarea 
                placeholder="Type your message here..." 
                rows="4" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="interactive-textarea"
            ></textarea>

            <div className="button-group">
                <button type="submit" className="send-btn">
                    Add to Wall ❤️
                </button>

                {/* WhatsApp Button: Replace '1234567890' with your actual phone number */}
                <a 
                  href={`https://wa.me/917505630552?text=${encodeURIComponent(newMessage+"(Sending from website)")}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                   Send via WhatsApp 💬
                </a>
            </div>
        </form>
        
        <p className="note-text" onClick={handleClearStorage} style={{cursor: 'pointer'}}>
            *(Messages added here stay on this device)*
        </p>
      </div>
    </div>
  )
}

export default Wishes