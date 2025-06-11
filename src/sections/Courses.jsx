import React from 'react';
import './Courses.css';

const coursesData = [
  {
    id: 'SQL Server com consultas Para Analise de Dados',
    date: "Jan 2025",
    title: "SQL Server com consultas Para Analise de Dados",
    institution: "Udemy",
    details: "Carga Horária: 21h",
    certificateLink: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-79cf6c7b-ec33-46c6-bb27-676eeb7c6cf9.pdf"
  },
  {
    id: 'Fundamentos de Inteligência Artificial',
    date: "Jun 2023",
    title: "Fundamentos de Inteligência Artificial",
    institution: "Data Science Academy",
    details: "Carga Horária: 12h",
    certificateLink: "https://drive.google.com/file/d/1I-_Yx0qPmvqa1gu8cdl1IMvJ2WCS2efd/view?usp=sharing"
  },
  {
    id: 'Microsoft Power BI Para Business Intelligence e Data Science',
    date: "Jun 2023",
    title: "Microsoft Power BI Para Business Intelligence e Data Science",
    institution: "Data Science Academy",
    details: "Carga Horária: 72h",
    certificateLink: "https://drive.google.com/file/d/1o5lgAKgghbipinpXTso271BYfbPe2wJD/view?usp=sharing"
  },
  {
    id: 'Big Data Fundamentos 3.0',
    date: "Jun 2023",
    title: "Big Data Fundamentos 3.0",
    institution: "Data Science Academy",
    details: "Carga Horária: 12h",
    certificateLink: "https://drive.google.com/file/d/181ljMEDZ9Hj6H9Kpbdk9X1PqPC7Z0Foz/view?usp=sharingg"
  },
  {
    id: 'Fundamentos de Engenharia de Dados',
    date: "Mai 2023",
    title: "Fundamentos de Engenharia de Dados",
    institution: "Data Science Academy",
    details: "Carga Horária: 24h",
    certificateLink: "https://drive.google.com/file/d/1KCjplfzURS0nMAENuV8bz2FA2_40e7JW/view?usp=sharing"
  },
  {
    id: 'Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Introdutório',
    date: "Mai 2023",
    title: "Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Introdutório",
    institution: "Data Science Academy",
    details: "Carga Horária: 24h",
    certificateLink: "https://drive.google.com/file/d/1zVSfrgCGwYBNhuk4Rhk4cyyxlhl3X9W0/view?usp=sharing"
  },
  {
    id: 'Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Básico',
    date: "Mai 2023",
    title: "Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Básico",
    institution: "Data Science Academy",
    details: "Carga Horária: 48h",
    certificateLink: "https://drive.google.com/file/d/1c4NQCpmYTzA17O9OpJIPVSCX_KIsBzER/view?usp=sharing"
  },
  {
    id: 'Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Intermediário',
    date: "Mai 2023",
    title: "Fundamentos de Linguagem Python para Análise de Dados e Data Science - Nível Intermediário",
    institution: "Data Science Academy",
    details: "Carga Horária: 72h",
    certificateLink: "https://drive.google.com/file/d/1KL6mGF1oRf8dTtZfBUSJA89rz0hOGUP5/view?usp=sharing"
  },
  {
    id: 'Introdução a Ciência de Dados 3.0',
    date: "Mai 2023",
    title: "Introdução a Ciência de Dados 3.0",
    institution: "Data Science Academy",
    details: "Carga Horária: 12h",
    certificateLink: "https://drive.google.com/file/d/1TJ_cqtxhXfBOHP74n5dYIqi7RikltOLx/view?usp=sharing"
  }
];

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="card-header">
        <a
          href={course.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-badge"
          title="Ver certificado"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </a>
        <span className="course-date">{course.date}</span>
      </div>
      <div className="card-body">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-institution">{course.institution}</p>
        <p className="course-details">{course.details}</p>
      </div>
    </div>
  );
};

export default function Courses() {
  return (
    <section id="courses" className="courses-section">
      <div className="section-container">
        <h2 className="section-title">Cursos e Certificações</h2>
        <p className="section-subtitle">Conhecimento contínuo em desenvolvimento</p>
        
        <div className="courses-grid">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}