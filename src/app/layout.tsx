import type { Metadata } from 'next'
import '../styles/globals.css'
import { SEO_CONFIG, JSON_LD } from '../lib/seo-config'

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords.join(', '),
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.url,
    siteName: 'QYPrints',
    images: [{ url: SEO_CONFIG.ogImage }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.ogImage],
  },
  alternates: {
    canonical: SEO_CONFIG.url,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
