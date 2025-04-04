import { Button } from "@/components/ui/button";
import { 
    BookOpen, 
    Clock, 
    FileStack, 
    Users, 
    Video 
} from "lucide-react";
import Link from "next/link";

export const CourseSummeryCard = ({
    price,
    title,
    courseId
}: {
    price: string;
    title: string;
    courseId: string
}) => {
    const courseCheckoutLink = `/checkout?productId=${courseId}&productType=course`;

    return (
        <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-[20px] p-4 md:p-8 shadow-lg hover:shadow-2xl border space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold">BDT {price} </h3>
                    <p className="text-gray-500">{title}</p>
                </div>
                <Link href={courseCheckoutLink}>
                    <Button className="w-full">কোর্স কন্টিনিউ করুন</Button>
                </Link>
                <div className="space-y-2">
                    <p className="text-lg font-semibold">এই কোর্সে যা থাকছে</p>
                    <ul className="space-y-2">
                        {CourseDetails.map((item) => {
                            return (
                                <li key={item.id} className="flex items-center gap-2 [&>svg]:text-gray-500">
                                    {item.icon}
                                    <span>{item.value}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const CourseDetails = [
    {
        id: 1,
        title: "completedBy",
        value: "কোর্সটি করছেন ১৩২ জন",
        icon: <Users />,
    },
    {
        id: 2,
        title: "duration",
        value: "সময় লাগবে ১৫ ঘন্টা",
        icon: <Clock />,
    },
    {
        id: 3,
        title: "videosNumber",
        value: "৩৫+ ভিডিও",
        icon: <Video />,
    },
    {
        id: 4,
        title: "slidesNumber",
        value: "৩৫+ স্লাইড",
        icon: <FileStack />,
    },
    {
        id: 5,
        title: "upcomingClassess",
        value: "৫ টি পূর্ণাঙ্গ মডেল টেস্ট (শীঘ্রই আসছে)",
        icon: <BookOpen />,
    },
]