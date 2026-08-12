import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logoandhero/bgremovelogo.png';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id) => {
    setIsOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.pushState(null, '', `/#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav
      className={`bg-white shadow-md z-50 sticky top-0 transition-all duration-300 ease-in-out ${isScrolled ? 'py-1' : 'py-3'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Prime Stone Logo"
            className={`w-auto transition-all duration-300 ease-in-out ${isScrolled ? 'h-10' : 'h-20'
              }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center text-gray-800 font-semibold transition-all duration-300 ease-in-out ${isScrolled ? 'space-x-4 text-sm' : 'space-x-6 text-base'
            }`}
        >
          <li>
            <Link to="/" className="hover:text-blue-900 transition-colors">
              {t('nav_home')}
            </Link>
          </li>
          <li>
            <button onClick={() => goToSection('about')} className="hover:text-blue-900 transition-colors">
              {t('nav_about')}
            </button>
          </li>
          <li>
            <button onClick={() => goToSection('our-services')} className="hover:text-blue-900 transition-colors">
              {t('nav_services')}
            </button>
          </li>
          <li>
            <button onClick={() => goToSection('projects')} className="hover:text-blue-900 transition-colors">
              {t('nav_projects')}
            </button>
          </li>
          <li>
            <button onClick={() => goToSection('contact')} className="hover:text-blue-900 transition-colors">
              {t('nav_contact')}
            </button>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="hover:text-blue-900 transition-colors font-semibold border border-gray-300 rounded-full px-3 py-1 text-sm"
            >
              {i18n.language === 'ar' ? 'EN' : 'AR'}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center py-6 space-y-5 text-gray-800 font-semibold">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-900 transition-colors">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <button onClick={() => goToSection('about')} className="hover:text-blue-900 transition-colors">
                  {t('nav_about')}
                </button>
              </li>
              <li>
                <button onClick={() => goToSection('our-services')} className="hover:text-blue-900 transition-colors">
                  {t('nav_services')}
                </button>
              </li>
              <li>
                <button onClick={() => goToSection('projects')} className="hover:text-blue-900 transition-colors">
                  {t('nav_projects')}
                </button>
              </li>
              <li>
                <button onClick={() => goToSection('contact')} className="hover:text-blue-900 transition-colors">
                  {t('nav_contact')}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleLanguage}
                  className="hover:text-blue-900 transition-colors font-semibold border border-gray-300 rounded-full px-4 py-1 text-sm"
                >
                  {i18n.language === 'ar' ? 'EN' : 'AR'}
                </button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;