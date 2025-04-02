import Image from "next/image";
import { BasicIcon, IntermediateIcon, IeltsIcon, AdvancedIcon } from ".";
import clsx from "clsx";
import { ReactElement } from "react";
import { ChevronRight } from "lucide-react";

interface CourseCategory {
  id: number;
  title: string;
  icon: ReactElement;
  link: string;
}

export const About = () => {
  const courseCategories: CourseCategory[] = [
    {
      id: 1,
      title: "Basic",
      icon: <BasicIcon />,
      link: "/courses/basic",
    },
    {
      id: 2,
      title: "Intermediate",
      icon: <IntermediateIcon />,
      link: "/courses/intermediate",
    },
    {
      id: 3,
      title: "IELTS",
      icon: <IeltsIcon className="stroke-accent" />,
      link: "/courses/ielts",
    },
    {
      id: 4,
      title: "Advance",
      icon: <AdvancedIcon />,
      link: "/courses/advance",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div className="relative my-auto">
            <Image
              src="https://exwj7ki8kn.ufs.sh/f/xXgziAMpCDIlwhrxNNFmELrtu6eIWlRk4YbSNC9MK7X5sDjA"
              alt="Instructor"
              width={500}
              height={600}
              className="rounded-lg scale-x-[-1]"
            />
            <div className="absolute bottom-4 left-4 bg-[#4338CA] text-white px-6 py-3 rounded-lg">
              <h3 className="text-2xl font-bold">25+ Experience</h3>
            </div>
          </div>

          <div className="my-auto">
            <div className="mb-8">
              <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
                About US
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">আমাদের সম্পর্কে</h2>
            <p className="text-gray-600 mb-8">
              &quot;একজন সিনিয়র প্রাকটিশনী হিসাবে আমি বিশেষভাবে FM Method-এর সিস্টেম ডিজাইন
              বিষয়বস্তু এবং পদ্ধতি ক্লাস পরিচালনা করেছি এবং আমি আন্তরিক ধন্যবাদ পরিবর্তে তাঁর
              ব্যবসায়ীদের দিকে আরও বেশি সেবাইট বা প্রতিষ্ঠানের মাধ্যম-নামের পরিবেশে কাজ করতে
              সক্ষমতা করে। সিস্টেম ডিজাইনের দক্ষতা অর্জনের জন্য আমি FM Method কোর্সটি সুপারিশ
              করব।&quot;
            </p>
            <button className="bg-[#4338CA] text-white px-8 py-3 rounded-lg hover:bg-[#3730A3] transition-colors">
              আরো জানুন
            </button>
          </div>
          <div className="my-auto">
            <h3 className="text-2xl font-bold mb-8">কোর্স বিভাগ</h3>
            <div className="grid grid-cols-2 gap-6">
              {courseCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.link}
                  className={clsx("border rounded-lg hover:shadow-lg transition-shadow group", {
                    "border-accent/20 [&>*]:text-accent": category.id === 3,
                  })}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-32 flex items-start justify-center">{category.icon}</div>
                    <div className="pb-4 -mt-6">
                      <h4 className="text-xl font-semibold mb-2">{category.title}</h4>
                      <span
                        className={clsx(
                          "group-hover:translate-x-2 transition-transform inline-flex items-center gap-2",
                          {
                            "text-accent": category.id === 3,
                            "text-primary": category.id !== 3,
                          }
                        )}
                      >
                        সব দেখুন <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
