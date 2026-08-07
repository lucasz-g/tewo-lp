"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "../i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const router = useRouter();

  return (
    <label className="language-switcher">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        aria-label={label}
        onChange={(event) => {
          document.cookie = `tewo-locale=${event.target.value}; path=/; max-age=31536000; samesite=lax`;
          router.refresh();
        }}
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
    </label>
  );
}
