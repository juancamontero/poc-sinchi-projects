import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TopBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projectos SINCHI - Prueba de concepto ',
  description: '(POC) Prueba de concepto para portal de proyectos SINCHO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TopBar/>
      {/* <TopMenu /> */}
        {children}
      </body>
    </html>
  )
}