import { Card } from ".";
import { TypeActionResponse } from "@/lib/types/action-response";
import { TypeGetBooksByTags } from "@/components/pages/home/type-get-books-by-tags";
import { actionGetUserPurchasedCourses } from "@/actions/courses/get-user-purchased-courses";

export const CoursePage = async () => {
  const courseData: TypeActionResponse<TypeGetBooksByTags[]> =
    await actionGetUserPurchasedCourses();

  if (!courseData?.success) {
    return <div>No course found!</div>;
  }

  const list = courseData?.data?.map((course: TypeGetBooksByTags) => {
    return <Card key={course.id} course={course} purchased={true} />;
  });

  return (
    <div className="container space-y-8 py-8">
      <h2 className="text-lg md:text-xl font-semibold leading-tight">Course list</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {list}
      </div>
    </div>
  );
};