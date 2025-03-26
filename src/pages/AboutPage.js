import nainai from '../assets/nainai.jpg';
import sisters from '../assets/sisters.jpg';
import '../styles/about.css';

export default function AboutPage() {
  return (
    <div className="about-page fade-in">
      <div className="about-content">
        <div className="about-text">
          <h1>Our Story</h1>

          <p>
            After their grandfather passed away in 2022, life grew quiet for Nainai. The kitchen — once alive with chatter and the scent of simmering spices — felt empty. Her hands still remembered the way, but her heart had lost its rhythm. Her granddaughters couldn’t bear to see the light dim in the woman who once lit up every room.
          </p>

          <p>
            So they returned to the one place that always brought joy: Nainai’s kitchen. With jars, laughter, and old family recipes, they began preserving more than just achar. They were bottling memories. Healing happened one batch at a time — turmeric-stained fingers, shared stories, and the warmth of spice in the air.
          </p>

          <p>
            A’Chio Achar became more than a passion project. It’s a celebration of resilience, tradition, and the quiet strength of women across generations. Every jar holds a legacy — of love, of loss, and of coming back to life.
          </p>
        </div>

        <div className="nainai-photo">
          <img src={nainai} alt="Nainai" />
        </div>
      </div>

      <div className="sisters-photo-row">
        <img src={sisters} alt="Sisters with Nainai" />
      </div>
    </div>
  );
}
