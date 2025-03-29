import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataCourses } from "@/components/pages/courses/search/data-courses";
import { TypeCard, Card } from "@/components/pages/courses";

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

export const OnlineCourses = async () => {
  const courseData = await getCourses();

  const list = courseData.map((course: TypeCard) => {
    return <Card key={course.id} course={course} />;
  });

  return (
    <div className="section">
      <div className="container space-y-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            Online Courses
          </h2>

          {/* Desktop Category List */}
          <div className="hidden md:flex items-center gap-6">
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
        {/* <Carousel list={list} title="home-new-english-courses-list" col={4} grid={true} /> */}
        <div className="flex justify-center pt-8">
          <Link href="/courses/search?category=online-courses">
            <Button variant="outline">View All Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
