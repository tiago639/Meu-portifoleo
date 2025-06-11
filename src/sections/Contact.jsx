import React from 'react';

export default function Contact() {
  return (
    <section id="contato" style={{ padding: '4.5rem' }}>
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
            borderBottom: 'none',
            boxShadow: 'none', 
        }}
        className="contact-title"
      >
        Contato
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        {/* Email */}
        <a 
          href="mailto:eloytiago1403@gmail.com"
          style={linkStyle}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            style={iconStyle}
          />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tiago-f-silva-089a3036a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            style={iconStyle}
          />
          <span>LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5521977140933"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            style={iconStyle}
          />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Estilo responsivo com CSS puro */}
      <style>{`
        @media (max-width: 767px) {
          .contact-title {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  textDecoration: 'none',
  color: 'inherit',
  padding: '0.5rem 1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  minWidth: '150px',
  justifyContent: 'center',
};

const iconStyle = {
  width: '24px',
  height: '24px',
};
