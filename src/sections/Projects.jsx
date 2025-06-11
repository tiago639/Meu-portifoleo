import React from 'react';
import PropTypes from 'prop-types';

// Dados dos projetos organizados por categoria
const projectsByCategory = [
  {
    category: 'Análise de Dados',
    projects: [
      {
        id: 1,
        title: 'Análise de Receita, Margem e Custo',
        description: 'Dashboard interativo criado no Power BI para análise detalhada de receitas, margens e custos empresariais.',
        githubUrl:  'https://github.com/tiago639/Analise-Receita-Margem-Custo',
        powerBiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNGY4YzBmMTAtNWMzZC00YzFkLThlYTAtODQzYjI4OTkxM2YyIiwidCI6IjE0NmNlYmE1LTcyNDUtNGI2OS1iNWUyLTEzZTRhNTM3NGZiMCIsImMiOjF9',
      },
      {
        id: 2,
        title: 'Embreve ',
        description: 'Análise de DRE.',
        githubUrl: '',
      },
      {
        id: 3,
        title: 'Embreve',
        description: 'Análise de vendas.',
        githubUrl: '',
      },
    ],
  },
  {
    category: 'Banco de Dados',
    projects: [
      {
        id: 4,
        title: 'Criação de Banco de Dados',
        description: 'Projeto voltado para o planejamento e implementação de um banco de dados relacional, com foco na modelagem de dados, criação de tabelas, relacionamentos e consultas SQL para suportar uma aplicação de gestão de projetos.',
        githubUrl: 'https://github.com/tiago639/Criao_banco-de-Dados',
      },
      {
        id: 5,
        title: 'Embreve ',
        description: 'Script de Insert no banco de daddo.',
        githubUrl: '',
      },
      {
        id: 6,
        title: 'Embreve ',
        description: 'script de exclusção de tabelas e transação.',
        githubUrl: '',
      },
      {
        id: 7,
        title: 'Embreve ',
        description: 'Select de tabela .',
        githubUrl: '',
      },
      {
        id: 8,
        title: 'Embreve ',
        description: 'constrção de um script com mais de uma tabela  .',
        githubUrl: '',
      },
    ],
  },
  {
    category: 'Automação',
    projects: [
      {
        id: 8,
        title: 'Envio de mensagens no WhatsApp com Python',
        description: 'Automação de envio de mensagens no WhatsApp utilizando Python. O projeto permite interações automatizadas com contatos via WhatsApp Web, ideal para notificações, lembretes ou campanhas de comunicação',
        githubUrl: 'https://github.com/tiago639/Automa-o---Python',
      },
      {
        id: 9,
        title: 'Automação de Consulta de CNPJ na Receita Federal via Power Automate',
        description: 'Automatize a verificação de CNPJs diretamente na Receita Federal utilizando Power Automate e scripts Python. Este projeto integra planilhas Excel com automações inteligentes, otimizando processos repetitivos e garantindo maior agilidade e precisão na análise de dados empresariais.',
        githubUrl: 'https://github.com/tiago639/Automa-o---Power-automate',
      },
      {
        id: 10,
        title: 'Em breve mais codigo ',
        description: 'Em desenvolvimento.',
        githubUrl: '',
      },
    ],
  },
];

const ProjectItem = ({ title, description, githubUrl, powerBiUrl, demoUrl }) => {
  return (
    <div className="project-item">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-links">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" title="Ver no GitHub">
            <span className="project-link-icon">👨‍💻</span> Código
          </a>
        )}
        {powerBiUrl && (
          <a href={powerBiUrl} target="_blank" rel="noopener noreferrer" className="project-link" title="Ver no Power BI">
            <span className="project-link-icon">📊</span> Dashboard
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link" title="Ver demonstração">
            <span className="project-link-icon">🌐</span> Demo
          </a>
        )}
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  powerBiUrl: PropTypes.string,
  demoUrl: PropTypes.string,
};

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="section-subtitle">Explore meus trabalhos recentes organizados por categoria</p>
        
        <div className="projects-container">
          {projectsByCategory.map((categoryData) => (
            <div key={categoryData.category} className="category-section">
              <h3 className="category-title">
                <span className="category-icon">{getCategoryIcon(categoryData.category)}</span>
                {categoryData.category}
              </h3>
              <div className="projects-grid">
                {categoryData.projects.map((project) => (
                  <ProjectItem
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    githubUrl={project.githubUrl}
                    powerBiUrl={project.powerBiUrl}
                    demoUrl={project.demoUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 5rem 0;
          background-color: #f8f9fa;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          color: #2c3e50;
          font-weight: 700;
          border-bottom: none;
        }

        .section-subtitle {
          text-align: center;
          color: #7f8c8d;
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .category-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .category-title {
          font-size: 1.5rem;
          color: #3498db;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #eee;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .category-icon {
          font-size: 1.3rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-item {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid #eee;
        }

        .project-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border-color: #3498db;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #2c3e50;
        }

        .project-description {
          font-size: 0.95rem;
          color: #7f8c8d;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          text-decoration: none;
          font-size: 0.9rem;
          color: white;
          background-color: #3498db;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .project-link:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
        }

        .project-link-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .category-section {
            padding: 1.5rem;
          }
        } 

      `}</style>
    </section>
  );
};

// Helper function para ícones de categoria
function getCategoryIcon(category) {
  switch(category) {
    case 'Análise de Dados': return '📈';
    case 'Banco de Dados': return '🗃️';
    case 'Automação': return '🤖';
    default: return '📁';
  }
}

export default ProjectsSection;