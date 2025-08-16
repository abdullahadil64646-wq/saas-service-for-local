import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Layout } from '@/components/layout'
import { ArrowRight, Globe, Instagram, Hash, BarChart3, Palette, Zap } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SaaS Studio - Website Builder, Social Media & Hashtag Research</title>
        <meta name="description" content="All-in-one platform for website building, social media management, and hashtag research. Grow your business with our powerful tools." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build, Manage, and Grow Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            The all-in-one SaaS platform for website building, social media management, 
            and hashtag research. Everything you need to succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your workflow with our integrated suite of powerful tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Website Builder</CardTitle>
                <CardDescription>
                  Create stunning websites with our drag-and-drop builder. 
                  Professional templates and custom components included.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Drag & drop interface</li>
                  <li>• Professional templates</li>
                  <li>• Mobile responsive</li>
                  <li>• SEO optimized</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Instagram className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Social Media Management</CardTitle>
                <CardDescription>
                  Connect your Instagram account, schedule posts, and track performance
                  with detailed analytics and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Instagram integration</li>
                  <li>• Post scheduling</li>
                  <li>• Performance analytics</li>
                  <li>• Engagement tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Hash className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Hashtag Research</CardTitle>
                <CardDescription>
                  Discover trending hashtags, analyze competition, and get AI-powered
                  suggestions to maximize your reach.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI-powered suggestions</li>
                  <li>• Trend analysis</li>
                  <li>• Competition insights</li>
                  <li>• Performance scoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Websites Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">2M+</div>
              <div className="text-gray-600">Posts Scheduled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
              <div className="text-gray-600">Hashtags Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using SaaS Studio to grow their online presence.
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}