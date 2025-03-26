import '../styles/contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page fade-in">
      <div className="contact-card fancy-contact">
        <h1 className="contact-title">Contact Us!</h1>
        <p className="contact-subtext">
          Whether you're craving some tangy achar or just want to say hello:
        </p>
        <p className="contact-whisper">We’re always here for a chat 😉</p>

        <a
          href="https://wa.me/6581192872"
          className="whatsapp-button glowing-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 Any questions? Whatsapp Us here! Or text us at +65 8119 2872
        </a>

        <div className="contact-footer-note">We will respond ASAP! ✨</div>
      </div>
    </div>
  );
}
