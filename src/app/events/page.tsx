import { Fragment } from "react";
import { ListContainer } from "@/components/pages/events";
import { PageHeader } from "@/components/molecules";

const EventsPage = () => {
  return (
    <Fragment>
      <PageHeader title="ইভেন্ট" />
      <ListContainer />
    </Fragment>
  );
};

export default EventsPage;
