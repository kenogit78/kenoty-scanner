import { MoveRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="p-8 md:p-12 lg:px-16 mt-6">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl max-w-xl mx-auto font-extrabold text-primary dark:text-white md:text-6xl">
            Attention Website Owners!
          </h1>

          <p className="text-gray-700 dark:text-gray-200 mt-9">
            Are you sure your website is performing at its best? Unlock the Full
            Potential of Your Website with Kenoty Scanner
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="relative w-full">
            <div className="flex-1 w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email here and we’ll send you some magic"
                className="w-full rounded-3xl border-2 border-gray-200 dark:border-gray-200 bg-white p-3 pr-32
                 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary"
              />

              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center justify-center gap-2 rounded-3xl bg-primary px-4 my-1 mr-2 text-white"
              >
                <span className="text-sm font-medium"> Do it </span>
                <MoveRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
