import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NewsletterCard: React.FC = () => {
  const { t } = useTranslation('blog');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-10 flex flex-col justify-center items-center text-center">
      <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
        <span className="material-symbols-outlined">mail</span>
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{t('newsletter.title')}</h3>
      {submitted ? (
        <p className="text-neutral-gray text-sm leading-relaxed">{t('newsletter.thankYou')}</p>
      ) : (
        <>
          <p className="text-neutral-gray text-sm mb-8 leading-relaxed">
            {t('newsletter.description')}
          </p>
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className="w-full bg-white border-gray-200 rounded-lg focus:ring-primary focus:border-primary text-sm px-4 py-3 placeholder:text-gray-400 placeholder:font-medium"
              placeholder={t('newsletter.placeholder')}
              type="email"
              required
            />
            <button className="w-full bg-deep-black text-white font-bold uppercase tracking-widest text-[10px] py-4 rounded-lg hover:bg-neutral-800 transition-all shadow-lg shadow-black/10">
              {t('newsletter.submit')}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewsletterCard;
