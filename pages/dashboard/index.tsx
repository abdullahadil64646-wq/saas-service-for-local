import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Layout } from '@/components/layout'
import { 
  Globe, 
  Instagram, 
  Hash, 
  BarChart3, 
  Plus,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MessageCircle
} from 'lucide-react'

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard - SaaS Studio</title>
        <meta name="description" content="Your SaaS Studio dashboard with analytics and tools" />
      </Head>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Welcome back! Here&apos;s what&apos;s happening with your projects.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/builder">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Website
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Websites</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Instagram Posts</CardTitle>
                <Instagram className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">143</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hashtag Research</CardTitle>
                <Hash className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,547</div>
                <p className="text-xs text-muted-foreground">
                  +573 from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89.2%</div>
                <p className="text-xs text-muted-foreground">
                  +4.1% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Websites */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Websites</CardTitle>
                <CardDescription>
                  Your most recently updated websites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'E-commerce Store', status: 'Published', views: '1,234' },
                    { name: 'Portfolio Site', status: 'Draft', views: '0' },
                    { name: 'Business Landing', status: 'Published', views: '892' },
                  ].map((website, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <div>
                          <p className="font-medium">{website.name}</p>
                          <p className="text-sm text-gray-500">{website.status}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-1" />
                        {website.views}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/builder">
                    <Button variant="outline" className="w-full">
                      View All Websites
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Social Media Performance</CardTitle>
                <CardDescription>
                  Your Instagram account performance this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-pink-100 rounded-lg">
                        <Heart className="h-4 w-4 text-pink-600" />
                      </div>
                      <div>
                        <p className="font-medium">Likes</p>
                        <p className="text-sm text-gray-500">Total interactions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">4,523</p>
                      <p className="text-sm text-green-600">+12%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <MessageCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Comments</p>
                        <p className="text-sm text-gray-500">Engagement</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">892</p>
                      <p className="text-sm text-green-600">+8%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Followers</p>
                        <p className="text-sm text-gray-500">Account growth</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">12,847</p>
                      <p className="text-sm text-green-600">+24</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/social">
                    <Button variant="outline" className="w-full">
                      View Social Analytics
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/builder">
                <Card className="card-hover cursor-pointer">
                  <CardHeader>
                    <Globe className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">Create Website</CardTitle>
                    <CardDescription>
                      Start building a new website with our drag-and-drop builder
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/social">
                <Card className="card-hover cursor-pointer">
                  <CardHeader>
                    <Instagram className="h-8 w-8 text-pink-600 mb-2" />
                    <CardTitle className="text-lg">Schedule Post</CardTitle>
                    <CardDescription>
                      Create and schedule your next Instagram post
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Card className="card-hover cursor-pointer">
                <CardHeader>
                  <Hash className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Research Hashtags</CardTitle>
                  <CardDescription>
                    Find trending hashtags for your next campaign
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}