import React from "react";

function GeneralSettings() {
  return (
    <div>
      <div className="md:py-8 pb-8">
        <div className="border-b border-lighmodeborder dark:border-borderlinecolor">
          <h1 className="text-secondary dark:text-white text-[1.1rem] font-semibold tracking-tight pb-6 px-10">
            General details
          </h1>
        </div>
        <form>
          <div className="space-y-5 mt-5 px-10">
            <div>
              <div className="flex items-center gap-5 justify-between">
                <div className="w-full">
                  <label className="font-medium text-xs dark:text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    id="fullName"
                    className="w-full mt-1 px-3 py-2 text-gray-500 outline-none border text-sm focus:border-gray-800 shadow-sm rounded-lg bg-gray-100 dark:bg-gray-200"
                  />
                </div>
                <div className="w-full">
                  <label className="font-medium text-xs dark:text-gray-400">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    id="userName"
                    className="w-full mt-1 px-3 py-2 text-gray-500 outline-none border text-sm focus:border-gray-800 shadow-sm rounded-lg bg-gray-100 dark:bg-gray-200"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5 justify-between">
                <div className="w-full">
                  <label className="font-medium text-xs dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    className="w-full mt-1 px-3 py-2 text-gray-500 outline-none border text-sm focus:border-gray-800 shadow-sm rounded-lg bg-gray-100 dark:bg-gray-200"
                  />
                </div>
                <div className="w-full">
                  <label className="font-medium text-xs dark:text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    id="phone"
                    className="w-full mt-1 px-3 py-2 text-gray-500 outline-none border text-sm focus:border-gray-800 shadow-sm rounded-lg bg-gray-100 dark:bg-gray-200"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-5 justify-between mt-8">
                <div>
                  <h1 className="font-medium text-sm dark:text-white mb-1">
                    Appearance
                  </h1>
                  <p className="font-medium text-xs dark:text-gray-400">
                    Customize how the theme looks on your device
                  </p>
                </div>
                <div>
                  <div>
                    <select
                      name="theme"
                      className="mt-1.5 w-full rounded-lg border bg-gray-100  dark:bg-gray-200
                       py-1 border-gray-300 text-gray-700 sm:text-sm"
                    >
                      <option disabled className="w-0">
                        select theme
                      </option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-10 flex px-5">
            <button
              type="submit"
              className="block rounded-md font-medium bg-primary py-3 text-sm text-white transition 
              hover:opacity-90 mt-8 px-24 mx-6"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GeneralSettings;
