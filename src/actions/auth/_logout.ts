"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function actionLogout() {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");

  redirect("/login");
}
