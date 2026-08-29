import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' })

export const metadata: Metadata = {
  title: 'DBox | Gestão Escolar',
  description: 'Painel interno de gestão da comunidade escolar DBox.',
  generator: 'DBox',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1769c2',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${fredoka.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
