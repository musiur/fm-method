import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import EventDetails from "./_partials/_components/event-details";

const EventPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <Fragment>
      <PageHeader title={slug} />
      <EventDetails />
    </Fragment>
  );
};

export default EventPage;
