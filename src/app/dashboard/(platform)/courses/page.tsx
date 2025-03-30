import { Card } from "@/components/pages/courses"
import { TypeActionResponse } from "@/lib/types/action-response";
import { GET_COURSE_BY_TAG } from "@/api/courses/get-courses-by-tag";
import { TypeGetBooksByTags } from "@/components/pages/home/type-get-books-by-tags";

const CoursePage = async () => {
  const courseData: TypeActionResponse<TypeGetBooksByTags[]> = await GET_COURSE_BY_TAG("featured");

  if (!courseData?.success) {
    return <div>No course found!</div>;
  }

  const list = courseData?.data?.map((course: TypeGetBooksByTags) => {
    return <Card key={course.id} course={course} purchased={true} />;
  });

  return (
    <div className="container space-y-8 py-8">
      <h2 className="text-lg md:text-xl font-semibold leading-tight">
        Course list
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {list}
      </div>
    </div>
  );
};

export default CoursePage;
