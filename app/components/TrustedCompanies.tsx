import Image from "next/image";
import { trustedCompanies } from "../constants/ContentConstant";

function TrustedCompanies() {
  return (
    <div className="mx-auto max-w-screen-2xl px-3 md:px-5 mt-16">
      <div className="md:pb-8 ">
        {/* Heading with border connecting on both sides */}
        <h1 className="relative text-1xl text-primary dark:text-white text-center flex items-center justify-center z-50">
          <span className="flex-grow border-t border-gray-300 dark:border-borderlinecolor"></span>
          <span className="border border-tertiary dark:border-borderlinecolor p-3 rounded-full text-sm">
            Trusted by 250 Companies
          </span>
          <span className="flex-grow border-t border-gray-300 dark:border-borderlinecolor"></span>
        </h1>
        {/* Container with shared outer border */}
        <div className="relative md:px-14 bg-white dark:bg-tertiary -mt-6 border border-t-0 border-gray-300 dark:border-borderlinecolor">
          <ul className="grid  grid-cols-2 md:flex justify-between items-center ">
            {trustedCompanies.map((item) => (
              <li
                key={item.alt}
                className={`relative flex justify-center items-center h-[7.5rem]`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className="cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrustedCompanies;
