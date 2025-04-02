import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import ResetPasswordForm from "@/components/pages/(auth)/reset-password/form";

const ForgetPasswordPage = () => {
  return (
    <Fragment>
      <PageHeader title="পাসওয়ার্ড পরিবর্তন করুন" />
      <ResetPasswordForm />
    </Fragment>
  );
};

export default ForgetPasswordPage;
