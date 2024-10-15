import { MonitorCog, MonitorUp, ScanSearch } from "lucide-react";
import Link from "next/link";
import React from "react";

function Overview() {
  return (
    <div>
      <div>
        <h1 className="text-primary dark:text-white text-2xl font-semibold tracking-wide">
          Good Morning, Abdulrazaq.{" "}
        </h1>
        <p className="text-secondary dark:text-white text-sm mt-3">
          Welcome back to your website toolkit.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10 mt-10">
          <Link href="/score" className="rounded-lg">
            <div className="h-32 rounded-lg border border-gray-200 bg-gray-50 dark:bg-secondary dark:border-borderlinecolor dark:hover:border-primary hover:border-primary cursor-pointer p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Score my website
                  </p>

                  <p className="text-2xl mt-1 font-medium text-gray-900"></p>
                </div>

                <span className="rounded-full bg-primary p-3 text-white">
                  <MonitorCog size={25} />
                </span>
              </div>
            </div>
          </Link>
          <div className="rounded-lg">
            <div className="h-32 rounded-lg border border-gray-200 bg-gray-50 dark:bg-secondary dark:border-borderlinecolor dark:hover:border-primary hover:border-primary cursor-pointer p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Website targeting
                  </p>

                  <p className="text-2xl mt-1 font-medium text-gray-900"></p>
                </div>

                <span className="rounded-full bg-primary p-3 text-white">
                  <MonitorUp size={25} />
                </span>
              </div>
            </div>
          </div>
          <Link href="/review" className="rounded-lg">
            <div className="h-32 rounded-lg border border-gray-200 bg-gray-50 dark:bg-secondary dark:border-borderlinecolor dark:hover:border-primary hover:border-primary cursor-pointer p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Website review
                  </p>

                  <p className="text-2xl mt-1 font-medium text-gray-900"></p>
                </div>

                <span className="rounded-full bg-primary p-3 text-white">
                  <ScanSearch size={25} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Overview;
