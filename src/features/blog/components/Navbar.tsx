import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@shared/components/LanguageSelector';

const VSLogo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M25 20 H20 V25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M75 20 H80 V25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 75 V80 H25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M80 75 V80 H75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="50" y="62" fontFamily="Montserrat" fontWeight="900" fontSize="34" textAnchor="middle" fill="currentColor">VS</text>
    <line x1="15" y1="50" x2="85" y2="50" stroke="#38b6ff" strokeWidth="3" />
  </svg>
);

const Navbar: React.FC = () => {
  const { t } = useTranslation(['common', 'blog']);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-deep-black transition-transform group-hover:scale-105">
            <VSLogo className="h-10 w-10" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">VeroStock</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">{t('blog:nav.solutions')}</a>
          <a href="#" className="text-sm font-medium text-primary transition-colors">{t('blog:nav.insights')}</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">{t('blog:nav.aboutUs')}</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">{t('blog:nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-6">
          <LanguageSelector variant="blog" />
          <button className="material-symbols-outlined text-deep-black hover:text-primary transition-colors" type="button" aria-label={t('common:searchAriaLabel')}>search</button>
          <button className="hidden sm:block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:brightness-105 transition-all shadow-sm shadow-primary/20" type="button">
            {t('common:requestDemo')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
