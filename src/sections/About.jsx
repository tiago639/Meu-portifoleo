import React, { useState, useEffect } from 'react';

export default function About() {
  const skills = [
    { name: 'Power BI (DAX, Power Query, Gateway)', level: 95 },
    { name: 'Power Automate', level: 95 },
    { name: 'Python', level: 65 },
    { name: 'VBA', level: 70 },
    { name: 'SQL Server, PL-SQL e Oracle', level: 90 },
    { name: 'Modelagem Dimensional', level: 75 },
    { name: 'ETL e Integração de Dados', level: 92 },
    { name: 'Data Lake & Data Warehouse', level: 75 },
    { name: 'Governança e Qualidade de Dados', level: 85 },
    { name: 'Machine Learning para Análise Preditiva', level: 60 },
    { name: 'Extração de Dados ', level: 85 },
    { name: 'API', level: 80 }
  ];

  const half = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, half);
  const rightSkills = skills.slice(half);

  const [progress, setProgress] = useState(0);
  const [increasing, setIncreasing] = useState(true);
  const [paused, setPaused] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval;

    if (!paused) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (increasing) {
            if (prev >= 100) {
              setPaused(true);
              setTimeout(() => {
                setIncreasing(false);
                setPaused(false);
              }, 1000);
              return prev;
            }
            return prev + 1;
          } else {
            if (prev <= 0) {
              setPaused(true);
              setTimeout(() => {
                setIncreasing(true);
                setPaused(false);
              }, 1000);
              return prev;
            }
            return prev - 1;
          }
        });
      }, 25);
    }

    return () => clearInterval(interval);
  }, [increasing, paused]);

  return (
    <section id="sobre" style={{ minHeight: '100vh', backgroundColor: '#f8f8fc', padding: '4rem 2rem' }}>
      {/* Cabeçalho */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ color: '#d4c441', fontWeight: 'bold', letterSpacing: '1px', margin: 0, fontSize: '1rem' }}>SOBRE</p>
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
          Um pouco sobre mim.
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#444', margin: 0 }}>
          Um (breve) resumo sobre minha vida profissional.
        </p>
      </div>

      {/* Conteúdo: Texto + Habilidades */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
        }}
      >
        {/* Texto */}
        <div style={{ flex: 1, minWidth: '300px', maxWidth: '600px', lineHeight: '1.6' }}>
          <p>
            Sou um profissional especializado em automação e análise de dados, com experiência no uso de diversas ferramentas para otimizar processos e gerar insights estratégicos.
          </p>
          <p>
            Para automação, utilizo tanto plataformas low-code como o <strong>Power Automate</strong>, ideal para integrar sistemas e automatizar fluxos de trabalho corporativos, quanto linguagens como <strong>Python</strong> e <strong>VBA</strong>, que permitem criar soluções personalizadas e avançadas para manipulação e análise de dados.
          </p>
          <p>
            Na área de análise e visualização, trabalho com <strong>Power BI</strong>, explorando recursos como <strong>DAX</strong>, <strong>Power Query</strong> e configuração de <strong>Gateway</strong> para transformar dados brutos em relatórios e dashboards claros e impactantes.
          </p>
          <p>
            Tenho forte conhecimento em <strong>modelagem dimensional</strong>, <strong>ETL</strong>, <strong>integração e governança de dados</strong>, atuando desde a coleta até a entrega de informações confiáveis para a tomada de decisão.
          </p>
          <p>
            Também aplico conceitos de <strong>Machine Learning</strong> para análises preditivas e melhorias contínuas.
          </p>
          <p>
            Estou sempre em busca de novas soluções para conectar tecnologia, dados e resultados, entregando valor real aos projetos em que atuo.
          </p>
        </div>

        {/* Habilidades */}
        <div style={{ flex: 1, minWidth: '300px', maxWidth: '700px' }}>
          <h3 style={{ marginBottom: '2rem', color: '#333' }}>Minhas Principais Habilidades</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '1.5rem',
            }}
          >
            <div>
              {leftSkills.map((skill, i) => (
                <SkillBar key={`left-${i}`} skill={skill} progress={progress} />
              ))}
            </div>
            <div>
              {rightSkills.map((skill, i) => (
                <SkillBar key={`right-${i}`} skill={skill} progress={progress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, progress }) {
  const fill = Math.min(progress, skill.level);

  return (
    <div style={{ marginBottom: '1.2rem' }}>
      <strong style={{ fontSize: '0.9rem' }}>{skill.name}</strong>
      <div
        style={{
          textAlign: 'right',
          fontSize: '0.8rem',
          fontWeight: '600',
          marginBottom: '3px',
          userSelect: 'none',
        }}
      >
        {skill.level}%
      </div>
      <div
        style={{
          height: '8px',
          backgroundColor: '#e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${fill}%`,
            height: '100%',
            backgroundColor: '#11273C',
            borderRadius: '8px 0 0 8px',
            transition: 'width 0.2s linear',
          }}
        ></div>
      </div>
    </div>
  );
}
