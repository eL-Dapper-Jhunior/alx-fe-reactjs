import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#333',
        padding: '10px',
        color: '#fff',
        display: 'flex', // Add this to make the navbar a flex container
        justifyContent: 'space-between', // Add this to space out the links
        alignItems: 'center', // Center items vertically
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Company</div>
      <div>
        <Link
          to="/"
          style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
