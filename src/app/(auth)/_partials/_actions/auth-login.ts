"use server";

import CONFIGS from "@/configs";
import { cookies } from "next/headers";

export const AUTH_LOGIN = async (payload: { email: string, password: string }) => {
    try {
        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload),
        });
        const result = await response.json();

        const refreshToken = result?.refresh_token;
        const accessToken = result?.access_token;

        if (refreshToken && accessToken) {
            (await cookies()).set("refresh_token", refreshToken);
            (await cookies()).set("access_token", accessToken);
        }

        const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors)?.join(", ") : null;
        return {
            success: errors ? false : true,
            message: errors ? errors : "Login successful",
            ...result
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }
}
