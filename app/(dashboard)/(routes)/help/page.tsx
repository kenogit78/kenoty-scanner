import React from "react";

function HelpCenter() {
  return (
    <div className="mx-auto px-6 md:px-14 py-14">
      <h1 className="text-primary dark:text-white text-2xl font-semibold tracking-wide">
        Help Center
      </h1>

      <div className="mt-10 flow-root rounded-lg border border-lighmodeborder dark:border-borderlinecolor py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-lighmodeborder dark:divide-borderlinecolor text-sm">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
            <dt className="font-semibold  dark:text-gray-300 text-secondary p-3">
              How do I scan a website?
            </dt>
            <dd
              className="text-gray-700 dark:text-gray-400 border-l border-lighmodeborder
            dark:border-borderlinecolor md:pl-10 sm:col-span-2 p-3"
            >
              To scan a website, simply enter the URL in the scanner tool and
              click &quot;Scan.&quot; The tool will provide a report on
              vulnerabilities and security risks.
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
            <dt className="font-semibold  dark:text-gray-300 text-secondary p-3">
              What does the scan check for?
            </dt>
            <dd
              className="text-gray-700 sm:col-span-2 dark:text-gray-400 border-l border-lighmodeborder
            dark:border-borderlinecolor md:pl-10 p-3"
            >
              The scanner checks for common security issues such as outdated
              software, broken links, SSL certificate problems, and more.
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
            <dt className="font-semibold  dark:text-gray-300 text-secondary p-3">
              How often should I scan my website?
            </dt>
            <dd
              className="text-gray-700 dark:text-gray-400 border-l border-lighmodeborder
            dark:border-borderlinecolor md:pl-10 p-3 sm:col-span-2"
            >
              We recommend scanning your website regularly, at least once a
              month, to catch potential issues early and maintain optimal
              security.
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
            <dt className="font-semibold  dark:text-gray-300 text-secondar p-3">
              Does the scanner detect SEO issues?
            </dt>
            <dd
              className="text-gray-700 sm:col-span-2 dark:text-gray-400 border-l border-lighmodeborder
            dark:border-borderlinecolor md:pl-10 p-3"
            >
              Yes, along with security vulnerabilities, our scanner can identify
              basic SEO issues like broken links, missing meta tags, and slow
              page speed.
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
            <dt className="font-semibold  dark:text-gray-300 text-secondar p-3">
              What should I do if vulnerabilities are found?
            </dt>
            <dd
              className="text-gray-700 sm:col-span-2 dark:text-gray-400 border-l border-lighmodeborder
            dark:border-borderlinecolor md:pl-10 p-3"
            >
              If the scanner detects vulnerabilities, we recommend addressing
              them immediately by updating software, fixing configurations, or
              consulting with our web security expert.
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
            <dt className="font-semibold  dark:text-gray-300 text-secondar p-3">
              Need further assistance?
            </dt>
            <dd
              className="text-gray-700 sm:col-span-2 dark:text-gray-400 border-l border-lighmodeborder
            dark:border-borderlinecolor md:pl-10 p-3"
            >
              If you have any questions or need additional help, feel free to
              reach out to us at{" "}
              <a
                href="mailto:support@kenotyscanner.com"
                className="text-primary hover:underline"
              >
                support@kenotyscanner.com
              </a>
              .
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default HelpCenter;
