import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticles, getCategories } from '../data/articles';
import { CategoryKey } from '../types';
import ArticleCard from '../components/ArticleCard';
import NewsletterCard from '../components/NewsletterCard';

const BlogHome: React.FC = () => {
  const { t } = useTranslation(['common', 'blog']);
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(categories[0]);
  const allArticles = getArticles();
  const filteredArticles =
    activeCategory === 'allInsights'
      ? allArticles
      : allArticles.filter((a) => a.categoryKey === activeCategory);
  const featured = filteredArticles.find((a) => a.featured) ?? filteredArticles[0];
  const recent = featured ? filteredArticles.filter((a) => a.id !== featured.id) : [];

  return (
    <main className="max-w-[1200px] mx-auto w-full px-6 lg:px-12 py-12">
      <div className="w-full mb-12">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap pb-2 border-b border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-underline text-[10px] font-bold uppercase tracking-[0.2em] transition-colors pb-1 ${
                activeCategory === cat ? 'active text-deep-black' : 'text-neutral-gray hover:text-deep-black'
              }`}
            >
              {t(`blog:categories.${cat}`)}
            </button>
          ))}
        </div>
      </div>

      <section className="mb-24">
        {filteredArticles.length === 0 ? (
          <p className="text-neutral-gray text-center py-16 font-sans">
            {t('blog:home.noArticlesInCategory')}
          </p>
        ) : featured ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Link to={`/blog/article/${featured.id}`} className="block w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-xl shadow-black/5">
              <img
                src={featured.imageUrl}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                alt={t(`blog:articles.${featured.id}.title`)}
              />
            </Link>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-neutral-gray text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              {t('blog:home.featuredLabel')} • {t(`blog:categories.${featured.categoryKey}`)}
            </span>
            <Link to={`/blog/article/${featured.id}`}>
              <h1 className="text-3xl lg:text-5xl font-display font-bold leading-[1.1] mb-6 hover:text-primary transition-colors">
                {t(`blog:articles.${featured.id}.title`)}
              </h1>
            </Link>
            <p className="text-neutral-gray text-lg leading-relaxed mb-8 font-light">
              {t(`blog:articles.${featured.id}.description`)}
            </p>
            <div className="flex items-center gap-6">
              <Link to={`/blog/article/${featured.id}`} className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group">
                {t('common:readMore')}
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <span className="text-neutral-gray text-[10px] font-bold uppercase tracking-widest opacity-60">
                {t(`blog:articles.${featured.id}.date`)} • {t(`blog:articles.${featured.id}.readTime`)}
              </span>
            </div>
          </div>
        </div>
        ) : null}
      </section>

      {filteredArticles.length > 0 && (
      <section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-2xl font-display font-bold uppercase tracking-tighter border-l-4 border-primary pl-5">
            {t('blog:home.recentInsights')}
          </h2>
          <div className="hidden sm:flex gap-3">
            <button className="size-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-all" type="button">
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-all" type="button">
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {recent.slice(0, 2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
          <NewsletterCard />
          {recent.slice(2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button className="border-b-2 border-primary text-deep-black font-bold uppercase tracking-[0.2em] text-[10px] py-2 hover:bg-primary/5 px-8 transition-all" type="button">
            {t('blog:home.loadMore')}
          </button>
        </div>
      </section>
      )}
    </main>
  );
};

export default BlogHome;
