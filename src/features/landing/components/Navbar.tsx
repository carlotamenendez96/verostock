import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@shared/components/LanguageSelector';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { t } = useTranslation(['common', 'landing']);
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative size-12 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-500 rounded-tl-sm"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-slate-500 rounded-tr-sm"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-slate-500 rounded-bl-sm"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-500 rounded-br-sm"></div>
            <div className="relative flex items-center justify-center overflow-hidden w-full h-full">
               <span className="text-white font-black text-2xl tracking-tighter z-10">VS</span>
               <div className="absolute w-full h-[2px] bg-primary top-1/2 -translate-y-1/2 z-20 shadow-[0_0_8px_rgba(56,182,255,0.6)]"></div>
            </div>
          </div>
          <span className="text-white font-montserrat font-bold text-lg tracking-tight hidden sm:block">VeroStock</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-white/80 hover:text-primary transition-colors" href="#sistema">{t('landing:navbar.howItWorks')}</a>
          <a className="text-sm font-medium text-white/80 hover:text-primary transition-colors" href="#beneficios">{t('landing:navbar.dailyManagement')}</a>
          <a className="text-sm font-medium text-white/80 hover:text-primary transition-colors" href="#pioneer">{t('landing:navbar.pioneerProgram')}</a>
          <LanguageSelector variant="landing" className="ml-2" />
          <button className="bg-primary text-black px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight hover:brightness-110 active:scale-95 transition-all uppercase">
            {t('common:scheduleMeeting')}
          </button>
        </nav>

        <button className="md:hidden text-white flex items-center gap-2 group" aria-label={t('common:menu')}>
          <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors">{t('common:menu').toUpperCase()}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
