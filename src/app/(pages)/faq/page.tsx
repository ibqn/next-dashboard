import { Faq } from '@/components/faq'
import { Heading } from '@/components/heading'
import { Separator } from '@/components/ui/separator'
import { faqData } from '@/data'

export default function FaqPage() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <Heading title="FAQ" description="Frequently asked questions page" />

      <Separator />

      <Faq faqData={faqData} />
    </main>
  )
}
