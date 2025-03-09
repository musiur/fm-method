import PageHeader from "@/components/molecules/page-header/page-header";
import { default as GalleryContainer } from "./_partials/_components/gallery-page";
import { Fragment } from "react";

const GalleryPage = () => {
  return (
    <Fragment>
      <PageHeader title="গ্যালারী" description="আমাদের ছবি ও ভিডিও সংগ্রহ" />
      <GalleryContainer />
    </Fragment>
  );
};

export default GalleryPage;
