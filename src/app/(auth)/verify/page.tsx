import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import VerificationForm from "@/components/pages/(auth)/verify/form";


const VerifyAccountPage = () => {
  return (
    <Fragment>
      <PageHeader title="একাউন্ট ভেরিফিকেশান" />
      <VerificationForm />
    </Fragment>
  );
};

export default VerifyAccountPage;
