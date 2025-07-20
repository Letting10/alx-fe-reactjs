import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          CompanyLogo
        </Link>
      </div>

      
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <Link 
          to="/" 
          style={navLinkStyle}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={navLinkStyle}
        >
          About
        </Link>
        <Link 
          to="/services" 
          style={navLinkStyle}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          style={navLinkStyle}
        >
          Contact
        </Link>
      </div>

      {/* Mobile menu button (hidden on desktop) */}
      <button 
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
    </nav>
  );
}

// Style object for nav links
const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  padding: '0.5rem 0',
  borderBottom: '2px solid transparent',
  ':hover': {
    borderBottom: '2px solid white'
  }
};

export default Navbar;