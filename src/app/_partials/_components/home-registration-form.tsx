"use client";

import { FormX } from "@/components/form-x/form-x";
import { DataRegistrationFormStructure } from "../_data/data-registration-form-structure";

const HomeRegistrationForm = () => {

  return (
    <div>
      <div className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-10 my-auto">
        <div className="mb-5">
          <h3 className="text-xl md:text-2xl font-semibold">
            রেজিস্ট্রেশন করুন
          </h3>
          <p>ফর্মটি পূরণ করুন রেজিস্ট্রেশন করতে</p>
        </div>
        <FormX structure={DataRegistrationFormStructure} />
      </div>
    </div>
  );
};

export default HomeRegistrationForm;
