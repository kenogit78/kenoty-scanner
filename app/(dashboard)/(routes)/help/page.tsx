import React from "react";

function HelpCenter() {
  return (
    <div className="mx-auto px-6 md:px-32 py-14">
      <h1 className="text-primary dark:text-white text-2xl font-semibold tracking-wide">
        Help Center
      </h1>

      <div className="space-y-4 mt-10">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden border
           border-lighmodeborder dark:border-borderlinecolor rounded-lg"
          open
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg
           p-4 px-5 dark:text-gray-100 text-secondary bg-tertiary"
          >
            <h2 className="font-medium">How do I scan a website?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-5 leading-relaxed text-gray-700 dark:text-gray-300 py-4 text-sm">
            To scan a website, simply enter the URL in the scanner tool and
            click &quot;Scan.&quot; The tool will provide a report on
            vulnerabilities and security risks.
          </p>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden border
           border-lighmodeborder dark:border-borderlinecolor rounded-lg"
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg
           p-4 px-5 dark:text-gray-100 text-secondary bg-tertiary"
          >
            <h2 className="font-medium">What does the scan check for?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-5 leading-relaxed text-gray-700 dark:text-gray-300 py-4 text-sm">
            The scanner checks for common security issues such as outdated
            software, broken links, SSL certificate problems, and more.
          </p>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden border
           border-lighmodeborder dark:border-borderlinecolor rounded-lg"
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg
           p-4 px-5 dark:text-gray-100 text-secondary bg-tertiary"
          >
            <h2 className="font-medium">How often should I scan my website?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-5 leading-relaxed text-gray-700 dark:text-gray-300 py-4 text-sm">
            We recommend scanning your website regularly, at least once a month,
            to catch potential issues early and maintain optimal security.
          </p>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden border
           border-lighmodeborder dark:border-borderlinecolor rounded-lg"
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg
           p-4 px-5 dark:text-gray-100 text-secondary bg-tertiary"
          >
            <h2 className="font-medium">Does the scanner detect SEO issues?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-5 leading-relaxed text-gray-700 dark:text-gray-300 py-4 text-sm">
            Yes, along with security vulnerabilities, our scanner can identify
            basic SEO issues like broken links, missing meta tags, and slow page
            speed.
          </p>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden border
           border-lighmodeborder dark:border-borderlinecolor rounded-lg"
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg
           p-4 px-5 dark:text-gray-100 text-secondary bg-tertiary"
          >
            <h2 className="font-medium">
              What should I do if vulnerabilities are found?
            </h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-5 leading-relaxed text-gray-700 dark:text-gray-300 py-4 text-sm">
            If the scanner detects vulnerabilities, we recommend addressing them
            immediately by updating software, fixing configurations, or
            consulting with our web security expert.
          </p>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden border
           border-lighmodeborder dark:border-borderlinecolor rounded-lg"
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg
           p-4 px-5 dark:text-gray-100 text-secondary bg-tertiary"
          >
            <h2 className="font-medium">Need further assistance?</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-5 leading-relaxed text-gray-700 dark:text-gray-300 py-4 text-sm">
            If you have any questions or need additional help, feel free to
            reach out to us at{" "}
            <a
              href="mailto:support@kenotyscanner.com"
              className="text-primary hover:underline"
            >
              support@kenotyscanner.com
            </a>
            .
          </p>
        </details>
      </div>
    </div>
  );
}

export default HelpCenter;
