"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";
import { cookies } from "next/headers";

export const actionLogin = async (payload: { email: string; password: string }) => {
  const { data, error } = await tryCatch(
    fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
  );

  if (error) {
    return {
      success: false,
      message: "Failed to login",
    };
  }
  const result = await data.json();

  const refreshToken = result?.refresh_token;
  const accessToken = result?.access_token;

  if (refreshToken && accessToken) {
    (await cookies()).set("refresh_token", refreshToken);
    (await cookies()).set("access_token", accessToken);
  } else {
    return {
      success: false,
      message: "Unauthorized request",
      ...result,
    };
  }

  const errors =
    result?.errors && Object.keys(result?.errors)?.length
      ? Object.values(result?.errors || result?.error)?.join(", ")
      : null;

  const fromPathname = (await cookies()).get("from_pathname")?.value;

  return {
    success: errors ? false : true,
    message: errors ? errors : "Login successful",
    fromPathname,
    ...result,
  };
};
