"use client";

import { FormX, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { z } from "zod";
import Carousel from "@/components/molecules/carousel";
import Slide from "./slide";
import SlideImage from "./caute.png";
import Link from "next/link";
import { AUTH_REGISTER } from "../_partials/_actions/auth-register";

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

const FormXStructure: FormX__TYPE_Structure = {
  fields: [
    {
      id: 1,
      type: "text",
      name: "username",
      label: "সম্পূর্ণ নাম",
      placeholder: "মোহাম্মাহ আবদুল্লাহ আল বাকী",
      validation: z.string().min(2, {
        message: "সম্পূর্ণ নাম লিখুন।",
      }),
      defaultValue: "",
    },
    {
      id: 2,
      type: "text",
      name: "email",
      label: "ইমেইল এড্রেস",
      placeholder: "john.doe@example.abc",
      validation: z.string().email({
        message: "ইমেইল এড্রেস লিখুন।",
      }),
      defaultValue: "",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      label: "পাসওয়ার্ড",
      placeholder: "********",
      validation: z.string().min(8, {
        message: "পাসওয়ার্ড লিখুন।",
      }),
      defaultValue: "",
    },
  ],
  submission: {
    toast: true,
    submitHandler: async (data) => {
      const result = await AUTH_REGISTER(data);
      return result;
    },
    buttonText: "রেজিস্টার",
    buttonClassName: "w-full",
  },
};

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
          title="রেজিস্ট্রেশন করুন"
          col={1}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
