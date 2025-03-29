import { DataCourses } from "./data-courses";
import { TypeCard } from "./type-schema-card";
import { Card } from "./card";

export default function CourseGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DataCourses.map((course: TypeCard) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}
