import '../styles/delivery.css';

export default function DeliveryPage() {
  return (
    <div className="delivery-page fade-in">
      <div className="delivery-card">
        <h1>Delivery & Self-Collection</h1>
        <p>
          We currently deliver within Singapore. Orders above <strong>$50</strong> enjoy free delivery.
          Standard delivery takes <strong>2–4 working days</strong>.
        </p>
        <p>
          For delivery outside this window or bulk orders, kindly WhatsApp us to check current rates and availability.
        </p>
        <p>
          Prefer to collect? Self-collection is available too! Just WhatsApp us to arrange the collection time and location. 🛍️
        </p>

        <a
          href="https://wa.me/6581192872"
          className="whatsapp-delivery-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 Message Us on WhatsApp
        </a>
      </div>
    </div>
  );
}
