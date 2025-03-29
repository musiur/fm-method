"use client";

import { Carousel } from "@/components/molecules";
import Slide from "./slide";
import SlideImage from "./caute.png";
import Link from "next/link";
import { DataRegistrationFormStructure } from "@/components/pages/home/data-registration-form-structure";
import { FormX } from "@/components/form-x/form-x";

const Slides = [
  {
    image: SlideImage,
    title: "রেজিস্ট্রেশন করুন",
    description: "রেজিস্ট্রেশন করুন এই পেজে রেজিস্ট্রেশন করুন।",
  },
  {
    image: SlideImage,
    title: "রেজিস্ট্রেশন করুন 1",
    description: "রেজিস্ট্রেশন করুন এই পেজে রেজিস্ট্রেশন করুন।",
  },
];

const RegisterForm = () => {
  return (
    <div className="container section flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-[500px] w-full space-y-8">
        <div>
          <h3 className="text-2xl font-bold">রেজিস্ট্রেশন করুন</h3>
          <p className="text-sm text-gray-500">
            ফর্মটি পূরণ করুন রেজিস্ট্রেশন করতে
          </p>
        </div>
        <FormX structure={DataRegistrationFormStructure} />
        <hr />
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">অলরেডি একাউন্ট আছে?</p>
          <Link href="/login" className="text-sm text-blue-500">
            লগ-ইন করুন
          </Link>
        </div>
      </div>
      <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[500px]">
        <Carousel
          list={Slides.map((slide) => (
            <Slide key={slide.title} {...slide} />
          ))}
          title="রেজিস্ট্রেশন করুন"
          col={1}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
