import heroImage from '../assets/logoandhero/mainhero.png';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const whatsappUrl = "https://wa.me/971559775150?text=" + encodeURIComponent(
    "Hi Prime Stone, I'd like to request an estimate for my project."
  );

  return (
    <div
      className="relative bg-cover h-screen bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="flex items-center text-center absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="text-center items-center container px-6 relative z-10 text-white">
        <h1
          className={`font-semibold text-5xl md:text-7xl leading-tight mb-4 ${isRTL ? 'font-arabic' : 'font-serif'
            }`}
        >
          {t('hero_title')}
        </h1>
        <div className="flex items-center justify-center">
          <div className="border-t-2 border-white w-24 md:w-48"></div>
          <p className="mx-4 text-xl md:text-2xl">{t('hero_tagline')}</p>
          <div className="border-t-2 border-white w-24 md:w-48"></div>
        </div>

        <button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="inline-block mt-8 px-6 py-3 bg-white text-gray-800 font-bold rounded-md hover:bg-gray-200 transition duration-300"
        >
          {t('hero_cta')} →
        </button>
      </div>
    </div>
  );
}

export default Hero;