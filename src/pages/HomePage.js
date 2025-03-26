import acharImage from '../assets/achar.jpg';
import '../styles/home.css';

export default function HomePage() {
  return (
    <div className="home-page fade-in">
      <div className="hero">
        <img src={acharImage} alt="Delicious Achar" className="hero-bg" />
        <div className="hero-overlay">
          <h1>A’Chio Achar</h1>
          <p>
            A’Chio Achar was born from love — two sisters wanted to help their grandmother stay active and joyful.
          </p>
          <p>
            What started in their kitchen has now become a full-hearted business. Every jar is filled with tradition, care, and the tangy magic of their nainai’s hands.
          </p>

          <a href="/products" className="hero-button">Explore Our Achar</a>
        </div>
      </div>
    </div>
  );
}
