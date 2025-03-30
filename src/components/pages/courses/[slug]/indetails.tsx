import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TypeDetailsFAQ } from "./type-details"

export const Indetails = (props: TypeDetailsFAQ[]) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {props.map((item: TypeDetailsFAQ) => (
        <AccordionItem key={item.id} value={`${item.id}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
          <p className="text-sm text-muted-foreground">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}