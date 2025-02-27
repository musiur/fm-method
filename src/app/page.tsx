
import { Fragment } from "react";
import HomeHero from "./_utils/home-hero";
import HomeCourseList from "./_utils/home-course-list";
import HomeAbout from "./_utils/home-about";
import HomeOnlineCourses from "./_utils/home-online-courses";
import HomeNewEnglishCourses from "./_utils/home-new-english-courses";
import HomeTestimonials from "./_utils/home-testimonials";
import HomeBannerSuccess from "./_utils/home-banner-success";
 
const Page = () => {
  return (
    <Fragment>
      <HomeHero />
      <HomeCourseList />
      <HomeAbout />
      <HomeOnlineCourses />
      <HomeNewEnglishCourses />
      <HomeTestimonials />
      <HomeBannerSuccess />
    </Fragment>
  );
}

export default Page;