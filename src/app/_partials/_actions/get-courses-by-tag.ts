"use server";

import CONFIGS from "@/configs";

export const GET_COURSE_BY_TAG = async (tag: string) => {
    try {
        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/courses?tags=${tag}`)

        const result = await response.json();

        return result;
    } catch (error) {
        console.log("[GET_COURSES_BY_TAG]", error);
        return {
            success: false,
            message: "Failed to fetch courses"
        }

    }
}
