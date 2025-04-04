"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";

export const actionRegister = async (payload: {
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
}) => {
  const { data, error } = await tryCatch(
    fetch(`${CONFIGS.BACKEND_BASE_URL}/api/auth/register`, {
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
      message: "Something went wrong",
      error: error,
    };
  }

  const result = await data.json();

  const errors =
    result?.errors && Object.keys(result?.errors)?.length
      ? Object.values(result?.errors)?.join(", ")
      : null;

  return {
    success: errors ? false : true,
    message: errors ? errors : "User registered successfully",
    ...result,
  };
};
