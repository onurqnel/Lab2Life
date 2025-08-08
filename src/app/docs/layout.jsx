import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from './providers'
import { Layout } from '@/components/docs/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../../assets/syntax/fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata = {
  title: {
    template: '%s - Docs',
    default: 'CacheAdvance - Never miss the cache again.',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function LayoutWrapper({ children }) {
  return (
    <div
      className={clsx(
        'min-h-full bg-white dark:bg-slate-900',
        inter.variable,
        lexend.variable,
      )}
    >
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </div>
  )
}
