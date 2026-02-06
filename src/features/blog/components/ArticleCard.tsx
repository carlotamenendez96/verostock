import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { t } = useTranslation('blog');
  const title = t(`articles.${article.id}.title`);
  return (
    <article className="flex flex-col h-full group">
      <Link to={`/blog/article/${article.id}`} className="block w-full aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100">
        <img
          src={article.imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <span className="text-neutral-gray text-[10px] font-bold uppercase tracking-widest mb-3">
        {t(`categories.${article.categoryKey}`)}
      </span>
      <Link to={`/blog/article/${article.id}`}>
        <h3 className="text-xl mb-3 group-hover:text-primary transition-colors font-display font-bold leading-snug">
          {title}
        </h3>
      </Link>
      <p className="text-neutral-gray text-sm leading-relaxed mb-6 line-clamp-2">
        {t(`articles.${article.id}.description`)}
      </p>
      <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
        <span className="text-neutral-gray text-[10px] font-medium uppercase tracking-widest">
          {t(`articles.${article.id}.date`)}
        </span>
        <Link
          to={`/blog/article/${article.id}`}
          className="text-primary text-[10px] font-bold uppercase tracking-widest hover:translate-x-1 transition-transform"
        >
          {t('articleCard.readArticle')}
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
