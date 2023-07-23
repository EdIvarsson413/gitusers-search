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
    <html lang="en" className=''>
      <body className={`${inter.className} dark:bg-gray-900 bg-white`}>
        <div className='container mx-auto grid min-h-screen p-3 place-content-center md:w-10/12 md:p-0'>
          <Navbar/>
          { children }
        </div>
      </body>
    </html>
  )
}
