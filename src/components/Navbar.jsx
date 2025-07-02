import { useEffect, useRef } from 'react';

const Navbar = ({ setActiveSection, activeSection }) => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow"
    >
      <div className="container px-6 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-black-600">Kev Dev</div>
          
          <div className="flex items-center space-x-6">
            {['about', 'experience', 'projects', 'skills', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`px-3 py-2 rounded-md text-sm font-medium 
                  ${activeSection === section ? 'text-primary-600 bg-primary-100' : 'text-gray-600 hover:text-primary-600'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;