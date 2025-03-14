import PageHeader from "@/components/molecules/page-header/page-header";
import ContactCards from "./_partials/_components/contact-cards";
import { Fragment } from "react";
import ContactForm from "./_partials/_components/contact-form";

const ContactPage = () => {
  return (
    <Fragment>
      <PageHeader title="যোগাযোগ করুন" />
      <ContactForm />
      <ContactCards />
    </Fragment>
  );
};

export default ContactPage;
