import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import ForgetPasswordForm from "@/components/pages/(auth)/forget-password/form";

const ForgetPasswordPage = () => {
  return (
    <Fragment>
      <PageHeader title="পাসওয়ার্ড রিকভার করুন" />
      <ForgetPasswordForm />
    </Fragment>
  );
};

export default ForgetPasswordPage;
