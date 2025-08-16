# SaaS Studio - Complete Platform

A comprehensive SaaS platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌐 **Website Builder**: Drag-and-drop interface with professional templates
- 📱 **Social Media Management**: Instagram integration with post scheduling
- 🔖 **Hashtag Research**: AI-powered hashtag suggestions and analytics
- 📊 **Analytics Dashboard**: Comprehensive insights and reporting
- 🔐 **Authentication**: Firebase Auth with Google OAuth
- 🎨 **Modern UI**: Shadcn/ui components with dark/light mode

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Radix UI
- **Backend**: Firebase (Auth + Firestore)
- **Social**: Instagram Basic Display API
- **Styling**: Tailwind CSS with custom design system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

- Firebase configuration
- Instagram API credentials
- OpenAI API key (for hashtag suggestions)

## Pages

- `/` - Landing page
- `/auth/login` - User authentication
- `/auth/register` - User registration
- `/dashboard` - Main dashboard with analytics
- `/builder` - Website builder interface
- `/social` - Social media management

## API Routes

- `/api/auth/*` - Authentication endpoints
- `/api/instagram/*` - Instagram integration
- `/api/hashtags/*` - Hashtag research

## Project Structure

```
├── pages/           # Next.js pages and API routes
├── components/      # Reusable UI components
├── lib/            # Utility functions and integrations
├── types/          # TypeScript type definitions
├── styles/         # Global styles and Tailwind config
└── public/         # Static assets
```
