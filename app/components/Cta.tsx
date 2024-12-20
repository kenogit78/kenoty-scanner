import React from "react";
import styles from "@/app/styles/styles";
import Link from "next/link";

function Cta() {
  return (
    <div className="mx-auto max-w-screen-2xl px-8 md:px-5 my-10">
      <section className="pt-10">
        <h1 className={`${styles.headerText}`}>Will you be next?</h1>
        <h2 className="text-center text-gray-700 dark:text-white font-semibold text-base md:text-xl my-8">
          Get your FIRST SCAN <span className="text-primary">FREE!</span>
        </h2>
        <p className="text-center text-gray-700 dark:text-white font-semibold text-base md:text-xl max-w-screen-md mx-auto">
          We’ll show you exactly what’s holding your website back. No credit
          card, no commitments — just results.
        </p>

        <div className="mx-auto flex">
          <Link
            href="/home"
            className="bg-primary p-3 px-10 rounded-md text-white mx-auto text-center font-semibold my-12 inline-block"
          >
            Get Started
          </Link>
        </div>

        <p className="text-center text-gray-700 dark:text-white font-semibold text-base md:text-xl max-w-screen-md mx-auto">
          Limited Time Only: <br />
          With your free scan, get a complimentary 30-minute consultation with
          our web performance experts—tailored to your specific needs.
        </p>
      </section>
    </div>
  );
}

export default Cta;
