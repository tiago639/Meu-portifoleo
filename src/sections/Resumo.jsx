import React, { useState, useEffect } from 'react';
import Formacao from './Formacao';
import Experiencia from './Experiencia';

export default function Resumo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // verifica no carregamento
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="resumo"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f8fc',
        padding: '0rem 0rem',
        marginTop: '-6rem',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            margin: '0.5rem 0',
            color: '#333',
            borderBottom: 'none',
            boxShadow: 'none',
          }}
        >
          {/* Pode colocar título aqui */}
        </h2>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: '3rem',
          maxWidth: '1200px',
          margin: isMobile ? '0 auto' : '0 auto 0 16rem',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
          <Experiencia />
        </div>

        <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}>
          <Formacao />
        </div>
      </div>
    </section>
  );
}
