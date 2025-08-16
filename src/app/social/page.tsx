"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Instagram, 
  Calendar,
  Hash,
  Image as ImageIcon,
  Send,
  Clock,
  TrendingUp,
  Heart,
  MessageCircle,
  Share,
  ArrowLeft,
  Plus,
  Search
} from "lucide-react";
import Link from "next/link";

const hashtagSuggestions = [
  { tag: "#socialmedia", popularity: 95, category: "General" },
  { tag: "#marketing", popularity: 88, category: "Business" },
  { tag: "#branding", popularity: 82, category: "Business" },
  { tag: "#digitalmarketing", popularity: 90, category: "Marketing" },
  { tag: "#contentcreator", popularity: 85, category: "Creator" },
  { tag: "#business", popularity: 92, category: "Business" },
];

const scheduledPosts = [
  {
    id: 1,
    content: "Check out our new product launch! 🚀",
    platform: "instagram",
    scheduledTime: "2024-01-15 14:00",
    status: "scheduled",
    hashtags: ["#product", "#launch", "#innovation"]
  },
  {
    id: 2,
    content: "Behind the scenes of our creative process ✨",
    platform: "instagram", 
    scheduledTime: "2024-01-16 10:30",
    status: "scheduled",
    hashtags: ["#behindthescenes", "#creative", "#process"]
  },
];

export default function SocialMediaPage() {
  const [activeTab, setActiveTab] = useState("compose");
  const [postContent, setPostContent] = useState("");
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [searchHashtag, setSearchHashtag] = useState("");

  const handleHashtagToggle = (hashtag: string) => {
    if (selectedHashtags.includes(hashtag)) {
      setSelectedHashtags(selectedHashtags.filter(h => h !== hashtag));
    } else {
      setSelectedHashtags([...selectedHashtags, hashtag]);
    }
  };

  const filteredHashtags = hashtagSuggestions.filter(h => 
    h.tag.toLowerCase().includes(searchHashtag.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
              <div className="flex items-center">
                <Instagram className="h-6 w-6 text-pink-600" />
                <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Social Media Manager
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Connect Account
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab("compose")}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "compose"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Send className="h-4 w-4 mr-2" />
            Compose
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "schedule"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Scheduled Posts
          </button>
          <button
            onClick={() => setActiveTab("hashtags")}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "hashtags"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Hash className="h-4 w-4 mr-2" />
            Hashtag Research
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "analytics"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </button>
        </div>

        {/* Compose Tab */}
        {activeTab === "compose" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Post</CardTitle>
                  <CardDescription>Compose and schedule your social media content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Post Content
                    </label>
                    <textarea
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder="What's happening? Share your thoughts..."
                      className="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">{postContent.length}/2200 characters</span>
                      <Button variant="outline" size="sm">
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Add Media
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Selected Hashtags
                    </label>
                    <div className="flex flex-wrap gap-2 min-h-[3rem] p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800">
                      {selectedHashtags.length > 0 ? (
                        selectedHashtags.map((hashtag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {hashtag}
                            <button
                              onClick={() => handleHashtagToggle(hashtag)}
                              className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
                            >
                              ×
                            </button>
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">No hashtags selected. Browse suggestions on the right.</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Schedule Post
                    </label>
                    <div className="flex space-x-4">
                      <Input type="date" className="flex-1" />
                      <Input type="time" className="flex-1" />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <Send className="h-4 w-4 mr-2" />
                      Post Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Clock className="h-4 w-4 mr-2" />
                      Schedule Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Hashtag Suggestions</CardTitle>
                  <CardDescription>AI-powered hashtag recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search hashtags..."
                        value={searchHashtag}
                        onChange={(e) => setSearchHashtag(e.target.value)}
                        className="pl-10"
                      />
                    </div>

                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {filteredHashtags.map((hashtag, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                            selectedHashtags.includes(hashtag.tag)
                              ? "bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700"
                              : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          onClick={() => handleHashtagToggle(hashtag.tag)}
                        >
                          <div>
                            <span className="font-medium text-sm">{hashtag.tag}</span>
                            <p className="text-xs text-gray-500">{hashtag.category}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{hashtag.popularity}%</div>
                            <div className="w-12 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                              <div
                                className="h-2 bg-blue-500 rounded-full"
                                style={{ width: `${hashtag.popularity}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Scheduled Posts Tab */}
        {activeTab === "schedule" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Scheduled Posts</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="grid gap-6">
              {scheduledPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Instagram className="h-5 w-5 text-pink-600" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Instagram</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            post.status === "scheduled" 
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          }`}>
                            {post.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-900 dark:text-white mb-3">{post.content}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.hashtags.map((hashtag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm"
                            >
                              {hashtag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-2" />
                          Scheduled for {post.scheduledTime}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Delete</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Social Media Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                  <Send className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4K</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Comments</CardTitle>
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Shares</CardTitle>
                  <Share className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Hashtags</CardTitle>
                <CardDescription>Hashtags with highest engagement this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hashtagSuggestions.slice(0, 5).map((hashtag, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-medium">{index + 1}</span>
                        <span className="font-medium">{hashtag.tag}</span>
                        <span className="text-sm text-gray-500">{hashtag.category}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {Math.floor(Math.random() * 1000) + 500} uses
                        </div>
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{ width: `${hashtag.popularity}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}