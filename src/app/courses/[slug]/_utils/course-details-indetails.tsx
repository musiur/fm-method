import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const courseDetails = [
  {
    id: "item-1",
    title: "'English For Govt. Jobs' কোর্সটি যাদের জন্য",
    content: [
      "স্নাতক/ স্নাতকোত্তর শেষে যারা সরকারি চাকরির প্রিপারেশন নিতে চায়",
      "গভর্নমেন্ট জব প্রিলিমিনারি কিংবা রিটেন এক্সামে যারা ইংরেজিতে এগিয়ে থাকতে চায়",
      "ইংরেজির গ্রামার ও লিটারেচারের বিভিন্ন অংশ নিয়ে যারা কনফিউশন ক্লিয়ার করতে চায়",
      "ইংরেজিতে দুর্বল হলেও যারা ভিভি মজবুত করে চাকরি পরীক্ষায় সফল হতে চায়"
    ],
    type: "list"
  },
  {
    id: "item-2",
    title: "'English For Govt. Jobs' কোর্স সম্পর্কে বিস্তারিত",
    content: "স্নাতক সম্পন্ন করার পর একজন শিক্ষার্থী সবচেয়ে বড় যে যুদ্ধের সম্মুখীন হয় তা হচ্ছে সম্মানজনক বেতনে একটি চাকরি লাভ। এক্ষেত্রে বিভিন্ন গভর্নমেন্ট জব পরীক্ষায় দেখা গেছে যে, ইংরেজিতে দক্ষ শিক্ষার্থীরা স্বাভাবিকভাবেই অন্যান্য চাকরিপ্রার্থীদের থেকে প্রতিযোগিতায় এগিয়ে থাকেন।",
    type: "paragraph"
  }
]

const CourseDetailsIndetails = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {courseDetails.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>
            {item.type === "list" ? (
              <ul className="list-disc pl-6 space-y-2">
                {(item.content as string[]).map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{item.content}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CourseDetailsIndetails;

