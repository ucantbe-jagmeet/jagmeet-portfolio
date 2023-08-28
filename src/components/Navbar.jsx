"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";

import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

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
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } 
        dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <main className="w-full px-28 py-7 font-medium flex items-center justify-between dark:text-light">
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

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%]  translate-x-[-50%] top-1">
        <Logo />
      </div>
    </main>
  );
};

export default Navbar;
