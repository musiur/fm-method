"use server";

import CONFIGS from "@/configs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const AUTH_REFRESHED_TOKEN = async (path: string) => {
    try {
        const refreshToken = (await cookies()).get("refresh_token")?.value;

        if (!refreshToken) {
            return {
                success: false,
                message: "Bad request!"
            }
        }
        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                refresh_token: refreshToken
            })
        });
        const result = await response.json();

        const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors)?.join(", ") : null;

        if(errors){
            return {
                success: false,
                message: errors || "Something went wrong",
            }
        }

        redirect(path)
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }
};

