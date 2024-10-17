"use client";
import React, { useEffect } from "react";
import {
  CircleHelp,
  CircleUser,
  LayoutDashboard,
  MonitorCog,
  ScanSearch,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  openNavigation: boolean;
  toggleNavigation: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  openNavigation,
  toggleNavigation,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openNavigation && !(event.target as Element).closest(".side-nav")) {
        toggleNavigation();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openNavigation, toggleNavigation]);

  const handleClick = () => {
    if (openNavigation) {
      toggleNavigation();
    }
  };

  const isActive = (href: string) => {
    if (href === "/score" && pathname.startsWith("/score")) {
      return true;
    }

    if (href === "/review" && pathname.startsWith("/review")) {
      return true;
    }
    return pathname === href;
  };

  const navigationItems = [
    { href: "/home", icon: LayoutDashboard, text: "Overview" },
    { href: "/score", icon: MonitorCog, text: "Score my website" },
    { href: "/review", icon: ScanSearch, text: "Review my website" },
    { href: "/help", icon: CircleHelp, text: "Help center" },
  ];

  return (
    <div>
      <div
        className={`side-nav ${
          openNavigation ? "flex" : "hidden md:flex"
        } h-screen w-[16rem] md:w-full flex-col justify-between border-e border-lighmodeborder dark:border-borderlinecolor bg-white dark:bg-tertiary z-50`}
      >
        <div>
          <Link
            onClick={handleClick}
            href="/home"
            className="mt-2 w-[100%] place-content-center 
            text-secondary dark:text-white font-bold text-sm tracking-wider flex items-center gap-2 py-6 border-b border-lighmodeborder dark:border-borderlinecolor"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="size-10"
            />
            Kenoty Scanner
          </Link>

          <ul className="mt-4 space-y-3 px-4 py-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleClick}
                  className={`rounded-lg px-4 py-2.5 text-sm flex items-center gap-2
              font-medium ${
                isActive(item.href)
                  ? "bg-primary dark:text-white text-white"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:text-gray-700"
              }`}
                >
                  <item.icon size={18} /> {item.text}
                </Link>
              </li>
            ))}

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:text-gray-700">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Settings size={18} /> Account
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action="#">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-lighmodeborder dark:border-borderlinecolor">
          <a
            href="#"
            className="flex items-center gap-2 bg-white dark:bg-tertiary p-4 dark:hover:bg-secondary"
          >
            <CircleUser size={40} className="text-tertiary dark:text-white" />

            <div>
              <p className="text-sm dark:text-gray-200">
                <strong className="block font-medium">Abdulrazaq Salihu</strong>

                <span className="dark:text-gray-400">abdulrazaq@gmail.com</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
