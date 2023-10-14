'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
  ArrowUpDown,
  ShieldCheck,
  ShieldEllipsis,
  UnlockKeyhole,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TeamAccess, type TeamColumn } from '@/types'

export const teamColumns: ColumnDef<TeamColumn>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'age',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Age
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue('age')}</div>,
  },
  {
    accessorKey: 'access',
    header: () => <div className="text-center">Access Level</div>,
    cell: ({ row }) => {
      const access = row.original.access

      return (
        <div className="mx-auto flex w-3/5 items-center justify-center gap-2 rounded-md bg-cyan-200 p-2 dark:bg-cyan-600">
          {access === TeamAccess.admin && <ShieldCheck className="h-4 w-4" />}
          {access === TeamAccess.user && <UnlockKeyhole className="h-4 w-4" />}
          {access === TeamAccess.manager && (
            <ShieldEllipsis className="h-4 w-4" />
          )}
          <span className="capitalize">{row.getValue('access')}</span>
        </div>
      )
    },
  },
]
