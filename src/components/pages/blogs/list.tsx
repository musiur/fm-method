import { DataList } from "./data-list";
import { Card } from "./card";

const List = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {DataList.map((blog) => (
        <Card key={blog.slug} {...blog} />
      ))}
    </div>
  );
};
export default List;
