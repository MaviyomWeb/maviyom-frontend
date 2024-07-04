"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();
  const router = useRouter();
  const currentPath = usePathname();

  const messages = useMessages();
  const t = useTranslations("Header");

  const languages = Object.keys(messages.Header.languageSwitcher.languages);

  const selectChange = (event) => {
    const nextLocale = event.target.value;
    const currentLocale = localeActive;

    const newPath = currentPath.replace(`/${currentLocale}`, `/${nextLocale}`);

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <label
      className={`border border-gray-400 rounded-full max-w-max ${
        isPending && "transition-opacity [&:disabled]:opacity-30"
      }`}
    >
      <p className="sr-only">{t("chooseLanguage")}</p>

      <select
        value={localeActive}
        onChange={selectChange}
        disabled={isPending}
        className="bg-transparent px-4 py-2   outline-none "
      >
        {languages.map((language) => {
          return (
            <option
              key={t(`languageSwitcher.languages.${language}.code`)}
              value={t(`languageSwitcher.languages.${language}.code`)}
            >
              {t(`languageSwitcher.languages.${language}.name`)}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default LocaleSwitcher;
