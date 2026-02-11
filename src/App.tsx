import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import TracingRoadmap from './components/TracingRoadmap';
import 'aos/dist/aos.css'; // Import AOS CSS

import LanguagePopup from './components/LanguagePopup';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();
  const [langSelected, setLangSelected] = React.useState(false);

  useEffect(() => {
    document.title = "Djag | Developpeur";
    document.body.classList.add('bg-black', 'font-sans');
    return () => {
      document.body.classList.remove('bg-black', 'font-sans');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
     {/* <LanguagePopup onSelect={() => setLangSelected(true)} /> */}
      <CustomCursor />
      {/* Header */}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      < TracingRoadmap
        x="100%"
        thickness={7}
        color="#9333ea"
      />
    </div>
  );
}

export default App;