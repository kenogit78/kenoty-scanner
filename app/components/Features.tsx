import Image from "next/image";
import React from "react";
import { benefits, improvementList } from "../constants/ContentConstant";
import styles from "../styles/styles";

function Features() {
  return (
    <div className="mx-auto max-w-screen-2xl px-8 md:px-5 my-10">
      <section className="mt-28">
        <h1 className={`${styles.headerText} max-w-screen-lg mx-auto`}>
          What if just one scan could unlock your website&apos;s hidden
          potential?{" "}
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-14 md:gap-0 mt-20">
          <div className="flex-1">
            <Image
              src="/interview.svg"
              alt={"interview"}
              width={100}
              height={100}
              className="w-[100%] md:w-[70%] mx-auto"
            />
          </div>
          <div className="flex-1">
            <div className="space-y-8 md:p-12 md:px-14">
              <div className="flex flex-col gap-10">
                {improvementList.map((item, index) => (
                  <div
                    className="flex items-center gap-2.5 md:gap-3.5"
                    key={index}
                  >
                    <p className="text-white text-sm md:text-xl font-semibold">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-b border-borderlinecolor my-10 py-10">
        <h1 className="text-center text-white font-bold text-lg md:text-3xl max-w-screen-lg mx-auto mt-10">
          Kenoty Scanner dives deep into your website, revealing critical data
          that transforms your site’s performance.
        </h1>

        <p className="text-center text-gray-500 font-bold text-base md:text-2xl max-w-screen-lg mx-auto py-10">
          In just seconds, you’ll have a powerful report with clear action steps
          to fix what’s broken and accelerate what’s working.
        </p>
        <button className="bg-primary p-3 px-10 rounded-md text-white font-semibold flex mx-auto text-center">
          Get Started
        </button>
      </div>

      <section className="mt-24">
        <h1 className={`${styles.headerText} max-w-screen-lg mx-auto`}>
          Our cutting-edge scanning technology is trusted by over 100+
          businesses and has helped companies like yours increase site speed by
          40%, reduce vulnerabilities, and climb to the top of search results.
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-14 md:gap-0 mt-20">
          <div className="flex-1">
            <div className="space-y-8 md:p-12 md:px-14">
              <div className="flex flex-col gap-10">
                {benefits.map((item, index) => (
                  <div
                    className="flex items-center gap-2.5 md:gap-3.5"
                    key={index}
                  >
                    <div
                      className="bg-gradient-to-r from-gradient1 to-gradient2 inline-block 
                  rounded-md p-1 md:p-3 px-3.5 md:px-4"
                    >
                      <Image
                        src={item.icon}
                        alt={item.icon}
                        width={100}
                        height={100}
                        className="size-9 md:size-8"
                      />
                    </div>
                    <p className="text-white text-sm md:text-lg font-medium">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/personal_information.svg"
              alt={"interview"}
              width={100}
              height={100}
              className="w-[100%] md:w-[70%] mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
