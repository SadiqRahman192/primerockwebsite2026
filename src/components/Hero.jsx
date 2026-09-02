import heroImage from '../assets/logoandhero/mainhero.png';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  const whatsappUrl = "https://wa.me/971559775150?text=" + encodeURIComponent(
    "Hi Prime Stone, I'd like to request an estimate for my project."
  );

  return (
    <div
      className="relative bg-cover h-screen bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="flex items-center text-center absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="text-center items-center container px-6 relative z-10 text-white">
        {/* Bilingual Title Section */}
        <div className="mb-6">
          {/* English Title */}
          <h1 className="font-serif font-bold text-5xl md:text-7xl leading-tight mb-2">
            Prime Rock
          </h1>
          {/* Arabic Title */}
          <h1 className="font-arabic font-bold text-4xl md:text-6xl leading-tight opacity-90">
            برايم روك
          </h1>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 md:w-24 bg-white/60"></div>
          <div className="mx-4 w-2 h-2 rounded-full bg-white/80"></div>
          <div className="h-px w-16 md:w-24 bg-white/60"></div>
        </div>

        {/* Bilingual Tagline Section */}
        <div className="space-y-2 mb-8">
          {/* English Tagline */}
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Stone Supply & Installation
          </p>
          {/* Arabic Tagline */}
          <p className="font-arabic text-lg md:text-xl opacity-85">
            توريد وتركيب الحجر
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="inline-block px-8 py-3 bg-white text-gray-800 font-bold rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          {t('hero_cta')} →
        </button>
      </div>
    </div>
  );
}

export default Hero;
