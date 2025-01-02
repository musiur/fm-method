import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import ForgetPasswordForm from "./form";


const ForgetPasswordPage = () => {
  return (
    <Fragment>
      <PageHeader title="পাসওয়ার্ড রিকভার করুন" />
      <ForgetPasswordForm />
    </Fragment>
  );
};

export default ForgetPasswordPage;
