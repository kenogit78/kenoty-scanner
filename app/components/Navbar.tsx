import Link from "next/link";

function Navbar() {
  return (
    <div className="py-4 mx-auto flex justify-center">
      <Link
        href="/"
        className="text-tertiary dark:text-white text-center text-xl font-semibold tracking-wider"
      >
        Kenoty Scanner
      </Link>
    </div>
  );
}

export default Navbar;
