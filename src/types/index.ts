export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
  subscription?: Subscription;
}

export interface Subscription {
  id: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'inactive' | 'cancelled';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
}

export interface Website {
  id: string;
  userId: string;
  name: string;
  domain?: string;
  template: string;
  content: WebsiteContent;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WebsiteContent {
  pages: Page[];
  theme: Theme;
  settings: WebsiteSettings;
}

export interface Page {
  id: string;
  name: string;
  path: string;
  components: Component[];
  seoSettings: SEOSettings;
}

export interface Component {
  id: string;
  type: ComponentType;
  props: Record<string, unknown>;
  children?: Component[];
  position: Position;
}

export type ComponentType = 
  | 'header'
  | 'hero'
  | 'text'
  | 'image'
  | 'button'
  | 'form'
  | 'gallery'
  | 'testimonials'
  | 'footer';

export interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: Record<string, string>;
}

export interface WebsiteSettings {
  title: string;
  description: string;
  favicon?: string;
  analytics?: string;
}

export interface SEOSettings {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface SocialMediaAccount {
  id: string;
  userId: string;
  platform: 'instagram' | 'facebook' | 'twitter';
  accountId: string;
  accountName: string;
  accessToken: string;
  connected: boolean;
  createdAt: Date;
}

export interface SocialMediaPost {
  id: string;
  userId: string;
  accountId: string;
  platform: string;
  content: string;
  mediaUrls: string[];
  hashtags: string[];
  scheduledFor?: Date;
  publishedAt?: Date;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  analytics?: PostAnalytics;
}

export interface PostAnalytics {
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  impressions: number;
}

export interface Hashtag {
  tag: string;
  popularity: number;
  relatedTags: string[];
  category?: string;
}

export interface HashtagAnalytics {
  tag: string;
  usage: number;
  engagement: number;
  trend: 'rising' | 'stable' | 'declining';
}