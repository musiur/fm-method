"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputX from "@/components/form-x/input-x";
import { ChangePassword } from "@/api/auth/post-change-password";

const FormSchema = z
  .object({
    old_password: z.string(),
    new_password: z.string(),
    new_password_confirmation: z.string(),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    message: "Passwords do not match",
    path: ["new_password_confirmation"],
  });

export function ChangePasswordForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await ChangePassword(data);
    
    if (result.success) {
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-md space-y-6"
      >
        <InputX name="old_password" type="password" label="Old Password" />
        <InputX name="new_password" type="password" label="New Password" />
        <InputX
          name="new_password_confirmation"
          type="password"
          label="Confirm Password"
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting
            ? "Changing Password..."
            : "Change Password"}
        </Button>
      </form>
    </Form>
  );
}
