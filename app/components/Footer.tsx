import Image from "next/image";
import { footerLinks } from "../constants/ContentConstant";
import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
function Footer() {
  return (
    <div className="mx-auto max-w-screen-2xl px-3 md:px-5">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        {/* Logo  */}
        <div className="md:flex md:items-center md:gap-12 mb-7 md:mb-0">
          <Link className="flex items-center gap-2.5" href="/">
            <Image
              src="/logo.png"
              alt="logo"
              className="h-10 w-10"
              width={100}
              height={100}
            />
            <h1 className="text-base text-primary dark:text-white font-semibold">
              Kenoty Scanner
            </h1>
          </Link>
        </div>
        {/* Site Navigations  */}
        <div className="flex md:ml-[10rem]">
          <ul className="flex flex-wrap gap-5 border-t border-lighmodeborder dark:border-tertiary md:border-none py-7 md:gap-11 justify-center">
            {footerLinks.map((link) => (
              <li
                key={link.id}
                className={`leading-6 text-secondary dark:text-lightgray hover:text-primary dark:hover:text-primary text-base`}
              >
                <Link href={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* SocialIcons  */}
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-3.5 border border-lighmodeborder dark:border-tertiary rounded-md p-3 w-full md:w-auto py-4 md:py-3">
          <p className="text-secondary dark:text-white text-base md:text-sm">
            Stay Connected
          </p>
          <ul className="flex flex-wrap gap-3 md:gap-2">
            <li className="bg-gradient-to-r from-gradient1 to-gradient2 inline-block rounded-md p-3 md:p-2 text-primary">
              <a href="#!">
                <Facebook size={20} />
              </a>
            </li>
            <li className="bg-gradient-to-r from-gradient1 to-gradient2 inline-block rounded-md p-3 md:p-2 text-primary">
              <a href="#!">
                <Twitter size={20} />
              </a>
            </li>
            <li className="bg-gradient-to-r from-gradient1 to-gradient2 inline-block rounded-md p-3 md:p-2 text-primary">
              <a href="#!">
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fa-brands fa-github text-[#FD6003]"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  md:justify-between items-center border-t border-lighmodeborder dark:border-tertiary py-8">
        <div className="flex">
          <ul className="flex items-center flex-col md:flex-row gap-6">
            <li className="leading-normal text-base md:text-sm text-gray-300 flex items-center gap-1.5">
              <Mail size={18} className="text-primary" />{" "}
              <a href="#!" className="text-gray-500 dark:text-white">
                hello@kenoty.com
              </a>
            </li>
            <li className=" leading-normal text-base md:text-sm text-gray-300 flex items-center gap-1.5">
              <Phone size={18} className="text-primary" />{" "}
              <a href="#!" className="text-gray-500 dark:text-white">
                +91 91813 23 2309
              </a>
            </li>
            <li className="leading-normal text-base md:text-sm text-gray-300 flex items-center gap-1.5">
              <MapPin size={18} className="text-primary" />{" "}
              <a href="#!" className="text-gray-500 dark:text-white">
                Somewhere in the World
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-full md:w-auto">
          <ul className="flex justify-center flex-wrap gap-3 md:gap-8 mt-6 border-t border-lighmodeborder dark:border-tertiary md:border-none w-full pt-4 md:pt-0">
            <li>
              <a
                href="#!"
                className="font-primary text-base md:text-sm text-gray-400 leading-normal"
              >
                © 2023 Kenoty. All rights reserved.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
