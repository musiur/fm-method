"use client"

import { FormX, FormX__TYPE_Structure } from "@/components/form-x/form-x";

const FormStructure: FormX__TYPE_Structure = {
  fields: [
    {
      id: 1,
      type: "text",
      name: "name",
      label: "সম্পূর্ণ নাম",
    },
    {
      id: 2,
      type: "text",
      name: "email",
      label: "ইমেইল এড্রেস",
      placeholder: "e.g example@domain.abc"
    },
    {
      id: 3,
      type: "text",
      name: "phone",
      label: "ফোন নম্বর",
      placeholder: "e.g 01712345678"
    },
    {
      id: 4,
      type: "password",
      name: "password",
      label: "পাসওয়ার্ড",
    }
  ],
  submission: {
    toast: true,
    submitHandler: (data) => {
      console.log("submitted", data);
    },
    buttonText: "রেজিস্ট্রেশন করুন",
    buttonClassName: "w-full"
  }
}

const HomeRegistrationForm = () => {
  return <div className="py-0 lg:py-10">
    <div className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-10 my-auto">
    <div className="mb-5">
    <h3 className="text-xl md:text-2xl font-semibold">রেজিস্ট্রেশন করুন</h3>
    <p>ফর্মটি পূরণ করুন রেজিস্ট্রেশন করতে</p>
    </div>
    <FormX structure={FormStructure} />
  </div>
  </div>;
};

export default HomeRegistrationForm;
