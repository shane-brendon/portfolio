import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '../src/component/header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
