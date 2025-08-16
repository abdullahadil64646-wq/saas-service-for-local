"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Layout, 
  Type, 
  Image as ImageIcon, 
  MousePointer,
  Save,
  Eye,
  Settings,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

const componentTypes = [
  { id: "header", name: "Header", icon: Layout, color: "bg-blue-500" },
  { id: "hero", name: "Hero Section", icon: Globe, color: "bg-purple-500" },
  { id: "text", name: "Text Block", icon: Type, color: "bg-green-500" },
  { id: "image", name: "Image", icon: ImageIcon, color: "bg-orange-500" },
  { id: "button", name: "Button", icon: MousePointer, color: "bg-red-500" },
];

export default function WebsiteBuilderPage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null);
  const [components, setComponents] = useState<Array<{id: string, type: string, x: number, y: number}>>([]);

  const handleDragStart = (componentType: string) => {
    setDraggedComponent(componentType);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedComponent) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newComponent = {
        id: `${draggedComponent}-${Date.now()}`,
        type: draggedComponent,
        x,
        y,
      };
      
      setComponents([...components, newComponent]);
      setDraggedComponent(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const renderComponent = (component: {id: string, type: string, x: number, y: number}) => {
    const getComponentContent = () => {
      switch (component.type) {
        case "header":
          return (
            <div className="bg-blue-600 text-white p-4 rounded">
              <h1 className="text-lg font-bold">Website Header</h1>
            </div>
          );
        case "hero":
          return (
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded">
              <h1 className="text-2xl font-bold mb-2">Hero Section</h1>
              <p>Your compelling headline goes here</p>
            </div>
          );
        case "text":
          return (
            <div className="bg-gray-100 p-4 rounded border">
              <p className="text-gray-800">This is a text block. Click to edit content.</p>
            </div>
          );
        case "image":
          return (
            <div className="bg-gray-200 p-4 rounded border flex items-center justify-center h-32">
              <ImageIcon className="h-8 w-8 text-gray-500" />
              <span className="ml-2 text-gray-500">Image Placeholder</span>
            </div>
          );
        case "button":
          return (
            <Button className="bg-red-500 hover:bg-red-600">Click Me</Button>
          );
        default:
          return <div>Unknown Component</div>;
      }
    };

    return (
      <div
        key={component.id}
        className={`absolute cursor-move ${selectedComponent === component.id ? 'ring-2 ring-blue-500' : ''}`}
        style={{ left: component.x, top: component.y }}
        onClick={() => setSelectedComponent(component.id)}
      >
        {getComponentContent()}
      </div>
    );
  };

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
                <Globe className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Website Builder
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Component Palette */}
        <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Components</h3>
          <div className="space-y-3">
            {componentTypes.map((component) => {
              const IconComponent = component.icon;
              return (
                <div
                  key={component.id}
                  draggable
                  onDragStart={() => handleDragStart(component.id)}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-grab hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className={`p-2 rounded ${component.color} text-white`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {component.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Template Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Templates</h3>
            <div className="space-y-2">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Business Landing</CardTitle>
                  <CardDescription className="text-xs">Professional business template</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">E-commerce Store</CardTitle>
                  <CardDescription className="text-xs">Online store template</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Portfolio</CardTitle>
                  <CardDescription className="text-xs">Creative portfolio template</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 flex flex-col">
          {/* Canvas Toolbar */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">Canvas: 1200px × 800px</span>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">50%</button>
                  <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">100%</button>
                  <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">Fit</button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Desktop</Button>
                <Button variant="ghost" size="sm">Tablet</Button>
                <Button variant="ghost" size="sm">Mobile</Button>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-8 overflow-auto">
            <div
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-auto"
              style={{ width: "1200px", minHeight: "800px" }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {components.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <div className="text-center">
                    <Globe className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Drag components here to start building</p>
                    <p className="text-sm">Choose from the component palette on the left</p>
                  </div>
                </div>
              )}
              
              {components.map(renderComponent)}
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Properties</h3>
          
          {selectedComponent ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Component ID
                </label>
                <input
                  type="text"
                  value={selectedComponent}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Background Color
                </label>
                <input
                  type="color"
                  className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Text Color
                </label>
                <input
                  type="color"
                  className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Padding
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  className="w-full"
                />
              </div>
              
              <Button variant="destructive" size="sm" className="w-full">
                Delete Component
              </Button>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
              <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Select a component to edit its properties</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}