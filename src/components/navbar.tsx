import {
  BarChart,
  Calendar,
  Contact,
  HelpCircle,
  Home,
  LineChart,
  LucideIcon,
  PieChart,
  Receipt,
  User,
  Users,
} from 'lucide-react'
import Link from 'next/link'

type Props = {}

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
  return (
    <nav>
      {navigationList.map((navigation, index) => {
        const { category, links } = navigation
        return (
          <div key={index}>
            {category && <h5 className="my-4">{category}</h5>}
            <ul>
              {links.map((navigationLink) => {
                const { link, name, icon: Icon } = navigationLink
                return (
                  <li key={link}>
                    <Link href={link} className="flex flex-row items-center">
                      <Icon className="mr-2 h-4 w-4" />
                      {name}
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
