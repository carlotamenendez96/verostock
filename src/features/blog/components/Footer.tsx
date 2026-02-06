import React from 'react';
import { useTranslation } from 'react-i18next';
import VeroStockLogo from '@shared/components/VeroStockLogo';

const Footer: React.FC = () => {
  const { t } = useTranslation('blog');
  return (
    <footer className="border-t border-gray-100 py-12 bg-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
          <div className="text-deep-black">
            <VeroStockLogo className="h-8 w-8" />
          </div>
          <span className="text-md font-display font-bold tracking-tight">VeroStock</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="#" className="text-[10px] font-bold text-neutral-gray hover:text-deep-black transition-colors uppercase tracking-widest">{t('footer.privacyPolicy')}</a>
          <a href="#" className="text-[10px] font-bold text-neutral-gray hover:text-deep-black transition-colors uppercase tracking-widest">{t('footer.termsOfService')}</a>
          <a href="#" className="text-[10px] font-bold text-neutral-gray hover:text-deep-black transition-colors uppercase tracking-widest">{t('footer.knowledgeBase')}</a>
        </div>

        <p className="text-[10px] text-neutral-gray font-medium uppercase tracking-widest">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
