import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { NextResponse, NextRequest } from "next/server"

export const GET = async (req: NextRequest, res: NextResponse) => {

    const videoId = req.nextUrl.searchParams.get("videoId");

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

    if(error){
        return NextResponse.json({ success: false, message: "Failed to get credentials" })
    }

    if(data?.status === 401){
        return NextResponse.json({ success: false, message: "Unauthorized" })
    }

    const result = await data?.json();

    return NextResponse.json({ success: true, message: "Credentials got successfully!", ...result })
}