import localFontInter from 'next/font/local' // https://fonts.google.com/specimen/Inter
import localFontLexend from 'next/font/local' // https://fonts.google.com/specimen/Lexend
import clsx from 'clsx' // Conditional rendering library for CSS

import { Providers } from './theme-provider' // Dark-light mode
import { Layout } from '@/components/docs/Layout'

import '@/styles/tailwind.css'

// Use local version of the fonts so we can use OpenType features
const inter = localFontInter({
  src: '../../assets/docs/fonts/Inter.woff2',
  display: 'swap',
  variable: '--font-inter',
})

const lexend = localFontLexend({
  src: '../../assets/docs/fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export default function LayoutWrapper({ children }) {
  return (
    <div className={clsx('min-h-full bg-white dark:bg-slate-900', inter.variable, lexend.variable)}>
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </div>
  )
}
