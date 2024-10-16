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
      title: "Design & Usability",
      desc: "Evaluates the visual appeal and ease of navigation on the site.",
      details:
        "Your website scored 90/100 on design and usability. It has a modern interface but could improve accessibility for visually impaired users.",
    },
    {
      icon: <CircleGauge />,
      title: "Performance",
      desc: "Measures load time, responsiveness, and overall speed.",
      details:
        "Your website scored 85/100 in performance. Optimizing images and minimizing JavaScript files can help improve load speed.",
    },
    {
      icon: <BadgeInfo />,
      title: "SEO & Accessibility",
      desc: "Checks how well the website is optimized for search engines and accessible to all users.",
      details:
        "Your website scored 92/100 for SEO and Accessibility. While meta tags and alt text are in place, consider improving mobile experience for better search rankings.",
    },
    {
      icon: <ShieldCheck />,
      title: "Security",
      desc: "Assesses the website's protection against vulnerabilities and potential threats.",
      details:
        "Your website scored 88/100 in security. Implementing HTTPS and ensuring regular updates to software components can further enhance security.",
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
              Website Score Report
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
