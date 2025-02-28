import { Fragment } from "react";
import CourseDetailsHero from "./_utils/course-details-hero";
import CourseDetailsTabs from "./_utils/course-details-tabs";
import HomeNewEnglishCourses from "../../_utils/_components/home-new-english-courses";

const CourseDetailsPage = () => {
  return <Fragment>
    <CourseDetailsHero />
    <CourseDetailsTabs />
    <HomeNewEnglishCourses />
  </Fragment>;
};

export default CourseDetailsPage;
