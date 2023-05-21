import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} bg-gradient-to-bl from-slate-700 to-slate-900 min-w-[100vh] min-h-screen`} >
        <div className='text-white m-0 p-0'>
          {children}
        </div>
      </body>
    </html>
  )
}
