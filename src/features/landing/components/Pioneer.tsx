import React from 'react';
import { useTranslation } from 'react-i18next';

const Pioneer: React.FC = () => {
  const { t } = useTranslation('landing');
  return (
    <section id="pioneer" className="bg-background-light py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white p-10 sm:p-16 rounded-2xl border border-tech-grey shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-tech-grey text-white text-[10px] font-bold tracking-widest uppercase mb-6">{t('pioneer.badge')}</span>
            <h2 className="font-montserrat font-bold text-4xl text-black mb-6">{t('pioneer.title')}</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl leading-relaxed">
              {t('pioneer.intro')}
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary font-bold">handshake</span>
                  {t('pioneer.benefit1')}
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary font-bold">handshake</span>
                  {t('pioneer.benefit2')}
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary font-bold">handshake</span>
                  {t('pioneer.benefit3')}
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary font-bold">handshake</span>
                  {t('pioneer.benefit4')}
                </li>
              </ul>
            </div>
            <button className="bg-primary text-black px-10 py-4 rounded-lg font-black tracking-tight hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 uppercase text-sm">
              {t('pioneer.cta')}
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-100 rounded-full group-hover:scale-110 transition-transform"></div>
        </div>
      </div>
    </section>
  );
};

export default Pioneer;
