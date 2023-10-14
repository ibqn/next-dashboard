import { Topbar } from '@/components/topbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next Dashboard',
  description: 'Dashboards with Charts, Data and Forms',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-background')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-row">
            <Sidebar />
            <main className="flex flex-1 flex-col">
              <Topbar />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
