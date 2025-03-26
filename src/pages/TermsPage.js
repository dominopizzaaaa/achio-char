import '../styles/terms.css';

export default function TermsPage() {
  return (
    <div className="terms-page fade-in">
      <div className="terms-card">
        <h1>Terms & Conditions</h1>

        <p>
          By purchasing from A’Chio Achar, you agree to the following terms and conditions.
          Our handmade achar is crafted with care and tradition — but as with any food product, please store and consume responsibly.
        </p>

        <h2>Product Information & Consumption</h2>
        <ul>
          <li>All our achar is made fresh and should be stored in a cool, dry place away from direct sunlight.</li>
          <li>Refrigeration is recommended after opening to maintain freshness.</li>
          <li>Please consume within 2 weeks of opening for best taste and safety.</li>
          <li>Do not consume if product appears spoiled — A’Chio Achar is not liable for illness resulting from improper storage or overdue consumption.</li>
        </ul>

        <h2>Allergen Notice</h2>
        <ul>
          <li>Our products may contain or come into contact with <strong>sesame seeds</strong> and <strong>peanuts</strong>.</li>
          <li>If you have any food allergies or intolerances, please contact us before purchase.</li>
        </ul>

        <h2>Delivery & Collection</h2>
        <ul>
          <li>Delivery is available within Singapore only.</li>
          <li>We are not responsible for delays caused by third-party couriers.</li>
          <li>Customers may arrange for self-collection via WhatsApp; location details will be provided upon request.</li>
        </ul>

        <h2>Returns & Refunds</h2>
        <ul>
          <li>Due to the perishable nature of our products, we do not offer refunds or exchanges.</li>
          <li>If your item is damaged upon arrival, please contact us within 24 hours with photo evidence.</li>
        </ul>

        <h2>Intellectual Property</h2>
        <ul>
          <li>All content on this site — including brand name, logo, and story — is the property of A’Chio Achar.</li>
          <li>Reproduction or reuse without permission is strictly prohibited.</li>
        </ul>

        <p className="footer-disclaimer">
          By purchasing or consuming our products, you acknowledge that you have read and agreed to these terms.
        </p>
      </div>
    </div>
  );
}
