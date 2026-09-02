import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ServicesMegaDropdown() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const services = [
    {
      titleKey: "service_supply",
      slug: "/supplyDetails",
    },
    {
      titleKey: "service_installation",
      slug: "/installationDetails",
    },
    {
      titleKey: "service_consultancy",
      slug: "/consultancyDetails",
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        onClick={handleClick}
        className="hover:text-blue-900 transition-colors flex items-center gap-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {t('nav_services')}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      <div
        className={`absolute top-full start-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden
          transition-all duration-200 ease-in-out origin-top
          ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
        `}
      >
        <ul className="py-2">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                to={service.slug}
                onClick={handleClose}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0A2647] transition-colors"
              >
                {t(service.titleKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesMegaDropdown;
