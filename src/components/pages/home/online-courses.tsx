import clsx from "clsx";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/pages/courses";
import { TypeGetBooksByTags } from "./type-get-books-by-tags";
import { TypeActionResponse } from "@/lib/types/action-response";
import { GET_COURSE_BY_TAG } from "@/api/courses/get-courses-by-tag";

const categories = [
  { id: "all", label: "See All" },
  { id: "basic", label: "Basic" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "ielts", label: "IELTS" },
];

export const OnlineCourses = async () => {
  const courseData: TypeActionResponse<TypeGetBooksByTags[]> = await GET_COURSE_BY_TAG("featured");

  if (!courseData?.success) {
    return <div>No course found!</div>;
  }

  const list = courseData?.data?.map((course: TypeGetBooksByTags) => {
    return <Card key={course.id} course={course} />;
  });

  const showMore = courseData?.data?.length && courseData?.data?.length < 5;

  return (
    <div className="section">
      <div className="container space-y-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            Online Courses
          </h2>

          {/* Desktop Category List */}
          <div className={clsx("hidden items-center gap-6", {
            "hidden": showMore,
            "md:flex": !showMore
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
          <div className={clsx("md:hidden", {
            "hidden": !showMore,
          })}>
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
        <div className={clsx("flex justify-center pt-8", {
          "hidden": showMore,
        })}>
          <Link href="/courses/search?category=online-courses">
            <Button variant="outline">View All Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
