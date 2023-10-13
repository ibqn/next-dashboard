import { teamColumns } from '@/components/columns'
import { DataTable } from '@/components/data-table'
import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { teamData } from '@/data/team-data'

export default function Invoices() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <Heading title="Invoices" description="List of invoice balances" />

      <Separator />

      <DataTable searchKey="name" columns={teamColumns} data={teamData} />
    </main>
  )
}
