import { AUTH_REGISTER } from "@/api/auth/post-register";
import { FormX__TYPE_Structure } from "@/components/form-x/form-x";

export const DataRegistrationFormStructure: FormX__TYPE_Structure = {
  fields: [
    {
      id: 1,
      type: "text",
      name: "name",
      label: "সম্পূর্ণ নাম",
      defaultValue: "",
    },
    {
      id: 2,
      type: "text",
      name: "email",
      label: "ইমেইল এড্রেস",
      placeholder: "e.g example@domain.abc",
      defaultValue: "",
    },
    {
      id: 3,
      type: "text",
      name: "phone",
      label: "ফোন নম্বর",
      placeholder: "e.g 01712345678",
      defaultValue: "",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      label: "পাসওয়ার্ড",
      defaultValue: "",
    },
    {
      id: 5,
      type: "password",
      name: "password_confirmation",
      label: "কনফার্ম পাসওয়ার্ড",
      defaultValue: "",
    },
  ],
  submission: {
    toast: true,
    submitHandler: async (data) => {
      const result = await AUTH_REGISTER(data);
      if (result.success) {
        localStorage.setItem("registered_email", data.email);
        window.location.href = "/verify";
      }
      return result;
    },
    buttonText: "রেজিস্ট্রেশন করুন",
    buttonClassName: "w-full",
  },
};
