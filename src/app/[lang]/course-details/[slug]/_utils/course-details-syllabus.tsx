import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SyllabusItem {
    id: string;
    title: string;
    duration: string;
    credit: string;
}

interface Module {
    id: string;
    title: string;
    icon: string;
    items: SyllabusItem[];
}

const CourseDetailsSyllabus = () => {
    const moduleData: Module[] = [
        {
            id: "module-1",
            title: "English Grammar",
            icon: "En",
            items: [
                {
                    id: "item-1",
                    title: "Parts of Speech",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-2", 
                    title: "Tense",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-3",
                    title: "Voice Change",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-4",
                    title: "Narration",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-5",
                    title: "Preposition",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-6",
                    title: "Article",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                }
            ]
        },
        {
            id: "module-2",
            title: "English Literature",
            icon: "📚",
            items: [
                {
                    id: "item-1",
                    title: "Periods of English Literature",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-2",
                    title: "The Old & Middle English Periods",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-3",
                    title: "Renaissance Period",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-4",
                    title: "Neoclassical Period",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-5",
                    title: "Romantic Period",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                },
                {
                    id: "item-6",
                    title: "Post Modern Period",
                    duration: "১টি ভিডিও",
                    credit: "১টি নোট"
                }
            ]
        }
    ];

    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {moduleData.map((module) => (
                <AccordionItem 
                    key={module.id} 
                    value={module.id}
                    className="border rounded-lg px-4"
                >
                    <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                                {module.icon}
                            </div>
                            <span className="font-medium text-lg">{module.title}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                        <Accordion type="single" collapsible className="w-full">
                            {module.items.map((item) => (
                                <AccordionItem 
                                    key={item.id} 
                                    value={item.id}
                                    className="border-none"
                                >
                                    <AccordionTrigger className="hover:no-underline py-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-600">📄</span>
                                            <div className="text-left">
                                                <h3 className="font-medium">{item.title}</h3>
                                                <p className="text-sm text-gray-500">
                                                    {item.duration} • {item.credit}
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-12">
                                        {/* Add your content here */}
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

export default CourseDetailsSyllabus;

