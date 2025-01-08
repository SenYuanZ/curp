import type { Metadata } from 'next'
import './globals.css'
import { Geist, Geist_Mono, Comforter } from 'next/font/google'

const comforter = Comforter({
  variable: '--font-comforter',
  subsets: ['latin'],
  weight: '400'
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={comforter.variable}
      >
        {children}
      </body>
    </html>
  )
}
