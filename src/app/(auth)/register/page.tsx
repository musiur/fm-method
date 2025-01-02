import PageHeader from "@/components/molecules/page-header/page-header";
import RegisterForm from "./form";
import { Fragment } from "react";


const RegisterPage = () => {
  return (
    <Fragment>
      <PageHeader title="রেজিস্ট্রেশন করুন" />
      <RegisterForm />
    </Fragment>
  );
};

export default RegisterPage;
