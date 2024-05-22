import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import { ViewTransitions } from 'next-view-transitions'

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
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
