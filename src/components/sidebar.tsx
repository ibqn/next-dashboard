'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import avatarImage from '@/assets/avatar.jpeg'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { useCallback, useState } from 'react'
import { cn } from '@/utils'

type Props = {}

export const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(true)

  const toggle = useCallback(() => setOpen(!open), [open])

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col gap-8 bg-sidebar px-4 py-4 transition-all duration-300',
        open ? 'min-w-[200px]' : 'items-center'
      )}
    >
      <div className="flex flex-row items-center justify-between">
        {open && <h3 className="px-3 uppercase">admins</h3>}

        <Button variant="ghost" size="icon" onClick={toggle}>
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {open && (
        <div className="mb-6 flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24 border border-primary">
            <Image height={100} width={100} src={avatarImage} alt="Avatar" />
          </Avatar>

          <h2 className="text-2xl font-bold">Evgeny</h2>

          <h5 className="text-xs">VP Fancy Admin</h5>
        </div>
      )}

      <Navbar collapsed={!open} />
    </div>
  )
}
