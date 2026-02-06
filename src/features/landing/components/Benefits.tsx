import React from 'react';
import { useTranslation } from 'react-i18next';

const Benefits: React.FC = () => {
  const { t } = useTranslation('landing');
  const benefits = [
    { titleKey: 'benefits.reliableDataTitle' as const, descKey: 'benefits.reliableDataDesc' as const },
    { titleKey: 'benefits.clearVisionTitle' as const, descKey: 'benefits.clearVisionDesc' as const },
    { titleKey: 'benefits.certaintyTitle' as const, descKey: 'benefits.certaintyDesc' as const },
  ];

  return (
    <section id="beneficios" className="bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-20 text-center uppercase tracking-tight">
          {t('benefits.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-0">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="px-10 py-12 border-l border-primary/40 relative group"
            >
              <div className="absolute left-0 top-12 bottom-12 w-1 bg-primary"></div>
              <h3 className="font-montserrat font-bold text-lg text-white mb-6 uppercase tracking-wider group-hover:text-primary transition-colors">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-tech-grey-light text-sm leading-relaxed font-light">
                {t(benefit.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
