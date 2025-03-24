"use client";
import InputX from "@/components/form-x/input-x";
import SubmitX from "@/components/form-x/submit-x";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaContactForm } from "../_schema/schema-contact-form";
import { ContactFormSchemaType } from "../_types/type-contact-form-schema";
import { toast } from "sonner";
const ContactForm = () => {
  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(SchemaContactForm),
    defaultValues: {
      name: "",
      email: "",
      serviceType: "প্রাসঙ্গিক",
      phone: "",
      message: "",
    },
  });
  const onSubmit = () => {
    toast.success("সাবমিট করা হয়েছে");
    form.reset();
  };
  return (
    <div className="container section">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[800px] mx-auto space-y-4 p-4 md:p-10 border rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputX name="name" label="নাম" placeholder="নাম" />
            <InputX name="email" label="ইমেইল" placeholder="ইমেইল" />
            <InputX
              name="serviceType"
              label="সেবার ধরন"
              placeholder="সেবার ধরন"
              options={[
                { label: "প্রাসঙ্গিক", value: "প্রাসঙ্গিক" },
                { label: "অপ্রাসঙ্গিক", value: "অপ্রাসঙ্গিক" },
              ]}
              type="select"
            />
            <InputX name="phone" label="ফোন" placeholder="ফোন" />
          </div>
          <InputX name="message" label="বার্তা" placeholder="বার্তা" />

          <SubmitX pending={form.formState.isSubmitting} text="সাবমিট করুন" />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
