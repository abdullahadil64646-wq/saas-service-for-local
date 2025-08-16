import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    // TODO: Implement Firebase authentication
    // This is a placeholder for Firebase Auth integration
    console.log('Login attempt:', { email })

    // For now, return success for any credentials
    res.status(200).json({ 
      message: 'Login successful',
      user: {
        id: 'user123',
        email,
        name: 'Demo User'
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}