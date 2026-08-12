import aboutImage from '../assets/aboutimage/about.png';
import AnimatedNumber from '../components/AnimatedNumber';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] mb-6">
              {t('about_title')}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {t('about_p1')}
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {t('about_p2')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-12">
              <div>
                <span className="text-4xl md:text-5xl font-bold text-[#0A2647] block">
                  <AnimatedNumber target={10} suffix="+" />
                </span>
                <span className="text-gray-400 text-xl md:text-2xl font-semibold uppercase tracking-wider">
                  {t('about_years_experience')}
                </span>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-bold text-[#0A2647] block">
                  <AnimatedNumber target={50} suffix="+" />
                </span>
                <span className="text-gray-400 text-xl md:text-2xl font-semibold uppercase tracking-wider">
                  {t('about_projects_completed')}
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative p-3 rounded-sm">
              <div className="w-full max-w-[450px]">
                <div className="aspect-square overflow-hidden">
                  <img src={aboutImage} alt={t('about_image_alt')} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;