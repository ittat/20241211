import LanguageSwitcher from "../LanguageSwitcher";


export const PCMenu = () => {
    return (
        <div className="flex justify-end hide-mobile ">
        <div className="sc-ba75ad55-4 gdFJbn  flex items-center [&_a]:p-[10px] [&_a]:text-[15px] [&_a]:font-medium">
          <a className="hover:underline" href="/tools/pricing">
            Pricing
          </a>
          <a className="hover:underline" href="/tools/chrome-extension">
            Chrome extension
          </a>
          <a className="hover:underline" href="/tools/use-cases">
            Use cases
          </a>
          <LanguageSwitcher />
          <a className="hover:underline" href="/tools/auth/sign-in">
            Get started →
          </a>
        </div>
      </div>
    );
};