import React from 'react';
import { useTranslation } from 'react-i18next';

type Skill = {
  name: string;
  logo: string;
  expertLevel: boolean;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};



const SkillsGrid: React.FC = () => {
  const { t } = useTranslation();
  const skillCategories: SkillCategory[] = [
    {
      category: t('languages', { defaultValue: 'Langages' }),
      skills: [      
      { name: 'HTML, CSS, JS', logo: '/data/web.svg', expertLevel: true },
        // { name: 'CSS', logo: '/data/css.svg', expertLevel: true },
        { name: 'TypeScript', logo: '/data/typescript.svg', expertLevel: true },
        // { name: 'JavaScript', logo: '/data/javascript.svg', expertLevel: true },
        { name: 'Python', logo: '/data/python.svg', expertLevel: false },
        { name: 'Java', logo: '/data/java.svg', expertLevel: false },
        // { name: 'SCSS', logo: '/data/scss.svg', expertLevel: false },
        { name: 'Bash', logo: '/data/bash.svg', expertLevel: false },
      ],
    },
    {
      category: t('frameworks', { defaultValue: 'Frameworks & Technologies' }),
      skills: [
        { name: 'React.Js', logo: '/data/react.svg', expertLevel: true },
        { name: 'Node.js', logo: '/data/nodejs.svg', expertLevel: true },
        { name: 'Docker', logo: '/data/docker.svg', expertLevel: false },
        // { name: 'Gsap', logo: '/data/gsap.png', expertLevel: false },
        { name: 'Tailwind CSS', logo: '/data/tailwindcss.svg', expertLevel: true },
      ],
    },
    {
      category: t('BDD', { defaultValue: 'Bases de données' }),
      skills: [
        { name: 'MySQL', logo: '/data/mysql.svg', expertLevel: true },
        { name: 'PostGreSql', logo: '/data/postgresql.svg', expertLevel: false },
        { name: 'Mongo DB', logo: '/data/mongodb.svg', expertLevel: false },
      ],
    },
    {
      category: t('tools', { defaultValue: 'Outils' }),
      skills: [
        { name: 'Git', logo: '/data/git.svg', expertLevel: true },
        { name: 'GitHub', logo: '/data/github.svg', expertLevel: true },
        // { name: 'Npm', logo: '/data/npm.svg', expertLevel: false },
        // { name: 'Stripe', logo: '/data/stripe.svg', expertLevel: false },
        { name: 'Linux', logo: '/data/linuxx.svg', expertLevel: true },
        // { name: 'Figma', logo: '/data/figma.svg', expertLevel: false },
        { name: 'Photoshop', logo: '/data/ps.svg', expertLevel: false },
        { name: 'Illustrator', logo: '/data/Ai.svg', expertLevel: false },
        { name: 'Excel', logo: '/data/excel.svg', expertLevel: false },
  
      ],
    },
    // {
    //   category: 'Marketing & Ads',
    //   skills: [
    //     { name: 'Facebook Ads', logo: '/data/fb.svg', expertLevel: false },
    //     { name: 'Google Ads', logo: '/data/googleads.svg', expertLevel: false },
    //   ],
    // },
    { 
      category: t('security', { defaultValue: 'Cybersécurité' }),
      skills: [
        { name: 'Kali Linux', logo: '/data/kali.svg', expertLevel: false },
      ],
    },
  ];
  return (
    <div className="skills space-y-10" >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-delay='100'>{t('Tech_skills', { defaultValue: 'Compétences Techniques' })}</h2>
      <div className="flex items-center gap-2 mt-8 text-sm text-gray-300 justify-center" data-aos="fade-up">
        <img 
          src="/data/star.svg" 
          alt="Expertise indicator" 
          className="w-5 h-5"
          style={{ filter: 'invert(14%) sepia(97%) saturate(7472%) hue-rotate(263deg) brightness(90%) contrast(110%)' }}
        />
        <span>
          <strong>Expertise :</strong> {t('expert_desc', { defaultValue: "Cette étoile indique un niveau d'expertise avancé sur la technologie concernée." })}
        </span>
      </div>
      {skillCategories.map((cat) => (
        <div key={cat.category}>
          <h3 className="text-xl font-bold mb-4 text-white" data-aos="fade-up">{cat.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {cat.skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`relative flex items-center gap-3 rounded-xl shadow p-4 min-w-[160px] min-h-[70px] bg-black`}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={i * 100 }
              >
                {skill.expertLevel && (
                  <img 
                    src="/data/star.svg" 
                    alt="Expert" 
                    className="absolute -top-2 -right-2 w-7 h-7"
                      style={{ filter: 'invert(14%) sepia(97%) saturate(7472%) hue-rotate(263deg) brightness(90%) contrast(110%)' }}
                  />
                )}
                <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                <span className="font-semibold text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Légende expert */}
    </div>
  );
};

export default SkillsGrid;