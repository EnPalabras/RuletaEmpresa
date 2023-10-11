import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const myFont = localFont({
  src: './font/gothamRounded.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ruleta En Palabras',
  description: 'Ruleta En Palabras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
