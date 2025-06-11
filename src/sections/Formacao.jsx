import React from 'react';

const formacoes = [
  {
    periodo: 'Fev 2024 - EM ANDAMENTO',
    curso: 'SUPERIOR DE TECNOLOGIA EM INTELIGÊNCIA DE MERCADO E ANÁLISE DE DADOS',
    instituicao: 'Anhanguera',
    tipo: 'Graduação'
  },

];

export default function Formacao() {
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'left', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', borderBottom: 'none' }}>
        Formação Acadêmica.
      </h2>
      <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid #e0e0e0' }}>
        {formacoes.map((item, index) => (
          <div key={index} style={{ position: 'relative', marginBottom: '3rem', paddingLeft: '1rem' }}>
            {/* Ponto marcador */}
            <span
              style={{
                position: 'absolute',
                left: '-1.1rem',
                top: '0.3rem',
                width: '16px',
                height: '16px',
                backgroundColor: '#000',
                border: '3px solid #fff',
                borderRadius: '50%',
                boxShadow: '0 0 0 2px #ccc',
              }}
            ></span>

            {/* Conteúdo da formação */}
            <p style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {item.periodo}
            </p>
            <h3 style={{ fontSize: '1.2rem', margin: '0.2rem 0', fontWeight: 'bold' }}>{item.curso}</h3>
            <p style={{ fontWeight: '600', margin: '0.2rem 0' }}>{item.instituicao}</p>
            <p style={{ color: '#555' }}>{item.tipo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
