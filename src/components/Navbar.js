import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">A’Chio Achar</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
