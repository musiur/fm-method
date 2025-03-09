import PageHeader from "@/components/molecules/page-header/page-header";
import { Fragment } from "react";
import EventListContainer from "./_partials/_components/event-list-container";

const EventsPage = () => {
  return (
    <Fragment>
      <PageHeader title="ইভেন্ট" />
      <EventListContainer />
    </Fragment>
  );
};

export default EventsPage;
