
import { Fragment } from "react";
import HomeHero from "./_utils/_components/home-hero";
import HomeCourseList from "./_utils/_components/home-course-list";
import HomeAbout from "./_utils/_components/home-about";
import HomeOnlineCourses from "./_utils/_components/home-online-courses";
import HomeNewEnglishCourses from "./_utils/_components/home-new-english-courses";
import HomeTestimonials from "./_utils/_components/home-testimonials";
import HomeBannerSuccess from "./_utils/_components/home-banner-success";
 
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