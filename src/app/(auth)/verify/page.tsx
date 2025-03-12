import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import VerificationForm from "./form";


const VerifyAccountPage = () => {
  return (
    <Fragment>
      <PageHeader title="একাউন্ট ভেরিফিকেশান" />
      <VerificationForm />
    </Fragment>
  );
};

export default VerifyAccountPage;
