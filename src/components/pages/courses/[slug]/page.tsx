import { Fragment } from "react";
import { NewEnglishCourses } from "@/components/pages/home";
import { actionGetCourseDetailsByID } from "@/actions/courses/get-course-details-by-id";
import { TypeActionResponse } from "@/lib/types/action-response";
import { DetailsHero, DetailsTabs, TypeDetails } from "@/components/pages/courses";
import { actionVideoCredentials } from "@/actions/vdocipher/post-video-credentials";

type TypeVideoCredentials = { otp: string, playbackInfo: string }

export const CourseDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) {
    return <div>No course found!</div>;
  }

  const result: TypeActionResponse<TypeDetails> = await actionGetCourseDetailsByID(slug);

  
  if (!result?.success) {
    return <div>No course found!</div>;
  }
  
  const video_id = result?.data?.video_id || "";
  const videoCredentials: TypeActionResponse<TypeVideoCredentials> = await actionVideoCredentials(video_id)

  return (
    <Fragment>
      <DetailsHero
        title={result?.data?.title || "N/A"}
        rating={result?.data?.engagement?.average_rating?.toString() || "0"}
        description={result?.data?.description || "N/A"}
        otp={videoCredentials?.data?.otp || "N/A"}
        playbackInfo={videoCredentials?.data?.playbackInfo || "N/A"}
      />
      <DetailsTabs {...(result?.data as TypeDetails)} />
      <NewEnglishCourses />
    </Fragment>
  );
};
