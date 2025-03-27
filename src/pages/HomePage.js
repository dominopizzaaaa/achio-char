import { useEffect, useState } from 'react';
import '../styles/home.css';

const bgImages = [
  require('../assets/achar.jpg'),
  require('../assets/achar2.png'),
  require('../assets/achar3.jpg'),
];

const videoSrc = require('../assets/nainai-making.MOV');

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const isVideo = current === bgImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (bgImages.length + 1));
    }, 10000); // ⏳ 10s per background

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {isVideo ? (
        <video
          className="background-video active"
          src={videoSrc}
          autoPlay
          muted
          loop
        />
      ) : (
        <div
          className="background-fader"
          style={{ backgroundImage: `url(${bgImages[current]})` }}
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
