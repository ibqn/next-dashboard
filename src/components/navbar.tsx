'use client'

import { cn } from '@/utils'
import {
  BarChart,
  Calendar,
  Contact,
  HelpCircle,
  Home,
  LineChart,
  type LucideIcon,
  PieChart,
  Receipt,
  User,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from './ui/button'

type Props = {
  collapsed: boolean
}

type NavigationLink = {
  icon: LucideIcon
  name: string
  link: string
}

type NavigationList = {
  category?: string
  links: NavigationLink[]
}

const navigationList: NavigationList[] = [
  {
    links: [{ icon: Home, name: 'Dashboard', link: '/' }],
  },
  {
    category: 'Data',
    links: [
      {
        icon: Users,
        name: 'Manage Team',
        link: '/team',
      },
      {
        icon: Contact,
        name: 'Contacts Information',
        link: '/contacts',
      },
      {
        icon: Receipt,
        name: 'Invoices Balances',
        link: '/invoices',
      },
    ],
  },
  {
    category: 'Pages',
    links: [
      {
        icon: User,
        name: 'Profile Form',
        link: '/form',
      },
      {
        icon: Calendar,
        name: 'Calendar',
        link: '/calendar',
      },
      {
        icon: HelpCircle,
        name: 'FAQ',
        link: '/faq',
      },
    ],
  },
  {
    category: 'Charts',
    links: [
      {
        icon: BarChart,
        name: 'Bar Chart',
        link: '/bar',
      },
      {
        icon: PieChart,
        name: 'Pie Chart',
        link: '/pie',
      },
      {
        icon: LineChart,
        name: 'Line Chart',
        link: '/line',
      },
    ],
  },
]

export const Navbar = (props: Props) => {
  const { collapsed } = props

  const pathname = usePathname()

  return (
    <nav>
      {navigationList.map((navigation, index) => {
        const { category, links } = navigation

        return (
          <div key={index}>
            {category && (
              <h5
                className={cn(
                  'my-4 text-sm font-light text-gray-900 dark:text-grau-300',
                  collapsed && 'text-center'
                )}
              >
                {category}
              </h5>
            )}
            <ul
              className={cn(
                'flex flex-col',
                collapsed ? 'items-center' : 'gap-3 px-2'
              )}
            >
              {links.map((navigationLink) => {
                const { link, name, icon: Icon } = navigationLink

                return (
                  <li key={link}>
                    <Link
                      href={link}
                      className={cn(
                        collapsed && buttonVariants({ variant: 'ghost' }),
                        'leading flex flex-row items-center text-xs'
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-4 w-4',
                          !collapsed && 'mr-2',
                          link === pathname &&
                            'text-cyan-500 dark:text-pink-400'
                        )}
                      />
                      {!collapsed && (
                        <span
                          className={cn(
                            link === pathname &&
                              'text-cyan-500 dark:text-pink-400'
                          )}
                        >
                          {name}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </nav>
  )
}
