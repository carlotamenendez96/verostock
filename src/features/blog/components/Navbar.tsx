import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@shared/components/LanguageSelector';
import VeroStockLogo from '@shared/components/VeroStockLogo';

const Navbar: React.FC = () => {
  const { t } = useTranslation(['common', 'blog']);
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-deep-black transition-transform group-hover:scale-105">
            <VeroStockLogo className="h-10 w-10" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">VeroStock</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label={t('blog:nav.ariaLabel')}>
          <a href="/#sistema" className="text-sm font-medium hover:text-primary transition-colors">{t('blog:nav.solutions')}</a>
          <Link to="/blog" className={`text-sm font-medium transition-colors ${location.pathname === '/blog' ? 'text-primary' : 'hover:text-primary'}`}>{t('blog:nav.insights')}</Link>
          <a href="/#sobre-nosotros" className="text-sm font-medium hover:text-primary transition-colors">{t('blog:nav.aboutUs')}</a>
          <a href="/#contacto" className="text-sm font-medium hover:text-primary transition-colors">{t('blog:nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-6">
          <LanguageSelector variant="blog" />
          <button className="hidden sm:block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:brightness-105 transition-all shadow-sm shadow-primary/20" type="button">
            {t('common:requestDemo')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
