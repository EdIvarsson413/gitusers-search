import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevFinder',
  description: 'Busca usuarios de GitHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <div className='container mx-auto grid min-h-screen place-content-center md:w-10/12 p-3 md:p-0'>
          <Navbar/>
          { children }
        </div>
      </body>
    </html>
  )
}
