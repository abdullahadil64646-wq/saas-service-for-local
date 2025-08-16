import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Instagram OAuth redirect URL
    const clientId = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID
    const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI
    
    if (!clientId || !redirectUri) {
      return res.status(500).json({ message: 'Instagram OAuth not configured' })
    }

    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`

    res.redirect(authUrl)
  } catch (error) {
    console.error('Instagram OAuth error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}