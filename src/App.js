import React, { useEffect } from 'react'; // ✅ Adicionado o useEffect
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Courses from './sections/Courses';
import Contact from './sections/Contact';
import Resumo from './sections/Resumo';

function App() {
  // ✅ Efeito para rolar para o topo ao recarregar a página
  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem suave: { behavior: 'smooth' } (opcional)
  }, []); // Array vazio = executa apenas no carregamento inicial

  return (
    <>
      <Header />
      <Home />
      <main style={{ paddingTop: '2rem' }}>
        <About />
        <Resumo />
        <Projects />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;