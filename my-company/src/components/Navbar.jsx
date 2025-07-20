import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path and filename

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '0.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo Section */}
      <Link to="/" style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
      }}>
        <img 
          src={logo} 
          alt="Company Logo" 
          style={{
            height: '20px', // Adjust based on your logo
            width: 'auto',
            marginRight: '10px'
          }} 
        />
        {/* Optional text beside logo */}
        <span style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
        </span>
      </Link>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

// Reusable NavLink component for consistent styling
function NavLink({ to, children }) {
  return (
    <Link 
      to={to}
      style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 0',
        borderBottom: '2px solid transparent',
        transition: 'all 0.3s ease',
        ':hover': {
          borderBottom: '2px solid #3498db'
        }
      }}
    >
      {children}
    </Link>
  );
}

export default Navbar;