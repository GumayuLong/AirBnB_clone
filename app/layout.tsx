import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import { Roboto_Serif } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

// metaData dùng để tăng SEO của trang web 
export const metadata: Metadata = {
  title: 'AirBnB',
  description: 'AirBnB clone',
}

const font = Nunito({
  subsets: ['latin'],
})

const subFont = Roboto_Serif({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={subFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
