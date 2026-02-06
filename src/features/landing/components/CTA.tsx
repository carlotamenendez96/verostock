import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA: React.FC = () => {
  const { t } = useTranslation(['common', 'landing']);
  return (
    <section className="bg-background-dark py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full animate-[pulse_8s_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full animate-[pulse_6s_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full animate-[pulse_4s_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-montserrat font-black text-4xl sm:text-6xl text-white mb-8 tracking-tighter uppercase leading-none">
          {t('landing:cta.title')}
        </h2>
        <p className="text-tech-grey-light text-xl mb-12 max-w-2xl mx-auto font-light">
          {t('landing:cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-black px-12 py-5 rounded-lg text-lg font-bold tracking-tight hover:scale-105 hover:shadow-[0_0_40px_rgba(56,182,255,0.4)] transition-all active:scale-95 uppercase">
            {t('landing:cta.talkToUs')}
          </button>
          <button className="border border-white/20 text-white px-12 py-5 rounded-lg text-lg font-bold tracking-tight hover:bg-white/5 transition-all active:scale-95 uppercase">
            {t('common:scheduleMeeting')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
