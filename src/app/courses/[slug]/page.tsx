import { Fragment } from "react";
import { NewEnglishCourses } from "@/components/pages/home";
import { GET_COURSE_DETAILS_BY_ID } from "@/api/courses/get-course-details-by-id";
import { TypeActionResponse } from "@/lib/types/action-response";
import { DetailsHero, DetailsTabs, TypeDetails } from "@/components/pages/courses";


const CourseDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return <div>No course found!</div>
  }

  const result: TypeActionResponse<TypeDetails> = await GET_COURSE_DETAILS_BY_ID(slug);

  if (!result?.success) {
    return <div>No course found!</div>;
  }

  return (
    <Fragment>
      <DetailsHero
        title={result?.data?.title || "N/A"}
        rating={result?.data?.engagement?.average_rating?.toString() || "0"}
        description={result?.data?.description || "N/A"}
        otp={result?.data?.otp || "N/A"}
        playbackInfo={result?.data?.playbackInfo || "N/A"}
      />
      <DetailsTabs {...result?.data as TypeDetails} />
      <NewEnglishCourses />
    </Fragment>
  );
};

export default CourseDetailsPage;
