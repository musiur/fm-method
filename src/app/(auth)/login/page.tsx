import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import LoginForm from "./form";


const LoginPage = () => {
  return (
    <Fragment>
      <PageHeader title="লগ-ইন করুন" />
      <LoginForm />
    </Fragment>
  );
};

export default LoginPage;
