"use client";

import React from "react";
import { AlignJustify, BadgeHelp } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

interface HeaderProps {
  toggleNavigation: () => void;
  openNavigation: boolean;
}

const Header: React.FC<HeaderProps> = ({
  toggleNavigation,
  openNavigation,
}) => {
  return (
    <div className="flex p-5 border-b border-lighmodeborder dark:border-borderlinecolor items-center justify-between md:justify-end">
      <button id="menuButton" className="md:hidden" onClick={toggleNavigation}>
        <AlignJustify
          size={20}
          className={`${openNavigation ? "hidden" : "flex"}`}
        />
      </button>
      <Link href="/">
        <h1 className="md:hidden flex items-center gap-1.5 font-semibold text-sm">
          {" "}
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="size-8"
          />{" "}
          Kenoty Scanner
        </h1>
      </Link>

      <ThemeToggle />
      <Link
        href="/help"
        rel="noopener noreferrer"
        aria-label="WhatsApp Profile"
        className="mr-5 hidden md:block"
      >
        <BadgeHelp
          size={22}
          strokeWidth={1.3}
          className="text-secondary dark:text-white"
          // color="#ffffff"
        />
      </Link>
      <UserButton />
    </div>
  );
};

export default Header;
