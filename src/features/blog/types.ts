export type CategoryKey =
  | 'allInsights'
  | 'controlOperative'
  | 'invisibleLosses'
  | 'managementWithoutBeing'
  | 'realOperative';

export interface Article {
  id: string;
  categoryKey: CategoryKey;
  imageUrl: string;
  featured?: boolean;
  /** ISO date (YYYY-MM-DD) for semantic <time datetime> and SEO */
  publishedDate: string;
}

export type Category = CategoryKey;
