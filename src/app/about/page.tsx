import Image from 'next/image';
import { ReactElement } from 'react';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import {
  BasicIcon,
  IntermediateIcon,
  IeltsIcon,
  AdvancedIcon
} from '@/components/pages/home';

interface CourseCategory {
  id: number;
  title: string;
  icon: ReactElement;
  link: string;
}

const HomeAbout = () => {
  const courseCategories: CourseCategory[] = [
    {
      id: 1,
      title: 'About FM Sir',
      icon: <BasicIcon />,
      link: '/courses/basic'
    },
    {
      id: 2,
      title: 'Publications',
      icon: <IntermediateIcon />,
      link: '/courses/intermediate'
    },
    {
      id: 3,
      title: 'What is FM Method?',
      icon: <IeltsIcon className="stroke-accent" />,
      link: '/courses/ielts'
    },
    {
      id: 4,
      title: 'Gallery',
      icon: <AdvancedIcon />,
      link: '/courses/advance'
    }
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
          </div>

          <div className="my-auto">
            <div className="mb-8">
              <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
                About US
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">আমাদের সম্পর্কে</h2>
            <p className="text-gray-600 mb-8">
              এফএম মেথড হলো বাংলা ভাষাভাষী মানুষদের ইংরেজি শেখানোর একটি বৈজ্ঞানিক পদ্ধতি। এটি ইংরেজি শেখার একটি অনন্য এবং কার্যকর উপায়।
            </p>
            <button className="bg-[#4338CA] text-white px-8 py-3 rounded-lg hover:bg-[#3730A3] transition-colors">
              আরো জানুন
            </button>
          </div>
          <div className="my-auto">
            <div className="grid grid-cols-2 gap-6">
              {courseCategories.map((category) => (
                <a
                  key={category.id}
                  href={category.link}
                  className={
                    clsx("border rounded-lg hover:shadow-lg transition-shadow group", {
                      "border-accent/20 [&>*]:text-accent": category.id === 3,
                    })
                  }
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-32 flex items-start justify-center">
                      {category.icon}
                    </div>
                    <div className="pb-4 -mt-6">
                      <h4 className="text-xl font-semibold mb-2">{category.title}</h4>
                      <span className={clsx("group-hover:translate-x-2 transition-transform inline-flex items-center gap-2", {
                        "text-accent": category.id === 3,
                        "text-primary": category.id !== 3,
                      })}>
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

export default HomeAbout;
