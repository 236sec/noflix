import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} w-screen h-screen bg-white m-0 p-0`} >
        <div className='bg-gradient-to-bl from-slate-700 to-slate-900 text-white'>
          {children}
        </div>
      </body>
    </html>
  )
}
