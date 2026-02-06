import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('landing');
  return (
    <footer className="bg-black py-16 border-t border-white/5 text-tech-grey-light">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative size-10 flex items-center justify-center">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-500 rounded-tl-sm"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-500 rounded-tr-sm"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-500 rounded-bl-sm"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-500 rounded-br-sm"></div>
              <div className="relative flex items-center justify-center overflow-hidden w-full h-full">
                <span className="text-white font-black text-lg tracking-tighter z-10">VS</span>
                <div className="absolute w-full h-[1.5px] bg-primary top-1/2 -translate-y-1/2 z-20"></div>
              </div>
            </div>
            <span className="text-white font-montserrat font-bold text-lg tracking-tight">VEROSTOCK</span>
          </div>
          <p className="max-w-sm mb-8 leading-relaxed flex flex-wrap items-center gap-x-1">
            <span className="text-white font-bold">VeroStock</span>
            <span className="inline-flex relative size-4 border border-slate-700 items-center justify-center rounded-[2px] mx-1">
               <span className="text-[8px] text-white font-black">VS</span>
               <span className="absolute w-full h-[1px] bg-primary top-1/2 -translate-y-1/2"></span>
            </span>
            {t('footer.tagline')}
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">{t('footer.navigation')}</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#pioneer">{t('footer.pioneerProgram')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#sistema">{t('footer.howItWorks')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#beneficios">{t('footer.benefits')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#contacto">{t('footer.contact')}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">{t('footer.legal')}</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#privacidad">{t('footer.privacy')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#terminos">{t('footer.terms')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#cookies">{t('footer.cookies')}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">{t('footer.socialBlog')}</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">{t('footer.blog')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em]">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        <p>{t('footer.designedFor')}</p>
      </div>
    </footer>
  );
};

export default Footer;
