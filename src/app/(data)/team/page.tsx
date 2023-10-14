import { teamColumns } from '@/components/columns'
import { DataTable } from '@/components/data-table'
import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { teamData } from '@/data'

export default function Team() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <Heading title="Team" description="Managing your team members" />

      <Separator />

      <DataTable searchKey="name" columns={teamColumns} data={teamData} />
    </main>
  )
}
