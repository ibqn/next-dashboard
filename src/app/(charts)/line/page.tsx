import { LineChart } from '@/components/charts'
import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { lineChartData } from '@/data'

export default function LineChartPage() {
  return (
    <main className="flex min-h-[80vh] flex-col p-5">
      <Heading title="Line Chart" description="Line chart with countries" />

      <Separator />

      <LineChart data={lineChartData} />
    </main>
  )
}
