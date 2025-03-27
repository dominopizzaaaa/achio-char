import { useEffect, useState } from 'react';
import '../styles/home.css';

const bgImages = [
  require('../assets/achar.jpg') // only 1 image now
];

const videoSrc = require('../assets/nainai-making.MOV');

export default function HomePage() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Wait ~3.5s before switching to video (slightly after last text appears)
    const timer = setTimeout(() => setShowVideo(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      {showVideo ? (
        <video
          className="background-video active"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="background-fader"
          style={{ backgroundImage: `url(${bgImages[0]})` }}
        />
      )}

      <div className="hero-overlay fancy-glass">
        <h1 className="fade-in-text delay-1">A’Chio Achar</h1>
        <p className="fade-in-text delay-2">
          A’Chio Achar was born from love — two sisters wanted to help their grandmother stay active and joyful.
        </p>
        <p className="fade-in-text delay-3">
          What started in their kitchen has now become a full-hearted business. Every jar is filled with tradition, care, and the tangy magic of their nainai’s hands.
        </p>
        <a href="/products" className="hero-button fade-in-text delay-4">Relish With Us 🍽️</a>
      </div>
    </div>
  );
}
