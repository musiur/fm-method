import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TypeDetailsFAQ } from "./type-details"

export const Faq = (props: TypeDetailsFAQ[]) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            {props?.map((faq: TypeDetailsFAQ, index: number) => (
                <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}