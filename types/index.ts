export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  plan: 'free' | 'pro' | 'enterprise'
  createdAt: Date
  updatedAt: Date
}

export interface Website {
  id: string
  userId: string
  name: string
  domain?: string
  template: string
  content: WebsiteContent
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export interface WebsiteContent {
  pages: Page[]
  theme: Theme
  settings: SiteSettings
}

export interface Page {
  id: string
  name: string
  path: string
  components: Component[]
  seo: SEOSettings
}

export interface Component {
  id: string
  type: ComponentType
  props: Record<string, any>
  children?: Component[]
  styles?: Record<string, any>
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
  | 'footer'
  | 'container'
  | 'grid'
  | 'spacer'

export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  fonts: {
    heading: string
    body: string
  }
  spacing: {
    small: string
    medium: string
    large: string
  }
}

export interface SEOSettings {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

export interface SiteSettings {
  title: string
  description: string
  logo?: string
  favicon?: string
  analytics?: string
}

export interface InstagramAccount {
  id: string
  userId: string
  instagramId: string
  username: string
  accessToken: string
  refreshToken?: string
  tokenExpiresAt: Date
  isConnected: boolean
  createdAt: Date
  updatedAt: Date
}

export interface InstagramPost {
  id: string
  accountId: string
  instagramPostId?: string
  caption: string
  imageUrl: string
  hashtags: string[]
  scheduledFor?: Date
  publishedAt?: Date
  status: 'draft' | 'scheduled' | 'published' | 'failed'
  engagement?: PostEngagement
  createdAt: Date
  updatedAt: Date
}

export interface PostEngagement {
  likes: number
  comments: number
  shares: number
  reach: number
  impressions: number
  saves: number
}

export interface Hashtag {
  tag: string
  usage: number
  difficulty: 'low' | 'medium' | 'high'
  trending: boolean
  category?: string
}

export interface HashtagAnalysis {
  hashtags: Hashtag[]
  suggestions: string[]
  totalReach: number
  difficulty: number
  score: number
}

export interface DashboardStats {
  websites: {
    total: number
    published: number
    drafts: number
  }
  instagram: {
    posts: number
    engagement: number
    followers: number
    reach: number
  }
  hashtags: {
    researched: number
    trending: number
    saved: number
  }
}