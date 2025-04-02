"use client";

import { z } from "zod";
import { Carousel } from "@/components/molecules";
import Slide from "./slide";
import SlideImage from "./caute.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";
import { VERIFY_ACCOUNT } from "@/api/auth/post-verify-account";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Slides = [
  {
    image: SlideImage,
    title: "একাউন্ট ভ্যারিফাই করুন",
    description: "একাউন্ট ভ্যারিফাই করুন এই পেজে একাউন্ট ভ্যারিফাই করুন।",
  },
  {
    image: SlideImage,
    title: "একাউন্ট ভ্যারিফাই করুন 2",
    description: "একাউন্ট ভ্যারিফাই করুন এই পেজে একাউন্ট ভ্যারিফাই করুন।",
  },
];

const VerifyFormSchema = z.object({
  code: z.string().min(6),
});

type TypeVerifyFormSchema = z.infer<typeof VerifyFormSchema>;

const VerificationForm = () => {
  const router = useRouter();
  const form = useForm<TypeVerifyFormSchema>({
    resolver: zodResolver(VerifyFormSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: TypeVerifyFormSchema) => {
    const persistedEmail = localStorage.getItem("registered_email");

    if (!persistedEmail) {
      router.push("/register");
      return;
    }

    const result = await VERIFY_ACCOUNT({
      email: persistedEmail,
      verification_code: data.code,
    });

    if (result?.success) {
      toast.success(result?.message);
      router.push("/login");
    } else {
      toast.error(result?.message);
    }
  };

  return (
    <div className="container section flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-[500px] w-full space-y-8">
        <div>
          <h3 className="text-2xl font-bold">একাউন্ট ভ্যারিফাই করুন</h3>
          <p className="text-sm text-gray-500">
            আপনার ইমেইলে প্রদত্ত কোডটি প্রবেশ করুন একাউন্ট ভ্যালিডেট করতে
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <InputOTP
                    maxLength={6}
                    value={field.value}
                    onChange={(value: string) => field.onChange(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator className="text-gray-300" />
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator className="text-gray-300" />
                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "ভ্যারিফাই করা হচ্ছে..." : "ভ্যারিফাই করুন"}
            </Button>
          </form>
        </Form>
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
          title="একাউন্ট ভ্যারিফাই করুন"
          col={1}
        />
      </div>
    </div>
  );
};

export default VerificationForm;
