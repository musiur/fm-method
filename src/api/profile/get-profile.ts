"use server";

import CONFIGS from "@/configs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { _LOGOUT } from "@/api/auth/_logout";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { AUTH_REFRESHED_TOKEN } from "@/api/auth/post-refreshed-token";

export async function GET_PROFILE() {
    const accessToken = (await cookies()).get("access_token")?.value;

    if (!accessToken) {
        await _LOGOUT();
        redirect("/login")
    }
    const { data, error } = await tryCatch(fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/me`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `bearer ${accessToken}`
        }
    }))

    if (data?.status && data?.status === 401) {
        await AUTH_REFRESHED_TOKEN("/dashboard/profile");
    }

    if (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }

    const result = await data.json();

    const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors)?.join(", ") : null;

    return {
        success: errors ? false : true,
        message: errors ? errors : "User registered successfully",
        ...result
    };
}

