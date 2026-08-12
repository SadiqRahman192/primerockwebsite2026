import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Clients from '../Pages/OurClients';
import Contact from '../Pages/Contact';
import img1 from '../assets/projectimages/projectImage1.jpg';
import img2 from '../assets/projectimages/projectImage2.jpg';
import img3 from '../assets/projectimages/projectImage3.jpg';
import GoogleMapSection from '../components/GoogleMapSection';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      id: 1,
      image: img1,
      titleKey: "project_1_title",
      locationKey: "project_1_location",
    },
    {
      id: 2,
      image: img2,
      titleKey: "project_2_title",
      locationKey: "project_2_location",
    },
    {
      id: 3,
      image: img3,
      titleKey: "project_3_title",
      locationKey: "project_3_location",
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />

      {/* Our Work Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">

          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#0A2647] inline-block pb-2 relative">
              {t('work_section_title')}
              <span className="absolute bottom-0 start-0 w-12 h-[3px] bg-[#0A2647]"></span>
            </h2>
          </div>

          {/* Project Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-md group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-bold text-lg">{t(project.titleKey)}</h3>
                  <p className="text-sm text-gray-200">{t(project.locationKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Button */}
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 border-2 border-[#0A2647] text-[#0A2647] rounded-xl font-semibold hover:bg-[#0A2647] hover:text-white transition-all duration-300"
            >
              {t('explore_all')}
            </Link>
          </div>

        </div>
      </section>

      <Clients />
      <Contact />
      <GoogleMapSection />

    </div>
  );
}

export default Home;