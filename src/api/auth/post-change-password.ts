"use server"

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { cookies } from "next/headers";


type ChangePasswordType = {
    old_password: string;
    new_password: string;
    new_password_confirmation: string;
}

export const ChangePassword = async (payload: ChangePasswordType) => {
    const token = (await cookies()).get("access_token")?.value;

    const { data, error } = await tryCatch(fetch(`${CONFIGS.BACKEND_BASE_URL}/api/profile/change-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload),
    }));

    if (data?.status && data?.status !== 200) {
        return {
            success: false,
            message: "Something went wrong",
        }
    }

    if (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }

    const result = await data.json();

    const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors || result?.error)?.join(", ") : null;

    const returnData = {
        success: errors ? false : true,
        message: errors ? errors : "Password changed successfully",
        ...result
    };

    return returnData;

}