import { Carousel } from "@/components/molecules";
import { DataCourses } from "@/components/pages/courses/search/data-courses";
import { TypeCard } from "@/components/pages/courses/search/type-schema-card";
import { Card } from "@/components/pages/courses/search/card";

const getCourses = async () => {
  return DataCourses;
};

export const NewEnglishCourses = async () => {
  const courseData = await getCourses();

  const list = courseData.map((course: TypeCard) => {
    return <Card key={course.id} course={course} />;
  });

  return (
    <div className="section">
      <div className="container space-y-8">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p>চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            NEW ENGLISH COURSES
          </h2>
        </div>
        <Carousel list={list} title="home-new-english-courses-list" col={4} />
      </div>
    </div>
  );
};