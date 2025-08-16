import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'

interface LayoutProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export const Layout = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}