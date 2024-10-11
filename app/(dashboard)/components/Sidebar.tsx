import {
  ChartColumn,
  CircleHelp,
  CircleUser,
  LayoutDashboard,
  ScanSearch,
  Settings,
} from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e border-borderlinecolor bg-white dark:bg-tertiary">
        <div>
          <span
            className="mt-6 grid h-14 w-[100%] place-content-center dark:bg-primary
           bg-gray-100 text-gray-600 dark:text-white font-bold text-base tracking-wider"
          >
            Kenoty Scanner
          </span>

          <ul className="mt-6 space-y-3 px-4 py-6">
            <li>
              <Link
                href="/home"
                className="rounded-lg bg-borderlinecolor px-4 py-2.5 text-sm flex items-center gap-2
                font-medium dark:text-white text-gray-700"
              >
                <LayoutDashboard size={18} /> Overview
              </Link>
            </li>

            <li>
              <Link
                href="score"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <ChartColumn size={18} /> Score my website
              </Link>
            </li>

            <li>
              <Link
                href="review"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <ScanSearch size={18} /> Review my website
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <CircleHelp size={18} /> Help center
              </Link>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium flex items-center gap-2">
                    {" "}
                    <Settings size={18} /> Account{" "}
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

        <div className="sticky inset-x-0 bottom-0 border-t border-borderlinecolor">
          <a
            href="#"
            className="flex items-center gap-2 bg-white dark:bg-tertiary p-4 hover:bg-secondary"
          >
            <CircleUser size={40} className="text-white" />

            <div>
              <p className="text-sm dark:text-gray-200">
                <strong className="block font-medium">Abdulrazaq Salihu</strong>

                <span className="dark:text-gray-400">
                  {" "}
                  abdulrazaq@gmail.com{" "}
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
