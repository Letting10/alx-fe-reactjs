function Services() {
  const services = [
    {
      title: "Technology Consulting",
      description: "Expert advice on implementing technology solutions that drive business growth."
    },
    {
      title: "Market Analysis",
      description: "Comprehensive research and insights to help you understand your market position."
    },
    {
      title: "Product Development",
      description: "End-to-end product development services from concept to launch."
    },
    {
      title: "Digital Marketing",
      description: "Strategies to enhance your online presence and reach your target audience."
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights for better decision making."
    }
  ];

  return (
    <div style={{ 
      padding: '20px',
      background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
      minHeight: 'calc(100vh - 120px)'
    }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Our Services</h1>
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            width: '300px'
          }}>
            <h3 style={{ color: '#444', marginTop: '0' }}>{service.title}</h3>
            <p style={{ color: '#666' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;