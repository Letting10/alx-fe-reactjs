function Home() {
  return (
    <div style={{ 
      padding: '20px',
      textAlign: 'center',
      background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
      minHeight: 'calc(100vh - 120px)'
    }}>
      <h1 style={{ color: '#333', fontSize: '2.5em' }}>Welcome to Our Company</h1>
      <p style={{ fontSize: '1.2em', maxWidth: '800px', margin: '0 auto' }}>
        We are dedicated to delivering excellence in all our services. 
        Our team of professionals is committed to providing the best solutions 
        tailored to your specific needs.
      </p>
    </div>
  );
}

export default Home;