import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import { ViewTransitions } from 'next-view-transitions'
import { Navbar } from '@/components/movifier/layout/navbar'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movifier',
  description: 'Site for movie lovers'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={cn(inter.className, 'h-screen')}>
          <Providers>
            <Navbar />
          </Providers>

          <Providers>{children}</Providers>

          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  )
}
