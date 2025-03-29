import { Fragment } from "react";
import { DetailsHero, DetailsTabs } from "@/components/pages/courses";
import { NewEnglishCourses } from "@/components/pages/home";

const CourseDetailsPage = () => {
  return (
    <Fragment>
      <DetailsHero />
      <DetailsTabs />
      <NewEnglishCourses />
    </Fragment>
  );
};

export default CourseDetailsPage;
