import { Link } from 'react-router-dom';
import instaIcon from '../assets/socialicons/insta.png';
import fbIcon from '../assets/socialicons/fb.jpeg';
import tiktokIcon from '../assets/socialicons/tiktok.png';
import linkedinIcon from '../assets/socialicons/l.png';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const trustItems = [
    t('footer_trust_1'),
    t('footer_trust_2'),
    t('footer_trust_3'),
    t('footer_trust_4'),
  ];

  return (
    <footer className="bg-[#0A2647] text-white pt-16 pb-8 border-t border-[#3ABEF9]/20">
      <div className="container mx-auto px-4 md:px-8">

        {/* Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pb-10 mb-10 border-b border-white/10">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm text-gray-300">
              <svg className="w-4 h-4 text-[#3ABEF9] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-start">
            <h3 className="text-lg font-bold mb-4 relative inline-block pb-1">
              {t('footer_quick_links')}
              <span className="absolute bottom-0 start-0 w-8 h-[2px] bg-[#3ABEF9]"></span>
            </h3>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#3ABEF9] transition-colors">{t('nav_home')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#3ABEF9] transition-colors">{t('nav_about')}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#3ABEF9] transition-colors">{t('footer_how_we_work')}</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#3ABEF9] transition-colors">{t('nav_projects')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="text-center md:text-start">
            <h3 className="text-lg font-bold mb-4 relative inline-block pb-1">
              {t('services_section_title')}
              <span className="absolute bottom-0 start-0 w-8 h-[2px] bg-[#3ABEF9]"></span>
            </h3>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <Link to="/supplyDetails" className="hover:text-[#3ABEF9] transition-colors">{t('service_supply')}</Link>
              </li>
              <li>
                <Link to="/installationDetails" className="hover:text-[#3ABEF9] transition-colors">{t('service_installation')}</Link>
              </li>
              <li>
                <Link to="/consultancyDetails" className="hover:text-[#3ABEF9] transition-colors">{t('service_consultancy')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="text-center md:text-start">
            <h3 className="text-lg font-bold mb-4 relative inline-block pb-1">
              {t('nav_contact')}
              <span className="absolute bottom-0 start-0 w-8 h-[2px] bg-[#3ABEF9]"></span>
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-[#3ABEF9] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('footer_address')}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <svg className="w-4 h-4 text-[#3ABEF9] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+971559775150" className="hover:text-[#3ABEF9] transition-colors" dir="ltr">+971 55 9775150</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <svg className="w-4 h-4 text-[#3ABEF9] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:primerockcontractingllc@gmail.com" className="hover:text-[#3ABEF9] transition-colors break-all" dir="ltr">
                  primerockcontractingllc@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section: Socials and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-400 order-2 md:order-1">
            {t('footer_copyright')}
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center items-center order-1 md:order-2">
            <a href="https://www.instagram.com/primerocktwrydwtrkyb/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={instaIcon} alt="Instagram" className="w-6 h-6 rounded-lg object-cover" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61556323757862&sk=about" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={fbIcon} alt="Facebook" className="w-9 h-9 rounded-lg object-cover" />
            </a>
            <a href="https://www.tiktok.com/@primerock3" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={tiktokIcon} alt="TikTok" className="w-9 h-9 rounded-lg object-contain p-1" />
            </a>
            <a href="https://www.linkedin.com/company/prime-rock-contracting-l-l-c/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-9 h-9 rounded-lg object-contain p-1" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;