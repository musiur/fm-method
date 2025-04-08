"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { TypeActionResponse } from "@/lib/types/action-response";
import { cookies } from "next/headers";

export const actionGetUserPurchasedCourses = async <Data>(): Promise<TypeActionResponse<Data>> => {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized!",
    };
  }

  console.log(token);
  const { data, error } = await tryCatch(
    fetch(`${CONFIGS.BACKEND_BASE_URL}/api/course/list`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token}`,
      },
    })
  );

  if (error) {
    return {
      success: false,
      message: "Failed to fetch courses",
    };
  }

  const result: TypeActionResponse<Data> = await data.json();

  return result;
};
