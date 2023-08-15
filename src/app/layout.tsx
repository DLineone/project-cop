import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Copy of Pinterest',
  description: 'A-YA-YA A-YA-YA',
}

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{position: "relative"}}>
        {children}
        {modal}
      </body>
    </html>
  )
}
