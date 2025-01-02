"use client";

import { FormX, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { z } from "zod";
import Carousel from "@/components/molecules/carousel";
import Slide from "./slide";
import SlideImage from "./caute.png";
import Link from "next/link";

const Slides = [
  {
    image: SlideImage,
    title: "লগ-ইন করুন",
    description: "লগ-ইন করুন এই পেজে লগ-ইন করুন।",
  },
  {
    image: SlideImage,
    title: "লগ-ইন করুন 1",
    description: "লগ-ইন করুন এই পেজে লগ-ইন করুন।",
  },
];

const FormXStructure: FormX__TYPE_Structure = {
  fields: [
    {
      id: 1,
      type: "text",
      name: "email",
      label: "ইমেইল এড্রেস",
      placeholder: "john.doe@example.abc",
      validation: z.string().email({
        message: "ইমেইল এড্রেস লিখুন।",
      }),
      defaultValue: ""
    },
    {
      id: 2,
      type: "password",
      name: "password",
      label: "পাসওয়ার্ড",
      placeholder: "********",
      validation: z.string().min(8, {
        message: "পাসওয়ার্ড লিখুন।",
      }),
      defaultValue: ""
    },
  ],
  submission: {
    toast: true,
    submitHandler: (data) => {
      console.log(data);
    },
    buttonText: "লগ-ইন",
    buttonClassName: "w-full",
  },
};

const LoginForm = () => {
  return (
    <div className="container section flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-[500px] w-full space-y-8">
        <div>
          <h3 className="text-2xl font-bold">লগ-ইন করুন</h3>
          <p className="text-sm text-gray-500">
            ফর্মটি পূরণ করুন লগ-ইন করতে
          </p>
        </div>
        <FormX structure={FormXStructure} />
        <hr />
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">
            পাসওয়ার্ড ভুলে গেছেন?
          </p>
          <Link href="/forget-password" className="text-sm text-blue-500">
            পাসওয়ার্ড পরিবর্তন করুন
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">
            রেজিস্ট্রেশন করা হয়নি?
          </p>
          <Link href="/register" className="text-sm text-blue-500">
            রেজিস্ট্রেশন করুন
          </Link>
        </div>
      </div>
      <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[500px]">
        <Carousel
          list={Slides.map((slide) => (
            <Slide key={slide.title} {...slide} />
          ))}
          title="লগ-ইন করুন"
          col={1}
        />
      </div>
    </div>
  );
};

export default LoginForm;
