import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const siteUrl = 'https://violase.dev'
const siteName = 'Viola Septianti Elsiana — Full Stack Developer & Software Quality Engineer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s — ${siteName}`,
  },
  description:
    'Portfolio of Viola Septianti Elsiana, an Informatics Engineering student and Full Stack Developer & Software Quality Engineer with experience in Backend Development, QA, and Front-End Development.',
  generator: 'Next.js',
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Full Stack Developer',
    'Software Quality Engineer',
    'Front-End Development',
    'React',
    'Next.js',
    'TypeScript',
    'Laravel',
    'Flutter',
    'Viola Septianti Elsiana',
    'Portfolio',
  ],
  authors: [{ name: 'Viola Septianti Elsiana', url: siteUrl }],
  creator: 'Viola Septianti Elsiana',
  publisher: 'Viola Septianti Elsiana',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
  openGraph: {
    title: siteName,
    description:
      'Full Stack Developer & Software Quality Engineer — building scalable web apps with Next.js, React, TypeScript, Laravel, Flutter, and Tailwind CSS.',
    url: siteUrl,
    siteName,
    images: [
      {
        url: '/apple-icon.png',
        width: 180,
        height: 180,
        alt: 'Viola Septianti Elsiana',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteName,
    description:
      'Full Stack Developer & Software Quality Engineer — building scalable web apps with Next.js, React, TypeScript, Laravel, Flutter, and Tailwind CSS.',
    images: ['/apple-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
