import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { type NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    const searchParams = req.nextUrl.searchParams;
    const videoId = searchParams.get('videoId')

    const { data, error } = await tryCatch(
        fetch(`https://dev.vdocipher.com/api/videos/${videoId}/otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": `Apisecret ${CONFIGS.VDOCIPHER_API_SECRET}`
            },
            body: JSON.stringify({}),
        })
    );

    if (error) {
        return Response.json({ success: false, message: "Failed to get credentials" })
    }

    if (!data) {
        return Response.json({ success: false, message: "No data received" });
    }

    const result = await data?.json();

    return Response.json({ success: true, message: "Credentials got successfully!", ...result });
}