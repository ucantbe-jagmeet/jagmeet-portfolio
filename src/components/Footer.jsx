import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { GithubIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-6 flex items-center justify-between lg:flex-col  lg:py-8 sm:text-sm">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex my-2 whitespace-nowrap">
          <GithubIcon className="!w-6 mr-2  md:hidden" />
          <Link href="https://github.com/ucantbe-jagmeet">
            @ucantbe-jagmeet
          </Link>
        </div>
        <Link href="/" className="md:hidden inline-block">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
