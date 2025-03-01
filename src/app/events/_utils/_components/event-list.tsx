import { DataEventList } from "../_data/data-blog-list";
import EventCard from "./event-card";

const EventList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {DataEventList.map((event) => (
        <EventCard key={event.slug} {...event} />
      ))}
    </div>
  );
};
export default EventList;
