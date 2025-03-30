import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
    TypeDetailsChapter, 
    TypeDetailsChapterLesson, 
    TypeDetailsSyllabus 
} from "./type-details";
import { BookIcon } from "lucide-react";


export const Syllabus = (props: TypeDetailsSyllabus) => {

    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {props?.chapters?.map((chapter: TypeDetailsChapter) => (
                <AccordionItem 
                    key={chapter.id} 
                    value={`${chapter.id}`}
                    className="border rounded-lg px-4"
                >
                    <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                                <BookIcon />
                            </div>
                            <span className="font-medium text-lg">{chapter.name}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                        <Accordion type="single" collapsible className="w-full">
                            {chapter?.lessons?.map((item: TypeDetailsChapterLesson) => (
                                <AccordionItem 
                                    key={item.id} 
                                    value={`${item.id}`}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="hover:no-underline py-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-600">📄</span>
                                            <div className="text-left">
                                                <h3 className="font-medium">{item.title}</h3>
                                                <p className="text-sm text-gray-500">
                                                    {item.duration} • {item.status}
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-12">
                                        Content for {item.title}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};