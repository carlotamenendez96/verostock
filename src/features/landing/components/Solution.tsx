import React from 'react';
import { useTranslation } from 'react-i18next';

const Solution: React.FC = () => {
  const { t } = useTranslation('landing');
  return (
    <section id="sistema" className="bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4">{t('solution.label')}</p>
          <div className="relative inline-block">
            <h2 className="font-montserrat font-black text-5xl sm:text-6xl text-white uppercase tracking-tight">
              {t('solution.title')}
            </h2>
            <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-primary"></div>
          </div>
          <p className="text-tech-grey-light text-lg mt-12 max-w-2xl leading-relaxed">
            {t('solution.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-sm">
            <div className="text-primary mb-8">
              <span className="material-symbols-outlined text-4xl scale-125">sensors</span>
            </div>
            <h4 className="text-white font-montserrat font-bold text-xl uppercase mb-4 tracking-wide">{t('solution.invisibleTechTitle')}</h4>
            <p className="text-tech-grey-light text-sm leading-relaxed">
              {t('solution.invisibleTechDesc')}
            </p>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-sm">
            <div className="text-primary mb-8">
              <span className="material-symbols-outlined text-4xl scale-125">notifications_active</span>
            </div>
            <h4 className="text-white font-montserrat font-bold text-xl uppercase mb-4 tracking-wide">{t('solution.smartAnticipationTitle')}</h4>
            <p className="text-tech-grey-light text-sm leading-relaxed">
              {t('solution.smartAnticipationDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
