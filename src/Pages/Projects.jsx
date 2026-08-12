import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/projectimages/projectImage1.jpg';
import img2 from '../assets/projectimages/projectImage2.jpg';
import img3 from '../assets/projectimages/projectImage3.jpg';
import img4 from '../assets/projectimages/projectImage4.jpg';
import img5 from '../assets/projectimages/projectImage5.jpg';
import img6 from '../assets/projectimages/projectImage6.jpg';
import img7 from '../assets/projectimages/projectimage7.jpg';

function Projects() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  const projects = [
    { id: 1, image: img1, key: "project_1" },
    { id: 2, image: img2, key: "project_2" },
    { id: 3, image: img3, key: "project_3" },
    { id: 4, image: img4, key: "project_4" },
    { id: 5, image: img5, key: "project_5" },
    { id: 6, image: img6, key: "project_6" },
    { id: 7, image: img7, key: "project_7" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, currentIndex]);

  return (
    <div className="projects-page bg-gray-50 min-h-screen">

      {/* Page Header */}
      <section className="py-16 bg-[#0A2647] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('projects_page_title')}</h1>
          <div className="w-24 h-1 bg-[#3ABEF9] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            {t('projects_page_desc')}
          </p>
        </div>
      </section>

      {/* Main Professional Slider Section */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-wider text-[#3ABEF9] uppercase">{t('projects_featured_kicker')}</span>
          <h2 className="text-3xl font-bold text-[#0A2647] mt-1">{t('projects_showcase_title')}</h2>
        </div>

        {/* Slider Container */}
        <div
          className="relative max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[500px]"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Slide Image Section */}
          <div className="w-full md:w-3/5 h-64 md:h-full relative overflow-hidden bg-gray-200">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={project.image}
                  alt={t(`${project.key}_title`)}
                  className="w-full h-full object-cover"
                />
                {/* Category tag */}
                <span className="absolute top-6 start-6 bg-[#3ABEF9] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md z-20">
                  {t(`${project.key}_category`)}
                </span>
              </div>
            ))}
          </div>

          {/* Slide Description Section */}
          <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between bg-white relative z-20">
            <div>
              <span className="text-[#3ABEF9] font-medium text-sm block mb-2">
                {t(`${projects[currentIndex].key}_location`)}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A2647] mb-4 leading-snug transition-all">
                {t(`${projects[currentIndex].key}_title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t(`${projects[currentIndex].key}_desc`)}
              </p>
            </div>

            {/* Navigation and Indicators Controls */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t pt-6 border-gray-100">
              {/* Arrow Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border-2 border-[#0A2647] text-[#0A2647] hover:bg-[#0A2647] hover:text-white transition-all rounded-full flex items-center justify-center font-bold"
                  aria-label={t('projects_prev_slide')}
                >
                  {isRTL ? '→' : '←'}
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border-2 border-[#0A2647] text-[#0A2647] hover:bg-[#0A2647] hover:text-white transition-all rounded-full flex items-center justify-center font-bold"
                  aria-label={t('projects_next_slide')}
                >
                  {isRTL ? '←' : '→'}
                </button>
              </div>

              {/* Indicator Dots */}
              <div className="flex gap-1.5">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-6 bg-[#3ABEF9]'
                        : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`${t('projects_go_to_slide')} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2647]">{t('projects_gallery_title')}</h2>
            <div className="w-16 h-1 bg-[#3ABEF9] mx-auto mt-3 mb-4"></div>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t('projects_gallery_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => goToSlide(index)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={t(`${project.key}_title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 end-4 bg-white/95 text-[#0A2647] text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    {t(`${project.key}_category`)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#3ABEF9] font-medium block uppercase tracking-wider mb-1">
                    {t(`${project.key}_location`)}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A2647] mb-2 group-hover:text-[#3ABEF9] transition-colors">
                    {t(`${project.key}_title`)}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {t(`${project.key}_desc`)}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-semibold text-[#0A2647] group-hover:underline">
                    {t('projects_view_showcase')} <span className="ms-1">{isRTL ? '←' : '→'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Projects;