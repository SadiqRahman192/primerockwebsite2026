import supplyImg from '../assets/servicesimages/supply.jpg';
import installationImg from '../assets/servicesimages/installation.jpg';
import consultancyImg from '../assets/servicesimages/consultancy.jpeg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      titleKey: "service_supply",
      slug: "/supplyDetails",
      image: supplyImg,
    },
    {
      titleKey: "service_installation",
      slug: "/installationDetails",
      image: installationImg,
    },
    {
      titleKey: "service_consultancy",
      slug: "/consultancyDetails",
      image: consultancyImg,
    }
  ];

  return (
    <section id="our-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#0A2647] inline-block pb-2 relative">
            {t('services_section_title')}
            <span className="absolute bottom-0 start-0 w-12 h-[3px] bg-[#0A2647]"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={t(service.titleKey)}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content sitting on top of the image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
                  {t(service.titleKey)}
                </h3>
                <Link
                  to={service.slug}
                  className="bg-[#0A2647] text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-[#3ABEF9] transition-colors duration-300"
                >
                  {t('read_more')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;