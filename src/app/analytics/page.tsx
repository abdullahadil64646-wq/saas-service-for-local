"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Globe,
  Instagram,
  Eye,
  MousePointer,
  Calendar,
  ArrowLeft,
  Download,
  Filter
} from "lucide-react";
import Link from "next/link";

const websiteData = [
  { name: "My Store", visits: 1234, conversions: 23, revenue: "$1,250" },
  { name: "Portfolio Site", visits: 892, conversions: 12, revenue: "$780" },
  { name: "Blog", visits: 2341, conversions: 45, revenue: "$2,100" },
];

const socialData = [
  { platform: "Instagram", followers: 1250, engagement: "4.2%", posts: 24 },
  { platform: "Facebook", followers: 890, engagement: "2.8%", posts: 18 },
  { platform: "Twitter", followers: 567, engagement: "3.1%", posts: 32 },
];

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("30d");

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
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Analytics Dashboard
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="12m">Last 12 months</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "overview"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab("websites")}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "websites"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4 mr-2" />
            Websites
          </button>
          <button
            onClick={() => setActiveTab("social")}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "social"
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Instagram className="h-4 w-4 mr-2" />
            Social Media
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4,467</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Social Engagement</CardTitle>
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,852</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.3% from last month
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversions</CardTitle>
                  <MousePointer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">80</div>
                  <div className="flex items-center text-xs text-red-600">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -2.1% from last month
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,130</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15.2% from last month
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                  <CardDescription>Daily visitors over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Chart visualization would go here</p>
                      <p className="text-sm">Integration with Chart.js or Recharts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Media Growth</CardTitle>
                  <CardDescription>Follower growth across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Chart visualization would go here</p>
                      <p className="text-sm">Growth trends and projections</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Websites Tab */}
        {activeTab === "websites" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Website Analytics</h2>
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Report
              </Button>
            </div>

            <div className="grid gap-6">
              {websiteData.map((site, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Globe className="h-5 w-5 mr-2" />
                          {site.name}
                        </CardTitle>
                        <CardDescription>Performance metrics for the last 30 days</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{site.visits.toLocaleString()}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Visits</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{site.conversions}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Conversions</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{site.revenue}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Social Media Tab */}
        {activeTab === "social" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Social Media Analytics</h2>
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Report
              </Button>
            </div>

            <div className="grid gap-6">
              {socialData.map((platform, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          {platform.platform === "Instagram" && <Instagram className="h-5 w-5 mr-2 text-pink-600" />}
                          {platform.platform === "Facebook" && <Globe className="h-5 w-5 mr-2 text-blue-600" />}
                          {platform.platform === "Twitter" && <Globe className="h-5 w-5 mr-2 text-blue-400" />}
                          {platform.platform}
                        </CardTitle>
                        <CardDescription>Performance metrics for the last 30 days</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{platform.followers.toLocaleString()}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{platform.engagement}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Engagement Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{platform.posts}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Posts This Month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Top Performing Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>Your most engaging content this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((post) => (
                    <div key={post} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <Instagram className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Post #{post}: Behind the scenes of our creative process</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">2 days ago</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{(Math.random() * 1000 + 500).toFixed(0)}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">likes</p>
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