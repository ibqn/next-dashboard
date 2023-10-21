import { PieChart } from '@/components/charts'
import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { pieChartData } from '@/data'

export default function PieChartPage() {
  return (
    <main className="flex min-h-[80vh] flex-col p-5">
      <Heading title="Bar Chart" description="Food consumption" />

      <Separator />

      <PieChart data={pieChartData} />
    </main>
  )
}
