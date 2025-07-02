import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Experience from './sections/Experience';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  
  return (
    <div className="bg-light text-gray-800 font-sans leading-normal tracking-normal">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      
      <main className="container px-6 py-10 mx-auto">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;