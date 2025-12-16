export interface AiStrategyResponse {
  keywords: string[];
  emailHook: string;
  seoFocus: string;
}

export enum ServiceType {
  SEO = 'SEO',
  EMAIL = 'EMAIL',
  ALL = 'ALL'
}

export interface LeadFormData {
  fullName: string;
  email: string;
  companyName: string;
  role: string;
  marketingBudget: string;
  primaryGoal: string;
  challenges: string;
}