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
}

export type Category = CategoryKey;
