
import { Fragment } from "react";
import HomeHero from "./_partials/_components/home-hero";
import HomeCourseList from "./_partials/_components/home-course-list";
import HomeAbout from "./_partials/_components/home-about";
import HomeOnlineCourses from "./_partials/_components/home-online-courses";
import HomeNewEnglishCourses from "./_partials/_components/home-new-english-courses";
import HomeTestimonials from "./_partials/_components/home-testimonials";
import HomeBannerSuccess from "./_partials/_components/home-banner-success";
 
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