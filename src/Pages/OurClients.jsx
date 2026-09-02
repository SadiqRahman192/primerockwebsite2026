import damac from '../assets/ourclientsicons/damac.jpeg';
import freeeage from '../assets/ourclientsicons/freeeage.avif';
import gamma from '../assets/ourclientsicons/gammma.png';
import hidubai from '../assets/ourclientsicons/hidubai.png';
import sp from '../assets/ourclientsicons/sp.png';
import { useTranslation } from 'react-i18next';

function OurClients() {
  const { t, i18n } = useTranslation();
  const marqueeClass = i18n.language === 'ar' ? 'animate-marquee-reverse' : 'animate-marquee';

  const clients = [
    { id: 1, name: "DAMAC Properties", logo: damac },
    { id: 2, name: "Free Eagle", logo: freeeage },
    { id: 3, name: "Gamma Contracting", logo: gamma },
    { id: 4, name: "hi Dubai", logo: hidubai },
    { id: 5, name: "S&P Contracting", logo: sp },
  ];

  return (
    <div className="our-clients-page bg-gray-50">

      {/* Page Header */}
      <section className="py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#0A2647] inline-block pb-2 relative">
            {t('clients_section_title')}
            <span className="absolute bottom-0 start-0 w-12 h-[3px] bg-[#0A2647]"></span>
          </h2>
        </div>

        {/* Partners Marquee */}
        <div className="py-16">
          <div className="relative w-full overflow-hidden">
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

            <div className={`flex w-max ${marqueeClass} gap-5`}>
              {/* first set */}
              {clients.map((client) => (
                <div
                  key={`a-${client.id}`}
                  className="h-28 w-56 flex items-center justify-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 shrink-0"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
              {/* duplicate set — exact same gap keeps the loop seamless */}
              {clients.map((client) => (
                <div
                  key={`b-${client.id}`}
                  className="h-28 w-56 flex items-center justify-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 shrink-0"
                  aria-hidden="true"
                >
                  <img
                    src={client.logo}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default OurClients;
