
export interface PriceTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  isAnchor?: boolean;
  ctaText: string;
}

export type ViewState = 'LANDING' | 'DASHBOARD';

export interface UserState {
  isLoggedIn: boolean;
  name: string | null;
}
