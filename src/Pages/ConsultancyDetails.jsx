import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ConsultancyDetails() {
  const { t } = useTranslation();

  const processSteps = ["consult_step_1", "consult_step_2", "consult_step_3", "consult_step_4"];
  const guarantees = ["consult_guarantee_1", "consult_guarantee_2", "consult_guarantee_3"];
  const faqs = ["consult_faq_1", "consult_faq_2", "consult_faq_3"];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0A2647] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[#3ABEF9] font-semibold uppercase tracking-wider text-sm mb-3">
            {t('consult_hero_kicker')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('consult_hero_title')}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {t('consult_hero_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#3ABEF9] text-[#0A2647] px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors"
            >
              {t('consult_hero_cta')}
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

      {/* Intro Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-6">
            {t('consult_intro_title')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('consult_intro_p1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('consult_intro_p2')}
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2647] mb-2">{t('consult_process_title')}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t('consult_process_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((key, index) => (
              <div key={key} className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <span className="text-5xl font-bold text-[#3ABEF9]/30 absolute top-4 end-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-lg text-[#0A2647] mb-3 relative z-10">{t(`${key}_title`)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{t(`${key}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees / Trust */}
      <section className="py-16 px-4 bg-[#0A2647] text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('consult_trust_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((key) => (
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

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0A2647] text-center mb-10">
            {t('consult_faq_title')}
          </h2>
          <div className="space-y-6">
            {faqs.map((key) => (
              <div key={key} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0A2647] mb-2">{t(`${key}_q`)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(`${key}_a`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-4">
            {t('consult_final_cta_title')}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            {t('consult_final_cta_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#0A2647] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#3ABEF9] hover:text-[#0A2647] transition-all duration-300"
            >
              {t('consult_hero_cta')}
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

export default ConsultancyDetails;