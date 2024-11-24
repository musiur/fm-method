import Carousel from "@/components/molecules/carousel";
import MedicalAdmissionCourse from "./assets/medical-admission.png";
import PrimaryAssistantTeacherCourse from "./assets/primary-assistant-teacher.png";
import BankJobsCourse from "./assets/bank-jobs.png";
import EnglishGovtJobsCourse from "./assets/english-govt-jobs.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const getCourses = async () => {
  const courses = [
    {
      id: 1,
      title: <>Professional Course</>,
      teacher: "Md. Suman Bhuiyan+",
      link: "/course-details/basic-english",
      image: EnglishGovtJobsCourse
    },
    {
      id: 2,
      title: <>Marters Courses</>,
      teacher: "Md. Suman Bhuiyan+",
      link: "/course-details/intermediate-english",
      image: PrimaryAssistantTeacherCourse
    },
    {
      id: 3,
      title: <>Other Courses</>,
      teacher: "Md. Suman Bhuiyan+",
      link: "/course-details/advanced-english",
      image: BankJobsCourse
    },
    {
      id: 4,
      title: <>Courses By</>,
      teacher: "Md. Suman Bhuiyan+",
      link: "/course-details/ielts-preparation",
      image: MedicalAdmissionCourse
    },
    {
      id: 5,
      title: <>Courses By</>,
      teacher: "Md. Suman Bhuiyan+",
      link: "/course-details/ielts-preparation",
      image: MedicalAdmissionCourse
    },
  ];
  return courses;
}

const HomeNewEnglishCourses = async () => {
  const courseData = await getCourses();

  const list = courseData.map((course) => {
    const { title, link, image, teacher } = course;
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <Image src={image} alt="course-image" width={500} height={500} className="object-cover object-top max-h-[240px]" />
        </div>
        <div className="p-4 bg-white flex flex-col items-center justify-center gap-2">
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <p className="text-gray-500">{teacher}</p>
          <Link href={link} className="w-full">
            <Button className="w-full">Details</Button>
          </Link>
        </div>
      </div>
    )
  });



  return <div className="section">
    <div className="container space-y-8">
      <div className="space-y-4 flex flex-col items-center justify-center">
        <p>চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!</p>
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">NEW ENGLISH COURSES</h2>
      </div>
      <Carousel list={list} title="home-new-english-courses-list" col={4} />
    </div>
  </div>;
};

export default HomeNewEnglishCourses;
