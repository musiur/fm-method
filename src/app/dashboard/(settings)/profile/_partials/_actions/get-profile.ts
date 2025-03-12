"use server";

import { AUTH_LOGOUT } from "@/app/(auth)/_partials/_actions/auth-logout";
import { AUTH_REFRESHED_TOKEN } from "@/app/(auth)/_partials/_actions/auth-refreshed-token";
import CONFIGS from "@/configs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET_PROFILE() {
    try {
        const accessToken = (await cookies()).get("access_token")?.value;

        if (!accessToken) {
            await AUTH_LOGOUT();
            redirect("/login")
        }
        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/me`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `bearer ${accessToken}`
            }
        })

        if (response.status === 401) {
            await AUTH_REFRESHED_TOKEN("/dashboard/profile");
        }

        const result = await response.json();

        const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors)?.join(", ") : null;

        return {
            success: errors ? false : true,
            message: errors ? errors : "User registered successfully",
            ...result
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!",
            error
        }
    }
}

