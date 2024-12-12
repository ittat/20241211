"use client";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { useIntl } from "react-intl";

export const PCMenu = () => {
  const intl = useIntl();
  return (
    <div className="flex justify-end hide-mobile ">
      <div className="flex items-center [&_a]:p-[10px] [&_a]:text-[15px] [&_a]:font-medium">
        <Link className="hover:underline" href="/tools/pricing">
          {intl.formatMessage({ id: "Pricing" })}
        </Link>
        <Link className="hover:underline" href="/tools/chrome-extension">
          {intl.formatMessage({ id: "Chrome extension" })}
        </Link>
        <Link className="hover:underline" href="/tools/use-cases">
          {intl.formatMessage({ id: "Use cases" })}
        </Link>
        <LanguageSwitcher />
        <Link className="hover:underline" href="/tools/auth/sign-in">
          {intl.formatMessage({ id: "Get started →" })}
        </Link>
      </div>
    </div>
  );
};
