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
import { GET_COURSE_BY_TAG } from "@/api/courses/get-courses-by-tag";
// import { TypeActionResponse } from "@/lib/types/action-response";
// import { TypeGetBooksByTags } from "./_partials/_types/type-get-books-by-tags";

const Page = async () => {
  const refreshToken = (await cookies()).get("refresh_token")?.value;
  const accessToken = (await cookies()).get("access_token")?.value;
  const loggedIn = accessToken && refreshToken ? true : false;

  // const result: TypeActionResponse<TypeGetBooksByTags> = 
  await GET_COURSE_BY_TAG("featured");

  
  
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
