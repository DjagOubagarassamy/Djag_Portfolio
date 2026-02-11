import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillsGrid from './SkillsGrid';


const About: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);


  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* <div className="text-center mb-16">
          {/* <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div> 
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" >
            <h3 className="h3-title text-2xl font-semibold mb-4" data-aos="fade-up" data-aos-delay='100'>{t('about')}</h3>
            <p className="text-white mb-6 font-semibold" data-aos="fade-up" data-aos-delay='10'>
              {t('about_desc1')}
            </p>
            <p className="text-white font-semibold" data-aos="fade-up">
              {t('about_desc2')}
            </p>
            <p className="text-white font-semibold" data-aos="fade-up">
              {t('about_desc3')}
            </p>


            {/* <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-purple-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          <div className="order-1 md:order-2 flex justify-center" data-aos="fade-up">
            <div className="relative">
              <div id='photo' className="w-64 h-64 sm:w-80 sm:h-80  overflow-hidden">
                <img
                  src="/data/djagg.JPG"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 bg-purple-800 w-20 h-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold">3+</div>
                  <div className="text-sm">Année d'expérience</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

export default About;