import PageHeader from "@/components/molecules/page-header/page-header";
import ContactCards from "./_utils/_components/contact-cards";
import { Fragment } from "react";

const ContactPage = () => {
  return (
    <Fragment>
      <PageHeader title="যোগাযোগ করুন" />
      <ContactCards />
    </Fragment>
  );
};

export default ContactPage;
