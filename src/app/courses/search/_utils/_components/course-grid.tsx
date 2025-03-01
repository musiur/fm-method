import { DataCourses } from "../_data/data-courses";
import { TypeCourseCard } from "../_types/type-schema-course-card";
import CourseCard from "./course-card";

export default function CourseGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DataCourses.map((course: TypeCourseCard) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
