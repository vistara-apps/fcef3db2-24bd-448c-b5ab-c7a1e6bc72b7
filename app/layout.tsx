import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'DAO Lens - Onchain Governance for Communities',
  description: 'Transparent, efficient, and Farcaster-native platform for managing DAOs, making collective decisions, and allocating funds.',
  openGraph: {
    title: 'DAO Lens',
    description: 'Onchain governance for local communities, powered by Farcaster.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
