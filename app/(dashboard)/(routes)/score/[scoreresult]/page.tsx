"use client";
import React, { useState, useEffect } from "react";
import Report from "../components/Report";
import { PanelTopDashed } from "lucide-react";

interface CriterionItem {
  icon: React.ReactNode;
  largeicon: React.ReactNode;
  title: string;
  desc: string;
  details: string;
}

const Page: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CriterionItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectItem = (item: CriterionItem) => {
    setSelectedItem(item);
  };

  if (isLoading) {
    return (
      <div className="mx-auto px-4 md:px-14 py-14">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="text">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 md:px-14 py-14">
      <h1 className="text-secondary dark:text-white text-2xl font-semibold tracking-wide">
        Full Scan report
      </h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-10 border-t border-b border-lighmodeborder dark:border-borderlinecolor rounded-xl">
        <div className="rounded-lg md:border-r border-lighmodeborder dark:border-borderlinecolor">
          <Report onSelectItem={handleSelectItem} />
        </div>
        <div className="rounded-lg md:border-l border-lighmodeborder dark:border-borderlinecolor px-10">
          {selectedItem ? (
            <div className="mx-auto py-28">
              <div className="py-3.5 text-primary">
                <div className="w-16 h-16 flex items-center justify-center">
                  {selectedItem.largeicon}
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-3.5 text-primary dark:text-white">
                {selectedItem.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedItem.details}
              </p>
            </div>
          ) : (
            <div className="mx-auto text-center py-36">
              <PanelTopDashed size={65} className="mx-auto text-primary" />
              <p className="mt-4 text-secondary dark:text-gray-300">
                Select an item to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;