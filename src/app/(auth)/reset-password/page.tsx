import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import ResetPasswordForm from "./form";


const ForgetPasswordPage = () => {
  return (
    <Fragment>
      <PageHeader title="পাসওয়ার্ড পরিবর্তন করুন" />
      <ResetPasswordForm />
    </Fragment>
  );
};

export default ForgetPasswordPage;
