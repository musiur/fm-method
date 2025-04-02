import { DataList } from "./data-list";
import { Card } from "./card";

const EventList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {DataList.map((event) => (
        <Card key={event.slug} {...event} />
      ))}
    </div>
  );
};
export default EventList;
