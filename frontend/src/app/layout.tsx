import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import { ViewTransitions } from 'next-view-transitions'
import { Navbar } from '@/components/movifier/layout/navbar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movifier',
  description: 'Stie for movie lovers'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={inter.className}>
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
