"use server";

import CONFIGS from "@/configs";

export const VERIFY_ACCOUNT = async (payload: { email: string, verification_code: string }) => {
    try {
        const response = await fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/verify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload),
        },
        );
        const result = await response.json();
        const errors = result?.errors && Object.keys(result?.errors)?.length ? Object.values(result?.errors)?.join(", ") : null;

        return {
            success: errors ? false : true,
            message: errors ? errors : "Account verified successfully",
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
