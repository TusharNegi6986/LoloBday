import React, { useState } from 'react'

// --- UPDATE THIS LIST ---
// Add 'type: "video"' for videos, and 'type: "image"' for photos.
const memories = [
   { id: 1, src: "/Images/img1.jpg", caption: "Our first adventure" },
   { id: 2, src: "/Images/FirstDate.jpg", caption: "My First aloo paratha for you" },
   { id: 4,type: 'video',src: "/Images/DearGarden2.mp4", caption: "Capturing our Dear Garden Moments" },
   { id: 3,type: 'video',src: "/Images/DearGarden.mp4", caption: "Us recording our moments" },
   
  { id: 5, src: "/Images/FirstRose.jpg", caption: "Our First Roses" },
  { id: 6, src: "/Images/img5.jpg", caption: "One of the first video call" },
  { id: 7, src: "/Images/LodhiGarden.jpg", caption: "Our Second Date" },
  { id: 8,type: 'video',src: "/Images/LodhiGardenVid1.mp4", caption: "The flowers you plucked for me" },
  { id: 9,type: 'video',src: "/Images/LodhiGardenVid2.mp4", caption: "The flowers you plucked for me" },
  { id: 10, src: "/Images/img3.jpg", caption: "The Day we become one" },
  { id: 11, src: "/Images/Proposal.jpg", caption: "Me being chomu and you being beautifully aesthetic,hehe" },
  { id: 12, src: "/Images/img2.jpg", caption: "Meeting for the first time knowing I am yours" },
  { id: 13, src: "/Images/PuranaQila.jpg", caption: "Pookie posing for me hehe" },
  { id: 14, src: "/Images/puranaQila1.jpg", caption: "Pookie posing for me again" },
  { id: 15, src: "/Images/PuranaQila2.jpg", caption: "and again hehe" },
  { id: 16, src: "/Images/puranaQila3.jpg", caption: "Yours Kuchu Puchu" },
  { id: 17,type: 'video',src: "/Images/PuranaQilaVid.mp4", caption: "Prachi Being Mommy !" },
  { id: 18,type: 'video',src: "/Images/Lake1.mp4", caption: "Meeting after diwali break hehe" },
  { id: 19,type: 'video',src: "/Images/Lake2.mp4", caption: "Meeting after diwali break hehe" },
  { id: 20,type: 'video',src: "/Images/Lake3.mp4", caption: "Meeting after diwali break hehe" },
  { id: 21,type: 'video',src: "/Images/Lake4.mp4", caption: "Meeting after diwali break hehe" },
  { id: 22,type: 'video',src: "/Images/Lake5.mp4", caption: "Meeting after diwali break hehe" },
  { id: 23, src: "/Images/img6.jpg", caption: "Skin care to jaruri hai" },
  { id: 24, src: "/Images/img7.jpg", caption: "Always by your side" },
]

function Gallery({ girlfriendName }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container">
      <header>
        <h1>Beautiful Memories with {girlfriendName}</h1>
        <p>Every photo and video tells a story of our love.</p>
      </header>

      <div className="gallery-grid">
        {memories.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item animated-gallery-item"
            onClick={() => setSelectedItem(item)}
          >
            {/* CONDITIONAL RENDERING: Check if it is video or image */}
            {item.type === 'video' ? (
              <div className="video-thumbnail-wrapper">
                 {/* We use a video tag but prevent interaction so clicking opens lightbox */}
                <video src={item.src} className="gallery-media" muted />
                <div className="play-icon">▶</div>
              </div>
            ) : (
              <img src={item.src} alt={item.caption} className="gallery-media" />
            )}
            
            <p>{item.caption}</p>
          </div>
        ))}
        <div className="gallery-item more-memories-card animated-gallery-item">
            <div className="more-content">
                <span className="pulsing-heart-icon">❤️</span>
                <p>And so many more beautiful memories to come...</p>
            </div>
        </div>
      </div>

      {/* LIGHTBOX (Full Size View) */}
      {selectedItem && (
        <div className="lightbox-overlay" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedItem(null)}>
              &times;
            </button>

            {/* Check type again for the full view */}
            {selectedItem.type === 'video' ? (
              <video 
                src={selectedItem.src} 
                controls 
                autoPlay 
                className="lightbox-media" 
              />
            ) : (
              <img 
                src={selectedItem.src} 
                alt="Full size memory" 
                className="lightbox-media" 
              />
            )}

            <p className="lightbox-caption">{selectedItem.caption}</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default Gallery