function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto'
    }}>
      <p>© 2023 My Company. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="#" style={{ color: '#4CAF50', margin: '0 10px' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#4CAF50', margin: '0 10px' }}>Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;