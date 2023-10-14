import { contactsColumns } from '@/components/columns'
import { DataTable } from '@/components/data-table'
import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { contactsData } from '@/data'

export default function Contacts() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <Heading
        title="Contacts"
        description="List of contacts for future reference"
      />

      <Separator />

      <DataTable
        searchKey="name"
        columns={contactsColumns}
        data={contactsData}
      />
    </main>
  )
}
