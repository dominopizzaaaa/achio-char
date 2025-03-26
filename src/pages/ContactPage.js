import '../styles/contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page fade-in">
      <div className="contact-card fancy-contact">
        <h1 className="contact-title">Let’s Get In Touch!</h1>
        <p className="contact-subtext">
          Whether you're craving some tangy achar or just want to say hello — we’re always here for a chat.
        </p>
        <p className="contact-whisper">Nainai usually replies fastest 😉</p>

        <a
          href="https://wa.me/6581192872"
          className="whatsapp-button glowing-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 Order Now!
        </a>

        <div className="contact-footer-note">We respond within the day 🌶️✨</div>
      </div>
    </div>
  );
}
