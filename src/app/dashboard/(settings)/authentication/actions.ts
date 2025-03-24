"use server"

import CONFIGS from "@/configs";
import { cookies } from "next/headers";


type ChangePasswordType = {
    old_password: string;
    new_password: string;
    new_password_confirmation: string;
}
export const ChangePassword = async (data: ChangePasswordType) => {
    try {
        const token = (await cookies()).get("access_token")?.value;

        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/api/profile/change-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        if(response.status !== 200) {
            return {
                success: false,
                message: "Something went wrong",
            }
        }
        const result = await response.json();
        
        const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors || result?.error)?.join(", ") : null;
        
        const returnData = {
            success: errors ? false : true,
            message: errors ? errors : "Password changed successfully",
            ...result
        };
        
        return returnData;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }
}