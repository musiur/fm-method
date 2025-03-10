"use server";

import CONFIGS from "@/configs";

export const GET_BOOKS = async () => {
    try {
        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/api/book/list`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const result = await response.json();

        return result;
    } catch (error) {
        console.log("[GET_BOOKS]", error);
        return {
            success: false,
            message: "Failed to fetch books"
        }
    }
}
