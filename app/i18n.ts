import { cookies } from "next/headers";

export const locales = ["en", "pt", "es", "fr"] as const;
export type Locale = (typeof locales)[number];

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get("tewo-locale")?.value;
  return locales.includes(value as Locale) ? (value as Locale) : "en";
}
