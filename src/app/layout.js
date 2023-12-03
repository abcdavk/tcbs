import { Inter } from 'next/font/google'
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Cursed Black Site',
  description: 'by abcdave',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script type='text/javascript' src='//pl21636205.toprevenuegate.com/de/4b/06/de4b06433e4200dfcfe3082972bcee87.js'></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
