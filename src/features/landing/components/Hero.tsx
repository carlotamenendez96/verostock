import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation(['common', 'landing']);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="scan-line"></div>
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/80 via-black to-black"></div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="text-primary font-montserrat font-bold text-xs tracking-[0.4em] mb-6 uppercase animate-pulse">{t('landing:hero.tagline')}</p>
        <h2 className="font-montserrat font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 leading-[1.1] tracking-tighter uppercase">
          {t('landing:hero.title')} <span className="text-primary text-glow">{t('landing:hero.titleHighlight')}</span>
        </h2>
        <p className="text-tech-grey-light text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light">
          {t('landing:hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-5 bg-primary text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(56,182,255,0.4)] transition-all active:scale-95 uppercase tracking-wide">
            {t('common:scheduleMeeting')}
          </button>
          <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all active:scale-95 uppercase tracking-wide">
            {t('landing:hero.ctaPioneer')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block opacity-30">
        <div className="flex items-end gap-1.5 h-20">
          <div className="w-1.5 bg-primary h-12 animate-[bounce_2s_infinite]"></div>
          <div className="w-1.5 bg-primary h-8 animate-[bounce_1.5s_infinite]"></div>
          <div className="w-1.5 bg-primary h-16 animate-[bounce_2.5s_infinite]"></div>
          <div className="w-1.5 bg-primary h-10 animate-[bounce_1.8s_infinite]"></div>
          <div className="w-1.5 bg-primary h-14 animate-[bounce_2.2s_infinite]"></div>
        </div>
        <p className="text-[10px] text-primary mt-3 font-mono uppercase tracking-widest">{t('landing:hero.warehouseStatus')}</p>
      </div>
    </section>
  );
};

export default Hero;
