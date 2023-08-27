"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

import { motion } from "framer-motion";

const navPages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/project",
  },
];

const navIcons = [
  {
    title: "github",
    href: "https://github.com/ucantbe-jagmeet",
    icon: <GithubIcon />,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/jagmeet-singh-8a02931b0/",
    icon: <LinkedInIcon />,
  },
  {
    title: "twitter",
    href: "https://twitter.com/ucantbe_jagmeet",
    icon: <TwitterIcon />,
  },
];
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router.asP);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <main className="w-full px-28 py-9 font-medium flex items-center justify-between">
      <nav>
        {navPages.map((page, index) => {
          return (
            <CustomLink
              key={index}
              href={page.href}
              className={index === 0 ? "mr-4" : "mx-4"}
              title={page.title}
            />
          );
        })}
      </nav>

      <nav className="flex items-center justify-center flex-wrap gap-x-5">
        {navIcons.map((icon, index) => {
          return (
            <motion.a
              href={icon.href}
              key={index}
              target={"_blank"}
              title={icon.title}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon.icon}
            </motion.a>
          );
        })}
      </nav>
      <div className="absolute left-[50%]  translate-x-[-50%] top-1">
        <Logo />
      </div>
    </main>
  );
};

export default Navbar;
