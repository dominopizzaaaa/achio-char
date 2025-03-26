import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>About</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h4>Customer Info</h4>
          <Link to="/delivery">Delivery Information</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div className="footer-note">
          © {new Date().getFullYear()} A’Chio Achar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
