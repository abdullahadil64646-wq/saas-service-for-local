import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { User, Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              SaaS Studio
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/builder" className="text-gray-600 hover:text-primary transition-colors">
              Website Builder
            </Link>
            <Link href="/social" className="text-gray-600 hover:text-primary transition-colors">
              Social Media
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">
                Get Started
              </Button>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/dashboard" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Dashboard
              </Link>
              <Link href="/builder" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Website Builder
              </Link>
              <Link href="/social" className="block px-3 py-2 text-gray-600 hover:text-primary">
                Social Media
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Link href="/auth/login">
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}