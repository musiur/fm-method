"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { TypeActionResponse } from "@/lib/types/action-response";

export const GET_BOOKS = async <Data,>(): Promise<TypeActionResponse<Data>> => {
    const { data, error } = await tryCatch(fetch(`${CONFIGS.BACKEND_BASE_URL}/api/book/list?limit=8`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }))

    if (error) {
        return {
            success: false,
            message: "Failed to fetch books"
        }
    }

    const result: TypeActionResponse<Data> = await data.json();

    return result;
}
