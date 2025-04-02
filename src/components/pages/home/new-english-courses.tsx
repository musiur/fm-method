import { Carousel } from "@/components/molecules";
import { TypeGetBooksByTags } from "./type-get-books-by-tags";
import { Card } from "@/components/pages/search";
import { TypeActionResponse } from "@/lib/types/action-response";
import { GET_COURSE_BY_TAG } from "@/api/courses/get-courses-by-tag";

export const NewEnglishCourses = async () => {
  const courseData: TypeActionResponse<TypeGetBooksByTags[]> = await GET_COURSE_BY_TAG("featured");

  if (!courseData?.success) {
    return <div>No course found!</div>;
  }

  const list = courseData?.data?.map((course: TypeGetBooksByTags) => {
    return <Card key={course.id} course={course} />;
  });

  return (
    <div className="section">
      <div className="container space-y-8">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p>চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">NEW ENGLISH COURSES</h2>
        </div>
        {list ? <Carousel list={list} title="home-new-english-courses-list" col={4} /> : null}
      </div>
    </div>
  );
};
