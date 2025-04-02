"use server";

import CONFIGS from "@/configs";
import { tryCatch } from "@/lib/error-handlers/try-catch";

export const actionVideoCredentials = async (videoId: string) => {
  const { data, error } = await tryCatch(
    fetch(`https://dev.vdocipher.com/api/videos/${videoId}/otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": `Apisecret ${CONFIGS.VDOCIPHER_API_SECRET}`
      },
      body: JSON.stringify({}),
    })
  );

  if (error) {
    return {
      success: false,
      message: "Failed to get credentials",
    };
  }

  const result = await data.json();

  const errors =
    result?.errors && Object.keys(result?.errors)?.length
      ? Object.values(result?.errors || result?.error)?.join(", ")
      : null;

  return {
    success: errors ? false : true,
    message: errors ? errors : "Credentials got successfully!",
    data: result,
  };
};
