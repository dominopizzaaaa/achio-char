import { useEffect, useState } from 'react';
import '../styles/home.css';

const bgImages = [
  require('../assets/achar.jpg'),
  require('../assets/achar2.png'),
  require('../assets/achar3.jpg')
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // preload
    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 3000); // ⏳ 12s = slow, elegant transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <div
        className="background-fader"
        style={{ backgroundImage: `url(${bgImages[current]})` }}
      />

      <div className="hero-overlay fancy-glass">
        <h1 className="fade-in-text delay-1">A’Chio Achar</h1>
        <p className="fade-in-text delay-2">
          A’Chio Achar was born from love — two sisters wanted to help their grandmother stay active and joyful.
        </p>
        <p className="fade-in-text delay-3">
          What started in their kitchen has now become a full-hearted business. Every jar is filled with tradition, care, and the tangy magic of their nainai’s hands.
        </p>
        <a href="/products" className="hero-button fade-in-text delay-4">Browse Our Achars🍽️</a>
      </div>
    </div>
  );
}
