import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@lang/i18n';

const STORAGE_KEY = 'verostock-locale';

const LanguageSelector: React.FC<{ className?: string; variant?: 'landing' | 'blog' }> = ({ className = '', variant = 'landing' }) => {
  const { t } = useTranslation('common');
  const currentLng = i18n.language?.startsWith('es') ? 'es' : 'en';

  const handleChange = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng);
    localStorage.setItem(STORAGE_KEY, lng);
  };

  const baseClass = variant === 'landing'
    ? 'text-white/80 hover:text-primary transition-colors text-sm font-medium'
    : 'text-neutral-gray hover:text-deep-black transition-colors text-sm font-medium';

  return (
    <div className={`flex items-center gap-2 ${className}`} role="group" aria-label={t('language')}>
      <button
        type="button"
        onClick={() => handleChange('es')}
        className={`px-2 py-1 rounded ${baseClass} ${currentLng === 'es' ? (variant === 'landing' ? 'text-primary font-bold' : 'text-primary font-bold') : 'opacity-70'}`}
        aria-pressed={currentLng === 'es'}
      >
        ES
      </button>
      <span className={variant === 'landing' ? 'text-white/40' : 'text-gray-300'} aria-hidden>|</span>
      <button
        type="button"
        onClick={() => handleChange('en')}
        className={`px-2 py-1 rounded ${baseClass} ${currentLng === 'en' ? (variant === 'landing' ? 'text-primary font-bold' : 'text-primary font-bold') : 'opacity-70'}`}
        aria-pressed={currentLng === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
