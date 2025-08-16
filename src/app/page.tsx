import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Globe, Zap, BarChart3, Users, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">SaaS Platform</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Pricing
          </Link>
          <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Login
          </Link>
          <Button asChild>
            <Link href="/auth/register">Get Started</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Build Websites &
          <span className="text-blue-600 block">Automate Social Media</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Create stunning websites with our drag-and-drop builder and automate your social media presence 
          with intelligent hashtag research and scheduled posting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/auth/register">
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/demo">View Demo</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Everything You Need in One Platform
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Website Builder</CardTitle>
              <CardDescription>
                Drag-and-drop interface with professional templates for any business type.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Social Media Automation</CardTitle>
              <CardDescription>
                Schedule posts, connect Instagram accounts, and manage your social presence.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Hashtag Analytics</CardTitle>
              <CardDescription>
                AI-powered hashtag research and trending analysis to maximize engagement.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>
                Work together with your team on websites and social media campaigns.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Star className="h-12 w-12 text-yellow-600 mb-4" />
              <CardTitle>SEO Optimization</CardTitle>
              <CardDescription>
                Built-in SEO tools to help your websites rank higher in search results.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Track website performance and social media engagement in real-time.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using our platform to grow their online presence.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/register">
              Start Your Free Trial
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Globe className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">SaaS Platform</span>
          </div>
          <div className="flex space-x-6 text-gray-600 dark:text-gray-300">
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white">Terms</Link>
            <Link href="/support" className="hover:text-gray-900 dark:hover:text-white">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
