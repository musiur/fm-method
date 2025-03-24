import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataCourses } from "@/app/courses/search/_partials/_data/data-courses";
import { TypeCourseCard } from "@/app/courses/search/_partials/_types/type-schema-course-card";
import CourseCard from "@/app/courses/search/_partials/_components/course-card";
import clsx from "clsx";

const categories = [
  { id: "all", label: "See All" },
  { id: "basic", label: "Basic" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "ielts", label: "IELTS" },
];

const getCourses = async () => {
  return DataCourses;
};

const CoursePage = async () => {
  const courseData = await getCourses();
  const purchased = true;

  const list = courseData.map((course: TypeCourseCard) => {
    return <CourseCard key={course.id} course={course} purchased={purchased} />;
  });

  return (
    <div>
      <div className="container space-y-8 py-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg md:text-xl font-semibold leading-tight">
            Course list
          </h2>

          {/* Desktop Category List */}
          <div className={clsx("hidden md:flex items-center gap-6", {
            "md:hidden": purchased,
          })}>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className="text-gray-600 hover:text-primary hover:bg-primary/5"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Mobile Category Select */}
          <div className="md:hidden">
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
