import React from 'react';
import { useTranslation } from 'react-i18next';

const Problem: React.FC = () => {
  const { t } = useTranslation('landing');
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-px h-24 bg-slate-100 mx-auto mb-16"></div>
        <h3 className="font-montserrat font-bold tracking-tight uppercase">
          <span className="block text-black text-4xl sm:text-5xl mb-2">{t('problem.line1')}</span>
          <span className="block text-[#9aafbc] text-4xl sm:text-5xl">{t('problem.line2')}</span>
        </h3>
        <div className="w-px h-24 bg-slate-100 mx-auto mt-16 mb-16"></div>
        <p className="text-slate-400 text-lg sm:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
          "{t('problem.quote')}"
        </p>
      </div>
    </section>
  );
};

export default Problem;
