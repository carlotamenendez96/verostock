import { Article, CategoryKey } from '../types';
import { ARTICLES } from './mockArticles';

const CATEGORY_KEYS: CategoryKey[] = [
  'allInsights',
  'controlOperative',
  'invisibleLosses',
  'managementWithoutBeing',
  'realOperative',
];

export function getArticles(): Article[] {
  return ARTICLES;
}

export function getArticleById(id: string): Article | undefined {
  return ARTICLES.find((a) => a.id === id);
}

export function getCategories(): CategoryKey[] {
  return [...CATEGORY_KEYS];
}
