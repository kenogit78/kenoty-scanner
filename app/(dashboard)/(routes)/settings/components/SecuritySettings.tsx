import React from "react";

const SecuritySettings = () => {
  return (
    <div className="md:py-8 pb-8">
      <div className="border-b border-lighmodeborder dark:border-borderlinecolor">
        <h1 className="text-secondary dark:text-white text-[1.1rem] font-semibold tracking-tight pb-6 px-10">
          Security Settings
        </h1>
      </div>

      <form>
        <div className="space-y-4 mt-5 px-10">
          <div>
            <div className="w-full">
              <label className="font-medium text-xs dark:text-gray-400">
                Change Password
              </label>
              <input
                type="password"
                required
                // minLength="5"
                className="w-full mt-2 px-3 py-3 text-gray-500 outline-none border
                 focus:border-gray-800 shadow-sm rounded-lg bg-gray-100 dark:bg-gray-200 text-xs"
                placeholder="Current Password"
              />
            </div>
          </div>
          <div className="w-full">
            <input
              type="password"
              required
              className="w-full px-3 py-3 text-gray-500 outline-none border focus:border-gray-800 
              shadow-sm rounded-lg bg-gray-100 dark:bg-gray-200 text-xs"
              placeholder="New Password"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              required
              className="w-full px-3 py-3 text-gray-500 outline-none border focus:border-gray-800
               shadow-sm rounded-lg bg-gray-100 dark:bg-gray-200 text-xs"
              placeholder="Confirm New Password"
            />
          </div>
        </div>

        <div className="border-t border-lighmodeborder dark:border-borderlinecolor mt-10 flex">
          <button
            type="submit"
            className="block rounded-md font-medium bg-primary py-3 text-sm text-white transition hover:opacity-90 mt-8 px-24 mx-6"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecuritySettings;
