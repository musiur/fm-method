import MedicalAdmissionCourse from "../_assets/medical-admission.png";
import PrimaryAssistantTeacherCourse from "../_assets/primary-assistant-teacher.png";
import BankJobsCourse from "../_assets/bank-jobs.png";
import EnglishGovtJobsCourse from "../_assets/english-govt-jobs.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/molecules/rating";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { id: "all", label: "See All" },
  { id: "basic", label: "Basic" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "ielts", label: "IELTS" },
];

const getCourses = async () => {
  const courses = [
    {
      id: 1,
      title: <>Medical Admission Course</>,
      shortDescription: "Complete preparation for medical college admission test",
      link: "/courses/medical-admission",
      image: MedicalAdmissionCourse,
      rating: 4.8,
      price: 2500,
    },
    {
      id: 2,
      title: <>Primary Assistant Teacher Preparation</>,
      shortDescription: "Comprehensive guide for primary teacher recruitment",
      link: "/courses/primary-teacher",
      image: PrimaryAssistantTeacherCourse,
      rating: 4.6,
      price: 1800,
    },
    {
      id: 3,
      title: <>Bank Job Preparation</>,
      shortDescription: "Complete guide for bank job examinations",
      link: "/courses/bank-jobs",
      image: BankJobsCourse,
      rating: 4.7,
      price: 2000,
    },
    {
      id: 4,
      title: <>English for Government Jobs</>,
      shortDescription: "Master English for all government job exams",
      link: "/courses/govt-english",
      image: EnglishGovtJobsCourse,
      rating: 4.5,
      price: 1500,
    },
    {
      id: 5,
      title: <>Advanced English Grammar</>,
      shortDescription: "Perfect your English grammar skills",
      link: "/courses/advanced-grammar",
      image: EnglishGovtJobsCourse,
      rating: 4.9,
      price: 1600,
    },
    {
      id: 6,
      title: <>BCS Special Course</>,
      shortDescription: "Specialized preparation for BCS examination",
      link: "/courses/bcs-special",
      image: BankJobsCourse,
      rating: 4.4,
      price: 2800,
    },
    {
      id: 7,
      title: <>IELTS Preparation</>,
      shortDescription: "Achieve your target IELTS band score",
      link: "/courses/ielts-prep",
      image: EnglishGovtJobsCourse,
      rating: 4.7,
      price: 2200,
    },
    {
      id: 8,
      title: <>Spoken English Mastery</>,
      shortDescription: "Become fluent in spoken English",
      link: "/courses/spoken-english",
      image: EnglishGovtJobsCourse,
      rating: 4.3,
      price: 1400,
    },
  ];
  return courses;
}

const HomeOnlineCourses = async () => {
  const courseData = await getCourses();

  const list = courseData.map((course) => {
    const { id, title, link, image, shortDescription, price, rating } = course;
    return (
      <div key={id} className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-[220px]">
          <Image 
            src={image} 
            alt="course-image" 
            width={500} 
            height={500} 
            className="object-cover w-full h-full" 
          />
        </div>
        <div className="p-4 bg-white flex flex-col flex-1 justify-between gap-4 border">
          <div className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-gray-500">{shortDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between w-full">
              <div className="font-semibold">BDT {price}</div>
              {StarRating(rating)}
            </div>
            <Link href={link} className="w-full">
              <Button className="w-full">Start Class</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  });

  return <div className="section">
    <div className="container space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Online Courses</h2>
        
        {/* Desktop Category List */}
        <div className="hidden md:flex items-center gap-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className="text-gray-600 hover:text-primary hover:bg-primary/5"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Mobile Category Select */}
        <div className="md:hidden">
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {list}
      </div>
      {/* <Carousel list={list} title="home-new-english-courses-list" col={4} grid={true} /> */}
      <div className="flex justify-center pt-8">
        <Link href="/online-courses">
          <Button variant="outline">View All Courses</Button>
        </Link>
      </div>
    </div>
  </div>;
};

export default HomeOnlineCourses;
