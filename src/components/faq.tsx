'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FaqData } from '@/data'

type Props = {
  faqData: FaqData[]
}

export const Faq = (props: Props) => {
  const { faqData } = props

  return (
    <Accordion type="single" className="mt-8 w-full">
      {faqData.map((faqItem, index) => {
        const { question, answer } = faqItem

        return (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
