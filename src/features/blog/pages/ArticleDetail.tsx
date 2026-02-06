import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticleById } from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('blog');
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = id ? getArticleById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!article) return <div className="p-20 text-center">{t('articleDetail.notFound')}</div>;

  const title = t(`articles.${article.id}.title`);
  const description = t(`articles.${article.id}.description`);
  const content = t(`articles.${article.id}.content`);
  const date = t(`articles.${article.id}.date`);
  const categoryLabel = t(`categories.${article.categoryKey}`);

  const handleGenerateSummary = async () => {
    setLoadingSummary(true);
    setTimeout(() => {
      setSummary(t('articleDetail.summaryComingSoon'));
      setLoadingSummary(false);
    }, 1000);
  };

  return (
    <>
      <div className="fixed top-20 left-0 w-full h-1 z-50 bg-gray-100">
        <div
          className="h-full bg-primary transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="pt-20 pb-24 px-6">
        <article className="max-w-[800px] mx-auto">
          <header className="text-center mb-16">
            <p className="text-neutral-gray font-display font-bold text-[10px] tracking-[0.3em] uppercase mb-6">
              {t('nav.insights')} / {categoryLabel} — {date}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-deep-black leading-[1.1] mb-10">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray font-sans font-light leading-relaxed max-w-2xl mx-auto italic">
              {description}
            </p>
          </header>

          <div className="mb-20">
            <img
              src={article.imageUrl}
              alt={title}
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl shadow-black/10"
            />
          </div>

          <div className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-primary">{t('articleDetail.insightAiLabel')}</span>
              </div>
              <button
                onClick={handleGenerateSummary}
                disabled={loadingSummary}
                className="text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-5 py-2 rounded-lg hover:brightness-105 disabled:opacity-50 transition-all"
                type="button"
              >
                {loadingSummary ? t('articleDetail.analyzing') : summary ? t('articleDetail.regenerateSummary') : t('articleDetail.quickSummary')}
              </button>
            </div>
            {summary && (
              <div className="text-neutral-gray leading-relaxed font-sans text-sm border-t border-primary/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-500">
                {summary}
              </div>
            )}
            {!summary && !loadingSummary && (
              <p className="text-xs text-neutral-gray/60 italic">{t('articleDetail.summaryPlaceholder')}</p>
            )}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-neutral-gray prose-p:leading-loose prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-10 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-xl">
            <p>{content}</p>

            <h2 className="mt-16 mb-8 text-3xl">{t('articleDetail.challengeTitle')}</h2>
            <p>
              {t('articleDetail.challengeParagraph')}
            </p>

            <blockquote className="my-16 font-display font-medium text-deep-black">
              "{t('articleDetail.quote')}"
            </blockquote>

            <h3 className="text-2xl font-display mb-6">{t('articleDetail.solutionsTitle')}</h3>
            <p>
              {t('articleDetail.solutionsIntro')}
            </p>
            <ul className="list-none space-y-6 pl-0">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                <span>{t('articleDetail.bullet1')}</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                <span>{t('articleDetail.bullet2')}</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                <span>{t('articleDetail.bullet3')}</span>
              </li>
            </ul>

            <div className="mt-24 p-12 bg-deep-black text-white rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-primary opacity-20 group-hover:scale-125 transition-transform duration-700">
                <span className="material-symbols-outlined text-8xl">lightbulb</span>
              </div>
              <h4 className="font-display font-bold text-[10px] uppercase tracking-[0.4em] text-primary mb-6">{t('articleDetail.reflectionTitle')}</h4>
              <p className="text-2xl font-display font-light leading-relaxed relative z-10 italic">
                {t('articleDetail.reflectionParagraph')}
              </p>
            </div>

            <div className="mt-24 text-center border-t border-gray-100 pt-20">
              <p className="text-xl font-display text-neutral-gray mb-8">
                {t('articleDetail.contactPrompt')}
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:underline transition-all group"
              >
                {t('articleDetail.contactLink')}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default ArticleDetail;
