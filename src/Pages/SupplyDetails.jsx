import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import stoneBall from '../assets/SupplierDetailsImages/stone13.jpeg';
import stoneCrest from '../assets/SupplierDetailsImages/stone15.jpeg';
import stoneCapital from '../assets/SupplierDetailsImages/stone17.jpeg';
import stoneUrn from '../assets/SupplierDetailsImages/stone18.jpeg';
import stonePedestal from '../assets/SupplierDetailsImages/05.webp';

import claddingWhite from '../assets/SupplierDetailsImages/02-2.webp';
import claddingIslamic from '../assets/SupplierDetailsImages/03-1.webp';
import claddingBeige from '../assets/SupplierDetailsImages/04.webp';
import claddingDiamond from '../assets/SupplierDetailsImages/05-1.webp';

function SupplyDetails() {
  const { t, i18n } = useTranslation();
  const marqueeClass = i18n.language === 'ar' ? 'animate-marquee-reverse' : 'animate-marquee';
  const marqueeReverseClass = i18n.language === 'ar' ? 'animate-marquee' : 'animate-marquee-reverse';

  const architecturalElements = [
    { key: "supply_arch_1", img: stoneBall },
    { key: "supply_arch_2", img: stoneCrest },
    { key: "supply_arch_3", img: stoneCapital },
    { key: "supply_arch_4", img: stoneUrn },
    { key: "supply_arch_5", img: stonePedestal },
  ];

  const claddingPanels = [
    { key: "supply_cladding_1", img: claddingWhite },
    { key: "supply_cladding_2", img: claddingIslamic },
    { key: "supply_cladding_3", img: claddingBeige },
    { key: "supply_cladding_4", img: claddingDiamond },
  ];

  const features = ["supply_feature_1", "supply_feature_2", "supply_feature_3"];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0A2647] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[#3ABEF9] font-semibold uppercase tracking-wider text-sm mb-3">
            {t('supply_hero_kicker')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('supply_hero_title')}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('supply_hero_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="bg-[#3ABEF9] text-[#0A2647] px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors"
            >
              {t('cta_request_quote')}
            </Link>
            <a
              href="https://wa.me/971559775150"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              {t('cta_whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Architectural Elements Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-2">
            {t('supply_arch_title')}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t('supply_arch_desc')}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div className={`flex w-max ${marqueeClass} gap-6`}>
            {[...architecturalElements, ...architecturalElements].map((item, i) => (
              <div
                key={i}
                aria-hidden={i >= architecturalElements.length}
                className="w-64 shrink-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-56 flex items-center justify-center bg-gray-50 p-6">
                  <img
                    src={item.img}
                    alt={i < architecturalElements.length ? t(item.key) : ""}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-center py-4 font-semibold text-[#0A2647] text-sm px-3">
                  {t(item.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cladding Panels Slider */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-2">
            {t('supply_cladding_title')}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t('supply_cladding_desc')}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className={`flex w-max ${marqueeReverseClass} gap-6`}>
            {[...claddingPanels, ...claddingPanels].map((item, i) => (
              <div
                key={i}
                aria-hidden={i >= claddingPanels.length}
                className="w-72 shrink-0 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={i < claddingPanels.length ? t(item.key) : ""}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center py-4 font-semibold text-[#0A2647] text-sm px-3 bg-white">
                  {t(item.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-[#0A2647] text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('supply_why_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((key) => (
              <div key={key} className="text-center">
                <div className="w-12 h-12 bg-[#3ABEF9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#0A2647]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{t(`${key}_title`)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{t(`${key}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-4">
            {t('supply_final_cta_title')}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            {t('supply_final_cta_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#0A2647] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#3ABEF9] hover:text-[#0A2647] transition-all duration-300"
            >
              {t('cta_request_quote')}
            </Link>
            <Link
              to="/projects"
              className="border-2 border-[#0A2647] text-[#0A2647] px-8 py-3 rounded-md font-semibold hover:bg-[#0A2647] hover:text-white transition-all duration-300"
            >
              {t('cta_view_projects')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SupplyDetails;