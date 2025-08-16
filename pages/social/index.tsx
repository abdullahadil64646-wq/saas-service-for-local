import { useState } from 'react'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Layout } from '@/components/layout'
import { 
  Instagram, 
  Plus, 
  Calendar, 
  Image as ImageIcon, 
  Hash,
  BarChart3,
  Heart,
  MessageCircle,
  Share,
  Users,
  TrendingUp,
  Clock,
  Send
} from 'lucide-react'

export default function Social() {
  const [activeTab, setActiveTab] = useState('posts')
  const [newPost, setNewPost] = useState({
    caption: '',
    hashtags: '',
    scheduledFor: ''
  })

  const posts = [
    {
      id: 1,
      image: '/api/placeholder/300/300',
      caption: 'Beautiful sunset at the beach 🌅',
      hashtags: ['#sunset', '#beach', '#nature'],
      scheduledFor: '2024-01-15T18:00',
      status: 'scheduled',
      likes: 0,
      comments: 0
    },
    {
      id: 2,
      image: '/api/placeholder/300/300',
      caption: 'Coffee and productivity ☕',
      hashtags: ['#coffee', '#productivity', '#work'],
      scheduledFor: null,
      status: 'published',
      likes: 124,
      comments: 8
    }
  ]

  const trendingHashtags = [
    { tag: '#socialmedia', posts: '2.4M', difficulty: 'high' },
    { tag: '#digitalmarketing', posts: '1.8M', difficulty: 'high' },
    { tag: '#contentcreator', posts: '856K', difficulty: 'medium' },
    { tag: '#smallbusiness', posts: '654K', difficulty: 'medium' },
    { tag: '#entrepreneur', posts: '432K', difficulty: 'low' }
  ]

  return (
    <Layout>
      <Head>
        <title>Social Media Management - SaaS Studio</title>
        <meta name="description" content="Manage your Instagram account and schedule posts" />
      </Head>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Social Media</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your Instagram account and schedule content
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Post
              </Button>
            </div>
          </div>

          {/* Instagram Account Connection */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Instagram className="h-8 w-8 text-pink-600" />
                  <div>
                    <CardTitle>Instagram Account</CardTitle>
                    <CardDescription>Connect your Instagram account to start posting</CardDescription>
                  </div>
                </div>
                <Button variant="outline">
                  Connect Instagram
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'posts', name: 'Posts', icon: ImageIcon },
                { id: 'schedule', name: 'Schedule', icon: Calendar },
                { id: 'hashtags', name: 'Hashtags', icon: Hash },
                { id: 'analytics', name: 'Analytics', icon: BarChart3 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Post Creation */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Post</CardTitle>
                    <CardDescription>Design and schedule your Instagram content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Upload Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-sm text-gray-600">
                          Click to upload or drag and drop
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Caption</label>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-md resize-none"
                        rows={4}
                        placeholder="Write your caption..."
                        value={newPost.caption}
                        onChange={(e) => setNewPost(prev => ({ ...prev, caption: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Hashtags</label>
                      <Input
                        placeholder="#hashtag1 #hashtag2 #hashtag3"
                        value={newPost.hashtags}
                        onChange={(e) => setNewPost(prev => ({ ...prev, hashtags: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Schedule</label>
                      <Input
                        type="datetime-local"
                        value={newPost.scheduledFor}
                        onChange={(e) => setNewPost(prev => ({ ...prev, scheduledFor: e.target.value }))}
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Clock className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Send className="h-4 w-4 mr-2" />
                        Post Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Posts Grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center">
                          <span className="text-gray-400">Post Image</span>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-600 mb-2">{post.caption}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.hashtags.map((hashtag, index) => (
                              <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {hashtag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Heart className="h-4 w-4 text-gray-400 mr-1" />
                                {post.likes}
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="h-4 w-4 text-gray-400 mr-1" />
                                {post.comments}
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs ${
                              post.status === 'published' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {post.status}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hashtags' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hashtag Research */}
              <Card>
                <CardHeader>
                  <CardTitle>Hashtag Research</CardTitle>
                  <CardDescription>Find trending hashtags for your niche</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Enter keywords or describe your content..." />
                    <Button className="w-full">
                      <Hash className="h-4 w-4 mr-2" />
                      Generate Hashtags
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Hashtags */}
              <Card>
                <CardHeader>
                  <CardTitle>Trending Hashtags</CardTitle>
                  <CardDescription>Popular hashtags in your category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trendingHashtags.map((hashtag, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-blue-600">{hashtag.tag}</span>
                          <p className="text-sm text-gray-500">{hashtag.posts} posts</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            hashtag.difficulty === 'low' ? 'bg-green-100 text-green-800' :
                            hashtag.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {hashtag.difficulty}
                          </span>
                          <Button size="sm" variant="outline">Add</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                  <ImageIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.4%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Followers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,847</div>
                  <p className="text-xs text-muted-foreground">+124 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Likes</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">+23 from last month</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}