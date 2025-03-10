import { Fragment } from "react";
import HomeHero from "./_partials/_components/home-hero";
import HomeCourseList from "./_partials/_components/home-course-list";
import HomeAbout from "./_partials/_components/home-about";
import HomeOnlineCourses from "./_partials/_components/home-online-courses";
import HomeNewEnglishCourses from "./_partials/_components/home-new-english-courses";
import HomeTestimonials from "./_partials/_components/home-testimonials";
import HomeBannerSuccess from "./_partials/_components/home-banner-success";
import { GET_BOOKS } from "./_partials/_actions/get-books";

const Page = async () => {
  const books = await GET_BOOKS();
  console.log("[BOOKS]", books);

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
};

export default Page;
