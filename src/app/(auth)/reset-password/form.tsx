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
    title: "পাসওয়ার্ড পরিবর্তন করুন",
    description: "পাসওয়ার্ড পরিবর্তন করুন এই পেজে পাসওয়ার্ড পরিবর্তন করুন।",
  },
  {
    image: SlideImage,
    title: "পাসওয়ার্ড পরিবর্তন করুন 1",
    description: "পাসওয়ার্ড পরিবর্তন করুন এই পেজে পাসওয়ার্ড পরিবর্তন করুন।",
  },
];

const FormXStructure: FormX__TYPE_Structure = {
  fields: [
    {
      id: 1,
      type: "password",
      name: "password",
      label: "পাসওয়ার্ড",
      placeholder: "********",
      validation: z.string().min(8, {
        message: "পাসওয়ার্ড লিখুন।",
      }),
      defaultValue: ""
    },
    {
      id: 2,
      type: "password",
      name: "confirm-password",
      label: "পাসওয়ার্ড নির্দ্বেষ করুন",
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
    buttonText: "সাবমিট",
    buttonClassName: "w-full",
  },
};

const ResetPasswordForm = () => {
  return (
    <div className="container section flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-[500px] w-full space-y-8">
        <div>
          <h3 className="text-2xl font-bold">পাসওয়ার্ড পরিবর্তন করুন</h3>
          <p className="text-sm text-gray-500">
            ফর্মটি পূরণ করুন পাসওয়ার্ড পরিবর্তন করতে
          </p>
        </div>
        <FormX structure={FormXStructure} />
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
          title="পাসওয়ার্ড পরিবর্তন করুন"
          col={1}
        />
      </div>
    </div>
  );
};

export default ResetPasswordForm;