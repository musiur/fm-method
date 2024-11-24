import Carousel from "@/components/molecules/carousel";
import MedicalAdmissionCourse from "./assets/medical-admission.png";
import PrimaryAssistantTeacherCourse from "./assets/primary-assistant-teacher.png";
import BankJobsCourse from "./assets/bank-jobs.png";
import EnglishGovtJobsCourse from "./assets/english-govt-jobs.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/molecules/rating";

const getCourses = async () => {
  const courses = [
    {
      id: 1,
      title: <>Medical Admission Course</>,
      shortDescription: "Complete preparation for medical college admission test",
      link: "/course-details/medical-admission",
      image: MedicalAdmissionCourse,
      rating: 4.8,
      price: 2500,
    },
    {
      id: 2,
      title: <>Primary Assistant Teacher Preparation</>,
      shortDescription: "Comprehensive guide for primary teacher recruitment",
      link: "/course-details/primary-teacher",
      image: PrimaryAssistantTeacherCourse,
      rating: 4.6,
      price: 1800,
    },
    {
      id: 3,
      title: <>Bank Job Preparation</>,
      shortDescription: "Complete guide for bank job examinations",
      link: "/course-details/bank-jobs",
      image: BankJobsCourse,
      rating: 4.7,
      price: 2000,
    },
    {
      id: 4,
      title: <>English for Government Jobs</>,
      shortDescription: "Master English for all government job exams",
      link: "/course-details/govt-english",
      image: EnglishGovtJobsCourse,
      rating: 4.5,
      price: 1500,
    },
    {
      id: 5,
      title: <>Advanced English Grammar</>,
      shortDescription: "Perfect your English grammar skills",
      link: "/course-details/advanced-grammar",
      image: EnglishGovtJobsCourse,
      rating: 4.9,
      price: 1600,
    },
    {
      id: 6,
      title: <>BCS Special Course</>,
      shortDescription: "Specialized preparation for BCS examination",
      link: "/course-details/bcs-special",
      image: BankJobsCourse,
      rating: 4.4,
      price: 2800,
    },
    {
      id: 7,
      title: <>IELTS Preparation</>,
      shortDescription: "Achieve your target IELTS band score",
      link: "/course-details/ielts-prep",
      image: EnglishGovtJobsCourse,
      rating: 4.7,
      price: 2200,
    },
    {
      id: 8,
      title: <>Spoken English Mastery</>,
      shortDescription: "Become fluent in spoken English",
      link: "/course-details/spoken-english",
      image: EnglishGovtJobsCourse,
      rating: 4.3,
      price: 1400,
    },
    {
      id: 9,
      title: <>Job Interview Skills</>,
      shortDescription: "Master job interview techniques",
      link: "/course-details/interview-skills",
      image: BankJobsCourse,
      rating: 4.6,
      price: 1700,
    },
    {
      id: 10,
      title: <>English Writing Course</>,
      shortDescription: "Develop professional writing skills",
      link: "/course-details/writing-skills",
      image: EnglishGovtJobsCourse,
      rating: 4.8,
      price: 1900,
    },
  ];
  return courses;
}

const HomeOnlineCourses = async () => {
  const courseData = await getCourses();



  const list = courseData.map((course) => {
    const { title, link, image, shortDescription, price, rating } = course;
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <Image src={image} alt="course-image" width={500} height={500} className="object-cover object-top max-h-[240px]" />
        </div>
        <div className="p-4 bg-white flex flex-col items-start justify-center gap-2 border">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-xs text-gray-500">{shortDescription}</p>
          <div className="flex items-center justify-between w-full">
            <div className="font-semibold">BDT {price}</div>
            {StarRating(rating)}
          </div>
          <Link href={link} className="w-full pt-4">
            <Button className="w-full">Start Class</Button>
          </Link>
        </div>
      </div>
    )
  });



  return <div className="section">
    <div className="container space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Online Courses</h2>
        <div>Category</div>
      </div>
      <Carousel list={list} title="home-new-english-courses-list" col={4} grid={true} />
    </div>
  </div>;
};

export default HomeOnlineCourses;
