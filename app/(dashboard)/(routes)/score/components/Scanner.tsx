import { MoveRight, SearchCode } from "lucide-react";
import React from "react";

function Scanner() {
  return (
    <div className="mx-auto max-w-3xl">
      <SearchCode className="mx-auto text-primary" size={65} />
      <h1 className="text-secondary dark:text-white text-2xl font-semibold tracking-wide text-center mt-6">
        Enter your website URL
      </h1>

      <form action="score/result" className="relative w-full mt-10">
        <div className="flex-1 w-full">
          <label htmlFor="website" className="sr-only">
            Website URL
          </label>

          <input
            type="text"
            required
            placeholder="Enter your website url here"
            className="w-full rounded-3xl border-2 border-gray-300 dark:border-gray-200 bg-white p-3 pr-32
                 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary"
          />

          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center justify-center gap-2 rounded-3xl bg-primary px-4 my-1 mr-2 text-white"
          >
            <span className="text-sm font-medium">Scan </span>
            <MoveRight className="size-4 mt-0.5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Scanner;
