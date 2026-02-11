import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container flex flex-col items-center mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('contact')}</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('contact_desc')}
          </p>
        </div>

          <div className='container flex flex-col items-center mx-auto px-4 sm:px-6'>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Courrier</h4>
                  <a href="mailto:hello@example.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                    oubadjag@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Téléphone</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +33 6 34 31 48 75
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Localisation</h4>
                  <p className="text-gray-300">
                    Poitiers, France
                  </p>
                </div>
              </div>
            </div>
            
            <div className="container flex flex-col items-center mx-auto px-4 sm:px-6 mt-12" >
              <h3 className="text-2xl font-semibold mb-6">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/DjagOubagarassamy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/djag-ouba-11562a258/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                {/* <a 
                  href="https://twitter.com/toinfinite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div> */}
      </div>
    </section>
  );
};

export default Contact;