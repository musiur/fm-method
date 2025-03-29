import { Carousel } from "@/components/molecules";
import {
  AdvancedCourse,
  IntermediateCourse,
  BasicCourse,
  IELTSCourse,
} from "@/components/assets";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const getCourses = async () => {
  const courses = [
    {
      id: 1,
      title: (
        <>
          <span className="text-green-600 font-bold">Basic</span> English
        </>
      ),
      link: "/courses/basic-english",
      image: BasicCourse,
    },
    {
      id: 2,
      title: (
        <>
          <span className="text-yellow-600 font-bold">Intermediate</span>{" "}
          English
        </>
      ),
      link: "/courses/intermediate-english",
      image: IntermediateCourse,
    },
    {
      id: 3,
      title: (
        <>
          <span className="text-blue-600 font-bold">Advanced</span> English
        </>
      ),
      link: "/courses/advanced-english",
      image: AdvancedCourse,
    },
    {
      id: 4,
      title: (
        <>
          <span className="text-red-600 font-bold">IELTS</span> Preparation
        </>
      ),
      link: "/courses/ielts-preparation",
      image: IELTSCourse,
    },
    {
      id: 5,
      title: (
        <>
          <span className="text-red-600 font-bold">IELTS</span> Preparation
        </>
      ),
      link: "/courses/ielts-preparation",
      image: IELTSCourse,
    },
  ];
  return courses;
};

export const CourseList = async () => {
  const courseData = await getCourses();

  const list = courseData.map((course, index) => {
    const { title, link, image } = course;
    return (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="relative">
          <Image
            src={image}
            alt="course-image"
            width={1000}
            height={1000}
            className="object-cover object-top max-h-[300px]"
            quality={100}
          />
          <div className="absolute top-0 left-0 w-full h-auto text-center pt-4">
            <h3 className="text-white text-xl md:text-2xl font-bold">
              {title}
            </h3>
          </div>
        </div>
        <div className="p-4 bg-white">
          <Link href={link}>
            <Button className="w-full">অংশগ্রহণ করুন</Button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="section bg-darkBrand">
      <div className="container space-y-8">
        <div className="space-y-4 [&>*]:text-white">
          <p>
            পুরো মাস জুড়ে FM Method নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে।
            এবার শেখার শুরু হোক FM Method সাথে!
          </p>
          <h2 className="text-2xl md:text-4xl font-bold">
            স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়!
          </h2>
        </div>
        <Carousel list={list} title="home-course-list" darkbg={true} col={4} />
      </div>
    </div>
  );
};
