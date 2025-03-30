import { Fragment } from "react";
import {
  About,
  BannerSuccess,
  BookList,
  CourseList,
  Hero,
  NewEnglishCourses,
  OnlineCourses,
  Testimonials,
} from "@/components/pages/home"
import { cookies } from "next/headers";

const Page = async () => {
  const refreshToken = (await cookies()).get("refresh_token")?.value;
  const accessToken = (await cookies()).get("access_token")?.value;
  const loggedIn = accessToken && refreshToken ? true : false;
  
  
  return (
    <Fragment>
      <Hero loggedIn={loggedIn} />
      <CourseList />
      <About />
      <OnlineCourses />
      <NewEnglishCourses />
      <BookList />
      <Testimonials />
      <BannerSuccess />
    </Fragment>
  );
};

export default Page;
