import { Fragment } from "react";
import CourseDetailsHero from "./_partials/course-details-hero";
import CourseDetailsTabs from "./_partials/course-details-tabs";
import HomeNewEnglishCourses from "../../_partials/_components/home-new-english-courses";

const CourseDetailsPage = () => {
  return <Fragment>
    <CourseDetailsHero />
    <CourseDetailsTabs />
    <HomeNewEnglishCourses />
  </Fragment>;
};

export default CourseDetailsPage;
