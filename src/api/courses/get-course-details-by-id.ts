"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { TypeActionResponse } from "@/lib/types/action-response";

export const GET_COURSE_DETAILS_BY_ID = async <Data,>(id: string): Promise<TypeActionResponse<Data>> => {

    const { data, error } = await tryCatch(fetch(`${CONFIGS.BACKEND_BASE_URL}/api/course/details/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }));

    if (error) {
        return {
            success: false,
            message: "Failed to fetch courses"
        }
    }

    const result: TypeActionResponse<Data> = await data.json();

    return result;
}
