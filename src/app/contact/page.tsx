import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import { Cards, ContactForm } from "@/components/pages/contact";

const ContactPage = () => {
  return (
    <Fragment>
      <PageHeader title="যোগাযোগ করুন" />
      <ContactForm />
      <Cards />
    </Fragment>
  );
};

export default ContactPage;
