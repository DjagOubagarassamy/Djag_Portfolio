import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'en ligne' | 'hors ligne';
  companyName: string;
  clientType: 'professionnel' | 'particulier';
  date: string;
  liveLink?: string;
  githubLink?: string;
  projectLink?: string;
}

import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Banque de données "HPMat"',
      description: "HPMat est une banque de données à destination des chercheurs en chimie quantique théorique, dans lequelle on peut consulter, visualiser et télécharger des données. Il s'agit d'une application full-stack réalisée avec React pour le front-end, Node.js pour l'API REST et Mysql pour la base de données.",
      image: '/data/HPMat_logo.png',
      tags: ['Full-Stack', 'React', 'Node.js', 'MySQL', 'JavaScript', 'Python', 'API REST', 'Librairies Python & JS'],
      status: 'en ligne',
      companyName: 'IC2MP, CNRS',
      clientType: 'professionnel',
      date: '2026',
      projectLink: 'https://hpmat.org',
    },
    {
      id: 2,
      title: 'Plateforme E-Commerce "Lydae"',
      description: "Lydae Shop est un site e-commerce complet conçu pour une entreprise de textile comprenant : un front-end utilisateur, une API REST dédiée et une base de données MongoDB. Il intègre un système de paiement fonctionnel via Stripe.",
      image: '/data/Lydae.png',
      tags: ['Full-Stack', 'React', 'Node.js', 'JavaScript', 'MongoDB', 'Stripe'],
      status: 'hors ligne',
      companyName: 'T.mxsis',
      clientType: 'professionnel',
      date: '2023',
    },
    {
      id: 3,
      title: 'Site Vitrine "House24"',
      description: 'House 24 est un site vitrine conçu pour une entreprise de restauration. Il propose un mécanisme de réservation et, surtout, un rendu 3D sur la page d’accueil réalisé avec Three.js.',
      image: '/data/House24.png',
      tags: ['Front-end', 'React', 'Three.js', 'Tailwind CSS', 'GSAP'],
      status: 'hors ligne',
      companyName: 'House24',
      clientType: 'professionnel',
      date: '2022',
    },
    {
      id: 4,
      title: 'Programme d’automatisation "DearBot"',
      description: 'DearBot est un bot Python développé pour un serveur Discord de revente. Il est réalisé avec BeautifulSoup 4 et Discord.js et inclut un contournement de Cloudflare. Connecté à l’API Vinted, il permet de récupérer les articles plus rapidement.',
      image: '/data/Dearbot.png',
      tags: ['Back-End','JavaScript', 'API', 'Web Scraping', 'Discord.js', 'BeautifulSoup4'],
      status: 'hors ligne',
      companyName: 'Discord Server',
      clientType: 'particulier',
      date: '2022',
    },
    {
      id: 5,
      title: 'Site Vitrine "Basalt COD"',
      description: 'Basalt COD est un site vitrine conçu pour une entreprise de developpement de jeux vidéos, créé pour le lancement de ce jeu mobile. Il intègre des animations dynamiques, réalisées avec SVGator et GSAP, spécialement pour le défilement horizontal.',
      image: '/data/Basalt.png',
      tags: ['Front-end', 'Gsap', 'SvgAtor', 'HTML', 'CSS', 'JavaScript'],
      status: 'hors ligne',
      companyName: 'NGED',
      clientType: 'professionnel',
      date: '2022',
    },
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-aos="fade-up">{t('projects')}</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6" data-aos="fade-up"></div>
          <p className="text-gray-300 max-w-2xl mx-auto" data-aos="fade-up">
            {t('projects_desc')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 none">
          <button 
            onClick={() => setActiveFilter('all')} 
            className={`px-4 display:none py-2 rounded-full text-sm ${
              activeFilter === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition-colors duration-300`}
          >
            All
          </button>
          
          {allTags.map((tag, index) => (
            <button 
              key={index}
              onClick={() => setActiveFilter(tag)} 
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === tag 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-colors duration-300`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const CardContent = (
              <>
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className={`absolute top-3 left-3 z-10 text-xs font-semibold px-2 py-1 rounded-full ${project.status === 'en ligne' ? 'bg-green-800 text-white' : 'bg-red-800 text-white'}`}
                  >{project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-1">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-300 font-medium">Entreprise : <span className="font-semibold">{project.companyName}</span></span>
                    <span className="text-sm text-gray-300 font-medium">Client : <span className="font-semibold">{project.clientType}</span></span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <span className="block text-xs italic opacity-60 text-center">{project.date}</span>
                  </div>
                </div>
              </>
            );
            return project.projectLink ? (
              <a
                key={project.id}
                id="card_project"
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg overflow-hidden group block hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                style={{ textDecoration: 'none' }}
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={project.id}
                id="card_project"
                className="bg-gray-800 rounded-lg overflow-hidden group"
                data-aos="fade-up"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;