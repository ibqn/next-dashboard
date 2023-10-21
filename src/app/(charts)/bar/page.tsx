import { BarChart } from '@/components/charts'
import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { barChartData } from '@/data'

export default function BarChartPage() {
  return (
    <main className="flex min-h-[80vh] flex-col p-5">
      <Heading title="Bar Chart" description="Food consumption" />

      <Separator />

      <BarChart data={barChartData} />
    </main>
  )
}
