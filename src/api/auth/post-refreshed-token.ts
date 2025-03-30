"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const AUTH_REFRESHED_TOKEN = async (path: string) => {

    const refreshToken = (await cookies()).get("refresh_token")?.value;

    if (!refreshToken) {
        return {
            success: false,
            message: "Bad request!"
        }
    }

    const { data, error } = await tryCatch(fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            refresh_token: refreshToken
        })
    }));

    if (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }

    const result = await data.json();

    const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors)?.join(", ") : null;

    if (errors) {
        return {
            success: false,
            message: errors || "Something went wrong",
        }
    }

    redirect(path)
};

