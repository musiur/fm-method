"use server";

import CONFIGS from "@/configs";

export const AUTH_REGISTER = async (data: { email: string, password: string, name: string, password_confirmation: string }) => {
    try {
        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data),
        });
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
            message: "Something went wrong",
            error: error
        }
    }
};

