import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import RegisterForm from "@/components/pages/(auth)/register/form";


const RegisterPage = () => {
  return (
    <Fragment>
      <PageHeader title="রেজিস্ট্রেশন করুন" />
      <RegisterForm />
    </Fragment>
  );
};

export default RegisterPage;
