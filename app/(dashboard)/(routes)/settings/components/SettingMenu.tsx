import { Settings, ShieldCheck } from "lucide-react";

interface SettingsMenuProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
  setActiveSection,
  activeSection,
}) => {
  return (
    <div>
      <ul className="space-y-3.5 py-5">
        <li>
          <button
            onClick={() => setActiveSection("general")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 w-full ${
              activeSection === "general"
                ? "bg-primary dark:text-white text-white"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-700 w-full"
            }`}
          >
            <Settings size={18} />

            <span className="text-sm font-medium"> General </span>
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSection("security")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 w-full ${
              activeSection === "security"
                ? "bg-primary dark:text-white text-white"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-700 w-full"
            }`}
          >
            <ShieldCheck size={18} />

            <span className="text-sm font-medium"> Security </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SettingsMenu;
