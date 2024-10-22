"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loadingText, setLoadingText] = useState("Initializing Scan...");

  const loadingMessages = [
    "Initializing Scan...",
    "Scanning for Vulnerabilities...",
    "Analyzing Website Structure...",
    "Testing Page Load Speed...",
    "Evaluating SEO Best Practices...",
    "Generating Optimization Suggestions...",
    "Compiling Scan Results...",
    "Generating Report...",
    "Almost Done...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div>
      <div className="loader mx-auto mt-16">
        <span></span>
      </div>
      <p className="text-center mt-4">{loadingText}</p>
    </div>
  );
};

export default Loader;
