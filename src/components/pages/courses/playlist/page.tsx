import { TypeActionResponse } from "@/lib/types/action-response";
import { Player, Playlist } from ".";
import { TypeDetails } from "../[slug]/type-details";
import { actionGetCourseDetailsByID } from "@/actions/courses/get-course-details-by-id";
import { actionVideoCredentials } from "@/actions/vdocipher/post-video-credentials";

export const PlaylistPage = async ({ searchParams }: { searchParams: Promise<{ id: string }> }) => {
    const { id} = await searchParams;

    if (!id) {
        return <div>No course found!</div>;
    }

    const result: TypeActionResponse<TypeDetails> = await actionGetCourseDetailsByID(id);

    if (!result?.success) {
        return <div>No course found!</div>;
    }

    const video_id = result?.data?.video_id || ""
    const videoCredentials: TypeActionResponse<{ otp: string, playbackInfo: string }> = await actionVideoCredentials(video_id)

    return <div className="section container">
        <div className="flex flex-col md:flex-row gap-10">
            <Player
                className="w-full min-w-[60%]"
                otp={videoCredentials?.data?.otp || ""}
                playbackInfo={videoCredentials?.data?.playbackInfo || ""}
            />
            {!result?.data?.syllabus ? null : <Playlist {...({ ...result?.data?.syllabus, courseTitle: result?.data?.title })} />}
        </div>
    </div>;
};
