import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Bell, Search, Settings, User } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

type Props = {}

export const Topbar = (props: Props) => {
  return (
    <header className="flex justify-between p-4">
      <div className="relative flex">
        <Button size="icon" variant="ghost" className="absolute right-0">
          <Search className="h-4 w-4" />
        </Button>
        <Input placeholder="Search..." className="pr-12" />
      </div>

      <div className="flex gap-2">
        <ThemeToggle />

        <Button size="icon" variant="ghost">
          <Bell className="h-4 w-4" />
        </Button>

        <Button size="icon" variant="ghost">
          <Settings className="h-4 w-4" />
        </Button>

        <Button size="icon" variant="ghost">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
