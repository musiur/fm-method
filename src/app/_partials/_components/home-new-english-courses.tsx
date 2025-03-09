import Carousel from "@/components/molecules/carousel";
import { DataCourses } from "@/app/courses/search/_partials/_data/data-courses";
import { TypeCourseCard } from "@/app/courses/search/_partials/_types/type-schema-course-card";
import CourseCard from "@/app/courses/search/_partials/_components/course-card";
const getCourses = async () => {
  return DataCourses;
};

const HomeNewEnglishCourses = async () => {
  const courseData = await getCourses();

  const list = courseData.map((course: TypeCourseCard) => {
    return <CourseCard key={course.id} course={course} />;
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

export default HomeNewEnglishCourses;
