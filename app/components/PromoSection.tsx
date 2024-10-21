import React from "react";
import { CircleCheck } from "lucide-react";
import { benefitsList } from "../constants/ContentConstant";
import Image from "next/image";

function PromoSection() {
  return (
    <div className="mx-auto max-w-screen-2xl px-8 md:px-5 my-10">
      <section className="mt-20">
        <h1 className="text-center text-secondary dark:text-white font-bold text-lg md:text-4xl max-w-screen-lg mx-auto">
          Here’s what you get
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-14 md:gap-0 mt-16">
          <div className="flex-1">
            <Image
              src="/overview.svg"
              alt={"overview"}
              width={100}
              height={100}
              className="w-[100%] md:w-[65%] mx-auto"
            />
          </div>
          <div className="flex-1">
            <div className="space-y-8 md:p-12 md:px-14 md:ml-24">
              <div className="flex flex-col gap-10">
                {benefitsList.map((item, index) => (
                  <div
                    className="flex items-center gap-2.5 md:gap-3.5"
                    key={index}
                  >
                    <CircleCheck size={26} className="text-primary" />
                    <p className="text-gray-500 dark:text-white text-sm md:text-xl font-semibold">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <h1 className="text-center text-gray-600 dark:text-white font-bold text-lg md:text-3xl max-w-screen-lg mx-auto">
            ALL FROM ONE SIMPLE SCAN.
          </h1>

          <p className="text-center text-gray-600 dark:text-white font-bold text-lg md:text-2xl max-w-screen-lg mx-auto mt-10">
            That’s 5 critical reports in one!
          </p>

          <p className="text-center text-gray-600 dark:text-white font-bold text-lg md:text-2xl max-w-screen-lg mx-auto mt-10">
            Ready to go deeper? Upgrade to our Premium Plan for as low as
            $19.99/month and unlock in-depth reports, priority support, and
            more.&quot;
          </p>
          <p className="text-center text-gray-600 dark:text-white font-bold text-lg md:text-2xl max-w-screen-lg mx-auto mt-10">
            This exclusive free scan offer is available to only the first 300
            users. Spots are filling up fast—don’t miss out!&quot;
          </p>
          <p className="text-center text-gray-600 dark:text-white font-bold text-lg md:text-2xl max-w-screen-lg mx-auto mt-10">
            Your website could be performing better right now. Don’t wait until
            your competitors have the edge! Enter your URL below for your FREE
            scan, and watch your website transform!
          </p>
          <p className="text-center text-gray-600 dark:text-white font-bold text-lg md:text-2xl max-w-screen-lg mx-auto mt-10">
            Every second you wait is another sale slipping away. Without the
            right insights, your website is stuck in the past while your
            competitors move ahead. Don’t get left behind.
          </p>
          <p className="text-center text-gray-600 dark:text-white font-bold text-lg md:text-2xl max-w-screen-lg mx-auto mt-10">
            Kenoty Scanner gives you the insights to boost speed, conversions,
            and security, all from one easy-to-use tool. Stop guessing—start
            winning today!
          </p>
        </div> */}
        <button className="bg-primary p-3 px-14 rounded-md text-white font-semibold flex mx-auto text-center my-20">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default PromoSection;
