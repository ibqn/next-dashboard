import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import avatarImage from '@/assets/avatar.jpeg'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'

type Props = {}

export const Sidebar = (props: Props) => {
  return (
    <div className="bg-sidebar flex min-h-screen min-w-[200px] flex-col gap-8 px-4 py-4">
      <div className="flex flex-row items-center justify-between">
        <h3 className="px-3 uppercase">admins</h3>

        <Button variant="ghost" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Avatar className="h-24 w-24 border border-primary">
          <Image height={100} width={100} src={avatarImage} alt="Avatar" />
        </Avatar>

        <h2 className="text-2xl font-bold">Evgeny</h2>

        <h5 className="text-xs">VP Fancy Admin</h5>
      </div>

      <Navbar />
    </div>
  )
}
