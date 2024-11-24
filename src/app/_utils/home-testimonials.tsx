import Carousel from "@/components/molecules/carousel";
import StudentTestimonial1 from "./assets/student-1.png";
import StudentTestimonial2 from "./assets/student-2.png";
import StudentTestimonial3 from "./assets/student-3.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const getCourses = async () => {
  const courses = [
    {
      id: 1,
      name: <>শৌমায় ক্বা</>,
      role: "সফটওয়্যার ইঞ্জিনিয়ার",
      description: "FM Method এর কোর্সগুলো খুবই উপকারী। বিশেষ করে ইংরেজি শেখার জন্য তাদের পদ্ধতি অসাধারণ। আমি নিজে এখান থেকে অনেক কিছু শিখেছি এবং আমার ক্যারিয়ারে এটি খুবই সহায়ক হয়েছে।",
      image: StudentTestimonial1
    },
    {
      id: 2,
      name: <>শুভাঙ্গী দুহান</>,
      role: "সফটওয়্যার গবেষক",
      description: "FM Method এর শিক্ষকরা খুবই দক্ষ এবং সহযোগী। তারা প্রতিটি বিষয় খুব সহজভাবে বুঝিয়ে দেন। আমি এখান থেকে যা শিখেছি তা আমার গবেষণার কাজে খুবই উপকারী হয়েছে।",
      image: StudentTestimonial2
    },
    {
      id: 3,
      name: <>পারস যাদব</>,
      role: "সফটওয়্যার টেস্টার",
      description: "FM Method এর অনলাইন লার্নিং প্ল্যাটফর্ম খুবই উন্নত এবং ব্যবহারবান্ধব। যেকোন সময় যেকোন জায়গা থেকে শেখার সুযোগ পাওয়া যায়। এছাড়া তাদের সাপোর্ট টিম সবসময় সহায়তা করতে প্রস্তুত থাকে।",
      image: StudentTestimonial3
    },
    {
      id: 4,
      name: <>রাহুল শর্মা</>,
      role: "সফটওয়্যার টেস্টার",
      description: "FM Method এর কোর্স মডিউলগুলো খুব ভালভাবে সাজানো। প্রতিটি টপিক ধাপে ধাপে শেখানো হয়। এছাড়া প্র্যাকটিক্যাল এক্সারসাইজগুলো শেখার প্রক্রিয়াকে আরও সহজ করে তোলে।",
      image: StudentTestimonial1
    },
    {
      id: 5,
      name: <>অনিকা হাসান</>,
      role: "সফটওয়্যার টেস্টার",
      description: "FM Method এর কোর্স ফি খুবই যুক্তিসঙ্গত। তারা মানসম্মত শিক্ষা প্রদান করে এবং নিয়মিত আপডেট করে থাকে। আমি এখান থেকে শিখে খুবই উপকৃত হয়েছি।",
      image: StudentTestimonial1
    },
  ];
  return courses;
}

const HomeTestimonials = async () => {
  const courseData = await getCourses();

  const list = courseData.map((course) => {
    const { name, image, role, description } = course;
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden bg-white p-4 md:p-8 border h-full space-y-8">
        <div className="space-y-4">
          <Image src={image} alt="course-image" width={500} height={500} className="w-12 h-12 rounded-full" />
          <div>
          <h3 className="text-lg md:text-xl font-bold">{name}</h3>
          <p className="text-gray-500">{role}</p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    )
  });



  return <section className="container section space-y-8">
    <div className="space-y-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-semibold leading-tight">কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?</h2>
    </div>
    <Carousel list={list} title="home-testimonials-list" col={3} />
  </section>;
};

export default HomeTestimonials;
