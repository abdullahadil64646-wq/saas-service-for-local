import { useState } from 'react'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Layout } from '@/components/layout'
import { 
  Plus, 
  Save, 
  Eye, 
  Smartphone, 
  Monitor, 
  Tablet,
  Palette,
  Type,
  Image,
  Layout as LayoutIcon,
  Square,
  Circle
} from 'lucide-react'

export default function Builder() {
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  const templates = [
    {
      id: 'business',
      name: 'Business Landing',
      description: 'Perfect for service businesses and agencies',
      preview: '/api/placeholder/400/300'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Store',
      description: 'Showcase and sell your products online',
      preview: '/api/placeholder/400/300'
    },
    {
      id: 'portfolio',
      name: 'Creative Portfolio',
      description: 'Display your work and creative projects',
      preview: '/api/placeholder/400/300'
    },
    {
      id: 'blog',
      name: 'Blog & Content',
      description: 'Share your thoughts and expertise',
      preview: '/api/placeholder/400/300'
    }
  ]

  const components = [
    { type: 'header', name: 'Header', icon: LayoutIcon },
    { type: 'hero', name: 'Hero Section', icon: Square },
    { type: 'text', name: 'Text Block', icon: Type },
    { type: 'image', name: 'Image', icon: Image },
    { type: 'button', name: 'Button', icon: Circle },
  ]

  return (
    <Layout>
      <Head>
        <title>Website Builder - SaaS Studio</title>
        <meta name="description" content="Build beautiful websites with our drag-and-drop builder" />
      </Head>

      <div className="h-screen flex flex-col">
        {/* Builder Header */}
        <div className="border-b bg-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Website Builder</h1>
            <Input 
              placeholder="Untitled Website" 
              className="w-48"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Device Preview Toggle */}
            <div className="flex border rounded-lg p-1">
              <Button
                variant={previewMode === 'desktop' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPreviewMode('desktop')}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                variant={previewMode === 'tablet' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPreviewMode('tablet')}
              >
                <Tablet className="h-4 w-4" />
              </Button>
              <Button
                variant={previewMode === 'mobile' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPreviewMode('mobile')}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Component Sidebar */}
          <div className="w-64 bg-gray-50 border-r p-4">
            <div className="mb-6">
              <h3 className="font-medium mb-3">Components</h3>
              <div className="space-y-2">
                {components.map((component) => (
                  <div
                    key={component.type}
                    className="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:shadow-sm transition-all"
                    draggable
                  >
                    <component.icon className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-sm font-medium">{component.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Styling</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Palette className="h-4 w-4 mr-2" />
                  Colors
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Type className="h-4 w-4 mr-2" />
                  Typography
                </Button>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-gray-100 p-8">
            <div className="h-full flex items-center justify-center">
              {!selectedTemplate ? (
                <div className="text-center max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Choose a Template to Get Started
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Select from our professionally designed templates or start from scratch
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {templates.map((template) => (
                      <Card 
                        key={template.id}
                        className="cursor-pointer hover:shadow-lg transition-all"
                        onClick={() => setSelectedTemplate(template.id)}
                      >
                        <CardHeader>
                          <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                            <span className="text-gray-400">Template Preview</span>
                          </div>
                          <CardTitle className="text-lg">{template.name}</CardTitle>
                          <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full">
                            Use This Template
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button variant="outline" size="lg">
                      <Plus className="h-5 w-5 mr-2" />
                      Start from Blank
                    </Button>
                  </div>
                </div>
              ) : (
                <div 
                  className={`bg-white shadow-lg transition-all duration-300 ${
                    previewMode === 'desktop' ? 'w-full max-w-6xl' :
                    previewMode === 'tablet' ? 'w-96' : 'w-80'
                  }`}
                  style={{ height: '600px' }}
                >
                  {/* Canvas Content */}
                  <div className="h-full p-8 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4">
                        <LayoutIcon className="h-12 w-12 text-gray-400 mx-auto" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Your Website Canvas
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Drag components from the sidebar to start building
                      </p>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Component
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Properties Panel */}
          {selectedTemplate && (
            <div className="w-64 bg-gray-50 border-l p-4">
              <h3 className="font-medium mb-4">Properties</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Text Color</label>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-black rounded border cursor-pointer"></div>
                    <div className="w-8 h-8 bg-blue-600 rounded border cursor-pointer"></div>
                    <div className="w-8 h-8 bg-green-600 rounded border cursor-pointer"></div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Font Size</label>
                  <Input type="number" placeholder="16" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Margin</label>
                  <Input type="number" placeholder="8" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}