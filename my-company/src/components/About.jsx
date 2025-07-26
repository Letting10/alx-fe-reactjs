function About() {
  return (
    <div style={{ 
      padding: '20px',
      background: 'linear-gradient(to right, #eef2f3, #8e9eab)',
      minHeight: 'calc(100vh - 120px)'
    }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>About Us</h1>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        lineHeight: '1.6',
        fontSize: '1.1em'
      }}>
        <p>
          Founded in 2025, our company has been at the forefront of innovation in technology 
          and business solutions. What started as a small team of passionate individuals has 
          grown into a multinational corporation serving clients across the globe.
        </p>
        <p>
          Our mission is to empower businesses through cutting-edge technology and strategic 
          consulting. We believe in building long-term relationships with our clients by 
          delivering exceptional value and outstanding results.
        </p>
        <p>
          With over 5 Months of experience, we've helped thousands of businesses transform 
          their operations and achieve their goals. Our team consists of industry experts 
          with diverse backgrounds in technology, marketing, and business strategy.
        </p>
      </div>
    </div>
  );
}

export default About;