"use client";
import React, { useState } from "react";
import styles from "../styles/styles";
import Link from "next/link";

function TabsFeature() {
  const [activeTab, setActiveTab] = useState("Instant Website Review");

  const renderContent = () => {
    switch (activeTab) {
      case "Instant Website Review":
        return (
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              {" "}
              Get expert feedback on your website, instantly Score My website
              scores your website on key criteria, Submit your website url and
              in just 30 seconds, you&apos;ll get actionable steps to revamp
              your website.
            </p>
          </div>
        );
      case "Website Samples":
        return (
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              Get Inspired by Top Website Designs Discover examples of
              successful websites that captivate users and drive results. Our
              collection showcases the best practices in design, functionality,
              and user experience from top-tier sites. Find inspiration,
              customize elements for your own project, and create a website that
              stands out. Perfect your online presence with proven website
              strategies.
            </p>
          </div>
        );
      case "Website Targeting":
        return (
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              Target Your Website for Maximum Impact, Instantly, Our free
              AI-powered platform analyzes your website&apos;s content and
              structure, identifying key areas for improvement. Learn how to
              tailor your website to your audience, optimize for SEO, and
              enhance user experience to drive more traffic and achieve your
              goals.
            </p>
          </div>
        );
      case "Website Optimization":
        return (
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              Get Found by the Right Audience Online, Receive instant,
              personalized feedback on how to optimize your website, for free.
              Boost your visibility and attract 5x more visitors, leads, and
              opportunities by tailoring your site to reach the right audience.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-8 md:px-5 my-20 border-t border-b border-gray-300 dark:border-borderlinecolor">
      <section className="mt-16">
        <h1 className={`${styles.headerText} max-w-screen-lg mx-auto`}>
          Your personal website review platform
        </h1>

        <div className="mt-16">
          <div className="sm:hidden">
            <label htmlFor="Tab" className="sr-only">
              Tab
            </label>

            <select
              id="Tab"
              className="w-full rounded-md py-1.5 px-2 border border-gray-200 bg-secondary text-white"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option>Instant Website Review</option>
              <option>Website Samples</option>
              <option>Website Targeting</option>
              <option>Website Optimization</option>
            </select>
          </div>

          <div className="hidden sm:block">
            <nav
              className="flex gap-6 items-center justify-center"
              aria-label="Tabs"
            >
              <div
                className={`shrink-0 rounded-2xl p-2.5 text-sm font-medium cursor-pointer ${
                  activeTab === "Instant Website Review"
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-500 bg-gray-100 dark:bg-secondary hover:bg-gray-50 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("Instant Website Review")}
              >
                Instant Website Review
              </div>

              <div
                className={`shrink-0 rounded-2xl p-2.5 text-sm font-medium cursor-pointer ${
                  activeTab === "Website Samples"
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-500 bg-gray-100 dark:bg-secondary hover:bg-gray-50 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("Website Samples")}
              >
                Website Samples
              </div>

              <div
                className={`shrink-0 rounded-2xl p-2.5 text-sm font-medium cursor-pointer ${
                  activeTab === "Website Targeting"
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-500 bg-gray-100 dark:bg-secondary hover:bg-gray-50 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("Website Targeting")}
              >
                Website Targeting
              </div>

              <div
                className={`shrink-0 rounded-2xl p-2.5 text-sm font-medium cursor-pointer ${
                  activeTab === "Website Optimization"
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-500 bg-gray-100 dark:bg-secondary hover:bg-gray-50 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("Website Optimization")}
              >
                Website Optimization
              </div>
            </nav>
          </div>

          <div className="mt-10">{renderContent()}</div>

          <div className="mx-auto flex">
            <Link
              href="/home"
              className="bg-primary p-3 px-10 rounded-md text-white mx-auto text-center font-semibold my-10 mt-20 inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TabsFeature;
