"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { cookies } from "next/headers";

type TypeCreateOrderPayload = {
    student_id: string;
    item_type: string;
    book_id: string;
    course_id: string;
    product_profile: string;
    product_category: string;
    product_name: string;
    total_amount: number;
    discount: number;
    cus_name: string;
    cus_email: string;
    cus_phone: string;
    cus_add1: string;
    cus_city: string;
    cus_country: string;
    shipping_method: string;
}

export const actionPostCreateOrder = async (payload: TypeCreateOrderPayload) => {

    const token = (await cookies()).get("token")?.value;

    if (!token) {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const { data, error } = await tryCatch(
        fetch(`${CONFIGS.BACKEND_BASE_URL}/api/pay`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Authorization": `Apisecret ${CONFIGS.VDOCIPHER_API_SECRET}`
            },
            body: JSON.stringify(payload),
        })
    );

    if (error) {
        return {
            success: false,
            message: "Failed to create order",
        };
    }

    const result = await data.json();

    const errors =
        result?.errors && Object.keys(result?.errors)?.length
            ? Object.values(result?.errors || result?.error)?.join(", ")
            : null;

    return {
        success: errors ? false : true,
        message: errors ? errors : "Order created successfully! we are redirecting you to payment page...",
        data: result,
    };
};
