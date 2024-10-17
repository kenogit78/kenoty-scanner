import React, { useState } from "react";
import {
  BadgeInfo,
  CircleGauge,
  Component,
  MoveRight,
  ShieldCheck,
} from "lucide-react";

interface CriterionItem {
  icon: React.ReactNode;
  largeicon: React.ReactNode;
  title: string;
  desc: string;
  details: string;
}

interface ReportProps {
  onSelectItem: (item: CriterionItem) => void;
}

const Report: React.FC<ReportProps> = ({ onSelectItem }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const criteria: CriterionItem[] = [
    {
      icon: <Component />,
      largeicon: <Component size={60} />,
      title: "User Experience & Interface",
      desc: "An immersive and user-friendly interface that could be refined for better accessibility.",
      details:
        "Your platform earned a score of 88/100 for its user experience. While the interface is sleek and engaging, improving features for users with disabilities, such as enhancing keyboard navigation and screen reader support, will boost inclusivity and overall usability.",
    },
    {
      icon: <CircleGauge />,
      largeicon: <CircleGauge size={60} />,
      title: "Site Speed & Optimization",
      desc: "Quick response times, but some elements could be optimized further for peak performance.",
      details:
        "Scoring 80/100 in performance, your site loads swiftly under typical conditions. However, the performance drops when handling larger media files and scripts. Image compression and code minification would reduce load times, improving the user experience on slower connections.",
    },
    {
      icon: <BadgeInfo />,
      largeicon: <BadgeInfo size={60} />,
      title: "Search Visibility & Compliance",
      desc: "Good visibility on search engines but room for improvement in mobile-friendliness.",
      details:
        "With a score of 91/100, your website is well-positioned for search engines. It benefits from well-structured metadata and responsive design. Enhancing mobile compatibility further could make it more favorable for search rankings, especially in mobile-first indexing algorithms.",
    },
    {
      icon: <ShieldCheck />,
      largeicon: <ShieldCheck size={60} />,
      title: "Security & Data Protection",
      desc: "Strong security framework, though proactive updates are required to maintain safety.",
      details:
        "Your website achieved 86/100 in security, reflecting a good standard of data protection. Adopting more rigorous HTTPS implementation and consistently updating third-party libraries will provide a stronger shield against vulnerabilities and ensure compliance with the latest security protocols.",
    },
  ];

  const handleLearnMore = (item: CriterionItem) => {
    setActiveItem(item.title);
    onSelectItem(item);
  };

  return (
    <main>
      <div className="max-w-screen-xl mx-auto flex items-center justify-start py-28 md:px-8">
        <div className="max-w-lg mx-auto text-gray-600">
          <div className="space-y-4 text-center">
            <h3 className="text-secondary dark:text-gray-300 font-semibold text-sm md:text-base">
              Website review Report
            </h3>
            <div className="flex items-center justify-center w-[6rem] h-[6rem] md:w-[7rem] md:h-[7rem] rounded-full border-4 border-primary mx-auto">
              <p className="text-primary text-lg font-semibold sm:text-2xl">
                86/100
              </p>
            </div>

            <p className="text-gray-500 dark:text-gray-300 text-xs md:text-sm">
              Review the key metrics on how your website performs in terms of
              design, speed, and visibility.
            </p>
          </div>
          <div className="mt-12">
            <ul className="divide-y divide-gray-500">
              {criteria.map((item, idx) => (
                <li key={idx} className="flex gap-x-4 py-6">
                  <div className="flex-none w-14 h-14 bg-blue-50 rounded-full text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h4
                      className={`text-sm md:text-base ${
                        activeItem === item.title
                          ? "text-secondary dark:text-gray-300 font-semibold tracking-wider"
                          : "text-secondary dark:text-white font-medium"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm">
                      {item.desc}
                    </p>
                    <a
                      href="javascript:void(0)"
                      onClick={() => handleLearnMore(item)}
                      className="text-xs md:text-sm text-primary duration-150 hover:opacity-85 font-medium inline-flex items-center gap-x-1.5 cursor-pointer"
                    >
                      View details
                      <MoveRight size={15} className="mt-1" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Report;
