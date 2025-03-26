import '../styles/contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page fade-in">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Want to order or ask about our achar? We’d love to chat — send us a WhatsApp!</p>

        <a
          href="https://wa.me/6581192872"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 WhatsApp +65 8119 2872
        </a>
      </div>
    </div>
  );
}
