"use client"

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, FileStack, Users, Video, ChevronLeft, ChevronRight } from "lucide-react";
import CourseDetailsInstructor from "./instructor";
import CourseDetailsOutcomes from "./outcomes";
import CourseDetailsSyllabus from "./syllabus";
import CourseDetailsIndetails from "./indetails";
import CourseDetailsNecessaries from "./necessaries";
import CourseDetailsPayments from "./payments";
import CourseDetailsFaq from "./faq";
import CourseDetailsInquiry from "./inquiry";
import { useRef } from "react";



export const DetailsTabs = () => {
    const tabsData = [
        {
            id: 1,
            title: "কোর্স ইন্সট্রাক্টর",
            content: <CourseDetailsInstructor />
        },
        {
            id: 2,
            title: "কোর্সটি করে যা শিখবেন",
            content: <CourseDetailsOutcomes />
        },
        {
            id: 3,
            title: "কোর্স সিলেবাস",
            content: <CourseDetailsSyllabus />
        },
        {
            id: 4,
            title: "কোর্স সম্পর্কে বিস্তারিত",
            content: <CourseDetailsIndetails />
        },
        {
            id: 5,
            title: "ক্লাস করার জন্য প্রয়োজন হবে",
            content: <CourseDetailsNecessaries />
        },
        {
            id: 6,
            title: "যেভাবে পেমেন্ট করবেন",
            content: <CourseDetailsPayments />
        },
        {
            id: 7,
            title: "সচরাচর জিজ্ঞাসা",
            content: <CourseDetailsFaq />
        },
        {
            id: 8,
            title: "আরও কোন জিজ্ঞাসা আছে?",
            content: <CourseDetailsInquiry />
        },
    ]

    const tabsContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (tabsContainerRef.current) {
            const scrollAmount = 200; // Adjust this value to control scroll distance
            const newScrollPosition = tabsContainerRef.current.scrollLeft + 
                (direction === 'left' ? -scrollAmount : scrollAmount);
            
            tabsContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return <div className="container section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="col-span-1 lg:col-span-3 border p-4 rounded-[20px]">
            <Tabs defaultValue={tabsData[0].id.toString()}>
                <div className="relative">
                    <div 
                        ref={tabsContainerRef}
                        className="overflow-x-auto scrollbar-hide px-8 py-1 rounded-md"
                    >
                        <TabsList>
                            {tabsData.map((tab) => (
                                <TabsTrigger 
                                    key={tab.id} 
                                    value={tab.id.toString()} 
                                    className="px-4 py-2"
                                >
                                    {tab.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    <div className="absolute top-0 right-0 h-full flex items-center">
                        <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white shadow-md hover:text-white"
                            onClick={() => scroll('right')}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="absolute top-0 left-0 h-full flex items-center">
                        <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white shadow-md hover:text-white"
                            onClick={() => scroll('left')}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                {tabsData.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id.toString()} className="py-8">{tab.content}</TabsContent>
                ))}
            </Tabs>

        </div>
        <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-[20px] p-4 md:p-8 shadow-lg hover:shadow-2xl border space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold">BDT 1300 </h3>
                    <p className="text-gray-500">English Course for Govt Jobs</p>
                </div>
                <Button className="w-full">কোর্স কন্টিনিউ করুন</Button>
                <div className="space-y-2">
                    <p className="text-lg font-semibold">এই কোর্সে যা থাকছে</p>
                    <ul className="space-y-2">
                        {
                            [{
                                id: 1,
                                title: "completedBy",
                                value: "কোর্সটি করছেন ১৩২ জন",
                                icon: <Users />
                            },
                            {
                                id: 2,
                                title: "duration",
                                value: "সময় লাগবে ১৫ ঘন্টা",
                                icon: <Clock />
                            }, {
                                id: 3,
                                title: "videosNumber",
                                value: "৩৫+ ভিডিও",
                                icon: <Video />
                            }, {
                                id: 4,
                                title: "slidesNumber",
                                value: "৩৫+ স্লাইড",
                                icon: <FileStack />
                            }, {
                                id: 5,
                                title: "upcomingClassess",
                                value: "৫ টি পূর্ণাঙ্গ মডেল টেস্ট (শীঘ্রই আসছে)",
                                icon: <BookOpen />
                            }].map((item) => {
                                return (
                                    <li key={item.id} className="flex items-center gap-2 [&>svg]:text-gray-500">
                                        {item.icon}
                                        <span>{item.value}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>;
};
