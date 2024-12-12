import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";


export const PCMenu = () => {
    return (
        <div className="flex justify-end hide-mobile ">
        <div className="sc-ba75ad55-4 gdFJbn  flex items-center [&_a]:p-[10px] [&_a]:text-[15px] [&_a]:font-medium">
          <Link className="hover:underline" href="/tools/pricing">
            Pricing
          </Link>
          <Link className="hover:underline" href="/tools/chrome-extension">
            Chrome extension
          </Link>
          <Link className="hover:underline" href="/tools/use-cases">
            Use cases
          </Link>
          <LanguageSwitcher />
          <Link className="hover:underline" href="/tools/auth/sign-in">
            Get started →
          </Link>
        </div>
      </div>
    );
};