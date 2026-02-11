import React from 'react';
import { useTranslation } from 'react-i18next';

type Skill = {
  name: string;
  logo: string;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    category: 'Langages',
    skills: [      
    { name: 'HTML', logo: '/data/html.svg' },
      { name: 'CSS', logo: '/data/css.svg' },
      { name: 'TypeScript', logo: '/data/typescript.svg' },
      { name: 'JavaScript', logo: '/data/javascript.svg' },
      { name: 'Python', logo: '/data/python.svg' },
      { name: 'Php', logo: '/data/php.svg' },
      { name: 'SCSS', logo: '/data/scss.svg' },
      { name: 'Bash', logo: '/data/bash.svg' },
    ],
  },
  {
    category: 'Frameworks & Librairies',
    skills: [
      { name: 'React.Js', logo: '/data/react.svg' },
      { name: 'Node.js', logo: '/data/nodejs.svg' },
      { name: 'Docker', logo: '/data/docker.svg' },
      { name: 'Gsap', logo: '/data/gsap.png' },
      { name: 'Tailwind CSS', logo: '/data/tailwindcss.svg' },
    ],
  },
  {
    category: 'Bases de données',
    skills: [
      { name: 'MySQL', logo: '/data/mysql.svg' },
      { name: 'PostGreSql', logo: '/data/postgresql.svg' },
      { name: 'Mongo DB', logo: '/data/mongodb.svg' },
    ],
  },
  {
    category: 'Outils & Plateformes',
    skills: [
      { name: 'Git', logo: '/data/git.svg' },
      { name: 'GitHub', logo: '/data/github.svg' },
      { name: 'Npm', logo: '/data/npm.svg' },
      { name: 'Stripe', logo: '/data/stripe.svg' },
      { name: 'Linux', logo: '/data/linuxx.svg' },
      { name: 'Figma', logo: '/data/figma.svg' },
      { name: 'Photoshop', logo: '/data/ps.svg' },
      { name: 'Illustrator', logo: '/data/Ai.svg' },
      { name: 'Excel', logo: '/data/excel.svg' },

    ],
  },
  {
    category: 'Marketing & Ads',
    skills: [
      { name: 'Facebook Ads', logo: '/data/fb.svg' },
      { name: 'Google Ads', logo: '/data/googleads.svg' },
    ],
  },
];

const SkillsGrid: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="skills space-y-10" >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-delay='100'>{t('skills')}</h2>
      {skillCategories.map((cat) => (
        <div key={cat.category}>
          <h3 className="text-xl font-bold mb-4 text-white" data-aos="fade-up">{cat.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {cat.skills.map((skill, i) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 rounded-xl bg-black shadow p-4 min-w-[160px] min-h-[70px]"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={i * 100 }
              >
                <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                <span className="font-semibold text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;