import achar from '../assets/achar2.jpg';
import '../styles/products.css';

export default function ProductsPage() {
  return (
    <div className="products-page fade-in">
      <h1>Our Achar</h1>
      <p className="tagline">One recipe. Pure heart. Endless flavor.</p>

      <div className="product-feature">
        <img src={achar} alt="A’Chio Achar" className="achar-image" />

        <div className="product-info">
          <h2>A’Chio Signature Achar</h2>
          <p>
            Made lovingly by our Nainai using a heritage family recipe, our achar blends
            crunchy vegetables with hand-ground spices and sun-kissed oils. It’s sweet, tangy,
            spicy — a nostalgic explosion of flavor in every bite.
          </p>

          <ul className="product-details">
            <li><strong>Size:</strong> 350ml glass jar</li>
            <li><strong>Price:</strong> $8 per jar</li>
            <li><strong>Bundle:</strong> 3 for $22</li>
          </ul>

          <a href="/contact" className="order-button">Order via WhatsApp</a>
        </div>
      </div>
      <div className="video-section fade-in">
        <h3>Lovingly Packed by Hand</h3>
        <p>Nainai makes sure each jar is sealed with care (and a sprinkle of love). Watch her in action:</p>
        <video
          src={require('../assets/nainai-packing.MOV')}
          controls
          className="product-video"
        />
      </div>
    </div>
  );
}
