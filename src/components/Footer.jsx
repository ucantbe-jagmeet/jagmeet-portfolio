import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { GithubIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex">
          <GithubIcon className="!w-6 mr-2" />
          <Link href="https://github.com/ucantbe-jagmeet">
            @ucantbe-jagmeet
          </Link>
        </div>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;