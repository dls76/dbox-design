import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito', display: 'swap' })

export const metadata: Metadata = {
  title: 'DBox | Gestão Escolar',
  description: 'Painel interno de gestão da comunidade escolar DBox.',
  generator: 'DBox',
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, maximumScale: 1, colorScheme: 'light', themeColor: '#1769c2', userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${nunito.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
