import React, { useEffect } from 'react';
import './Home.css';
import capaImage from '../assets/ola.jpg';

function Home() {
  useEffect(() => {
    // Carrega o script de particles.js
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/particles.min.js`;
    script.onload = () => {
      window.particlesJS.load('particles-js', `${process.env.PUBLIC_URL}/particles-config.json`);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="inicio"
      className="home"
      style={{ backgroundImage: `url(${capaImage})` }}
    >
      <div id="particles-js"></div> {/* Canvas das partículas */}
      <div className="overlay">
        <div className="linha-com-texto">
          <div className="linha-lateral"></div>
          <h1 className="titulo-destaque">SEJAM BEM-VINDOS AO MEU PORTFOLIO!</h1>
        </div>
        <h2 className="nome">Tiago Fonseca da Silva</h2>
        <p className="profissoes">Analista de Dados | Cientista de Dados | Engenheiro de Dados</p>
        <p className="localizacao">Ilhabela / SP, Brasil</p>
      </div>
    </section>
  );
}

export default Home;
