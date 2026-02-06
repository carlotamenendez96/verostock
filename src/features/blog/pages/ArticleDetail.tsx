import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticleById } from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('blog');
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
  const cta = t(`articles.${article.id}.cta`);
  const date = t(`articles.${article.id}.date`);
  const categoryLabel = t(`categories.${article.categoryKey}`);

  const contentBlocks = content.split(/\n\n+/).filter((block) => block.trim());
  const renderContentBlock = (block: string, index: number) => {
    const trimmed = block.trim();
    const isList = trimmed.startsWith('- ') && trimmed.includes('\n');
    if (isList) {
      const items = trimmed.split('\n').filter((line) => line.trim());
      return (
        <ul key={index} className="list-none space-y-3 pl-0 my-6">
          {items.map((line, i) => (
            <li key={i} className="flex gap-3 items-start text-neutral-gray leading-loose">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">check_circle</span>
              <span>{line.replace(/^-\s*/, '').trim()}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="mb-6">
        {trimmed}
      </p>
    );
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
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neutral-gray hover:text-primary font-sans text-sm font-medium mb-10 transition-colors group"
          >
            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
            {t('articleDetail.backToBlog')}
          </Link>
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

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-neutral-gray prose-p:leading-loose">
            {contentBlocks.map(renderContentBlock)}
          </div>

          <div className="mt-24 p-12 bg-deep-black text-white rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-primary opacity-20 group-hover:scale-125 transition-transform duration-700">
              <span className="material-symbols-outlined text-8xl">lightbulb</span>
            </div>
            <p className="text-xl font-display font-light leading-relaxed relative z-10 mb-8">
              {cta}
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:underline transition-all group"
            >
              {t('articleDetail.contactLink')}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
};

export default ArticleDetail;
