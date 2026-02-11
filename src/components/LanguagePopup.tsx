import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const LanguagePopup: React.FC<{ onSelect: (lang: string) => void }> = ({ onSelect }) => {
  const [show, setShow] = useState(true);
  
  const popupRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();


  const handleSelect = (lang: string) => {
    setShow(false);
    if (popupRef.current) {
      gsap.from(popupRef.current, {
        x: 0,
        ease: 'power2.in',
      }
      )
      gsap.to(popupRef.current, {
        x: 5000,
        duration: 1.0,
        ease: 'power2.in',
        onComplete: () => {
          i18n.changeLanguage(lang);

          onSelect(lang);
        }
      });
    } else {
      i18n.changeLanguage(lang);
      onSelect(lang);
    }
    gsap.fromTo(popupRef.current,
      {  opacity: 1 },
      {  opacity: 0, duration: 3.0, ease: 'power2.in' }
    );
  };

  // useEffect(() => {
  //   // if (show) {
  //   //   document.body.style.overflow = 'hidden';
  //   // } else {
  //   //   document.body.style.overflow = '';
  //   // }
  // });

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-100" ref={popupRef}>
      {/* Sliding welcome banner */}
      <div className=" w-full overflow-hidden mb-8 relative" style={{ height: '4.5rem' }}>
        <div
          className="bg-blue text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white whitespace-nowrap animate-welcome-slide"
          style={{
            display: 'inline-block',
            willChange: 'transform',
            animation: 'welcome-slide 600s linear infinite',
          }}
        >
         Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - خوش آمدید - Bienvenue - Welcome - Willkommen - Benvenuto - Bienvenido - 欢迎 - أهلاً وسهلاً - ようこそ - 환영합니다 - Добро пожаловать - Bem-vindo - स्वागत है - ยินดีต้อนรับ - स्वागत हे - Bienvenido - Benvenuto - Willkomen - Welcome - Bienvenue
        </div>
      </div>
      <div
        className="bg-black rounded-lg p-8 text-center"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px' }}
      >
        <h2 className="mb-4 pb-10 text-3xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">Choose your language</h2>
        <div className="flex justify-center gap-4">
          <button
            className="button-28 text-xl font-bold text-white"
            onClick={() => handleSelect('en')}
          >
            English
          </button>
          <button
            className="button-28 text-xl font-bold text-white"
            onClick={() => handleSelect('fr')}
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePopup;
