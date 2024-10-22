"use client";
import { useState } from "react";

import SettingsMenu from "./components/SettingMenu";
import GeneralSettings from "./components/GeneralSettings";
import SecuritySettings from "./components/SecuritySettings";

function Settings() {
  const [activeSection, setActiveSection] = useState("general");
  return (
    <div className="mx-auto px-6 md:px-14 py-14">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-primary dark:text-white text-2xl font-semibold tracking-wide">
          Settings
        </h1>
      </div>

      <div className="border border-lighmodeborder dark:border-borderlinecolor rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[18%] p-5">
            <SettingsMenu
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          <div className="flex-1 py-2 border-l border-lighmodeborder dark:border-borderlinecolor">
            {activeSection === "general" && <GeneralSettings />}
            {activeSection === "security" && <SecuritySettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
