import { PageHeader } from "@/components/molecules";
import { Page as GalleryPage } from "@/components/pages/gallery";
import { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <PageHeader title="গ্যালারী" description="আমাদের ছবি ও ভিডিও সংগ্রহ" />
      <GalleryPage />
    </Fragment>
  );
};

export default Page;
