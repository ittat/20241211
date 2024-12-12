"use client";
import LanguageSwitcher from "../LanguageSwitcher";
import { useState } from "react";
import { cn } from "@/app/utils";
import Link from "next/link";

export const PhoneMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className="p-[10px] block hide-desktop cursor-pointer"
        onClick={toggleMenu}
      >
        <svg className=" block w-[20px]" viewBox="0 0 16 16">
          {menuOpen ? (
            <path d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z"></path>
          ) : (
            <path d="M1 4h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 8H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
          )}
        </svg>
      </button>

      <div
        className={cn(
          "hide-desktop absolute w-full top-[59px]  bg-white border-t-2  transition-all duration-300 ease-in-out",
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-[10px] [&_a]:p-[10px] [&_a]:text-[15px] [&_a]:font-medium">
          <Link href="/tools/pricing">Pricing</Link>
          <Link href="/tools/chrome-extension">Chrome extension</Link>
          <Link href="/tools/use-cases">Use cases</Link>
          <div className="p-0 sm:px-2">
            <LanguageSwitcher />
          </div>
          <Link href="/tools/auth/sign-in">Get started →</Link>
        </div>
      </div>
    </>
  );
};
