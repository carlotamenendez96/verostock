import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation('landing');
  return (
    <section id="sobre-nosotros" className="bg-background-dark py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-30"></div>
            <img
              className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5] shadow-2xl border border-white/10"
              alt={t('about.imageAlt')}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4">{t('about.label')}</p>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-8 leading-tight">
              "{t('about.title')} <br/>
              <span className="text-primary">{t('about.titleHighlight')}</span>"
            </h2>
            <p className="text-tech-grey-light text-xl font-light mb-8 leading-relaxed">
              {t('about.paragraph')}
            </p>
            <div className="relative py-6 pl-8 border-l-2 border-primary">
              <p className="text-white font-medium italic text-lg leading-relaxed">
                "{t('about.mission')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
