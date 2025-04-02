import { Fragment } from "react";
import { PageHeader } from "@/components/molecules";
import { Details } from "@/components/pages/events";

const EventPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <Fragment>
      <PageHeader title={slug} />
      <Details />
    </Fragment>
  );
};

export default EventPage;
