import { AlignJustify, BadgeHelp, CircleUserRound } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex p-5 border-b border-borderlinecolor items-center justify-between md:justify-end">
      <button id="menuButton" className="md:hidden">
        <AlignJustify className={`md:hidden`} />
      </button>
      <Link href="/">
        <h1 className="md:hidden">Kenoty Scanner</h1>
      </Link>
      <a
        href=""
        target="_blank"
        aria-label="WhatsApp Profile"
        className="mr-8 hidden md:block"
      >
        <BadgeHelp
          size={22}
          strokeWidth={1.3}
          // className="mr-8 hidden md:block"
          color="#ffffff"
        />
      </a>
      <CircleUserRound className="text-white" size={30} />
    </div>
  );
}

export default Header;
