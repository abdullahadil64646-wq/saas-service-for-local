import axios from 'axios'

export interface InstagramUserProfile {
  id: string
  username: string
  account_type: string
  media_count: number
}

export interface InstagramMediaItem {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
}

export class InstagramAPI {
  private accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  async getUserProfile(): Promise<InstagramUserProfile> {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${this.accessToken}`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching user profile:', error)
      throw new Error('Failed to fetch Instagram profile')
    }
  }

  async getUserMedia(limit: number = 25): Promise<InstagramMediaItem[]> {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&limit=${limit}&access_token=${this.accessToken}`
      )
      return response.data.data
    } catch (error) {
      console.error('Error fetching user media:', error)
      throw new Error('Failed to fetch Instagram media')
    }
  }

  async getMediaInsights(mediaId: string): Promise<any> {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/${mediaId}/insights?metric=engagement,impressions,reach,saved&access_token=${this.accessToken}`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching media insights:', error)
      throw new Error('Failed to fetch media insights')
    }
  }

  static async exchangeCodeForToken(code: string): Promise<string> {
    try {
      const response = await axios.post('https://api.instagram.com/oauth/access_token', {
        client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI,
        code
      })
      return response.data.access_token
    } catch (error) {
      console.error('Error exchanging code for token:', error)
      throw new Error('Failed to exchange authorization code for access token')
    }
  }

  static async refreshAccessToken(refreshToken: string): Promise<string> {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&refresh_token=${refreshToken}`
      )
      return response.data.access_token
    } catch (error) {
      console.error('Error refreshing access token:', error)
      throw new Error('Failed to refresh access token')
    }
  }
}

export const formatInstagramDate = (timestamp: string): string => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const calculateEngagementRate = (
  likes: number,
  comments: number,
  followers: number
): number => {
  if (followers === 0) return 0
  return ((likes + comments) / followers) * 100
}