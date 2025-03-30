
import { Card } from "./card";
import { TypeActionResponse } from "@/lib/types/action-response";
import { GET_COURSE_BY_TAG } from "@/api/courses/get-courses-by-tag";
import { TypeGetBooksByTags } from "@/components/pages/home/type-get-books-by-tags";

export default async function CourseGrid() {
  const courseData: TypeActionResponse<TypeGetBooksByTags[]> = await GET_COURSE_BY_TAG("featured");

  if (!courseData?.success) {
    return <div>No course found!</div>;
  }

  const list = courseData?.data?.map((course: TypeGetBooksByTags) => {
    return <Card key={course.id} course={course} />;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list}
    </div>
  );
}
