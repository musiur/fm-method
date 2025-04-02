import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import LoginForm from "@/components/pages/(auth)/login/form";

const LoginPage = () => {
  return (
    <Fragment>
      <PageHeader title="লগ-ইন করুন" />
      <LoginForm />
    </Fragment>
  );
};

export default LoginPage;
