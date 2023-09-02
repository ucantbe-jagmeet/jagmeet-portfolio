"use client";
import React, { useState } from "react";
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

import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
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
  {
    title: "Feedback",
    href: "/feedback",
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
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } 
        dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
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
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-28 py-7 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button onClick={() => setIsOpen(!isOpen)} className="hidden lg:flex">
        <FaBars className="scale-150 text-dark dark:text-light hover:rotate-90 transition-all duration-300" />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
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
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[80vw] min-h-[70vh] flex flex-col justify-evenly items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/60 rounded-lg backdrop-blur-md "
        >
          <nav className="flex items-center flex-col justify-center">
            {navPages.map((page, index) => {
              return (
                <CustomMobileLink
                  key={index}
                  href={page.href}
                  title={page.title}
                  toggle={handleClick}
                  className="md:text-2xl text-xl"
                />
              );
            })}
          </nav>
          <nav className="flex items-center justify-center flex-wrap gap-5 mt-10">
            <div className="w-full h-[2px]  rounded-full bg-white dark:bg-black " />
            {navIcons.map((icon, index) => {
              return (
                <motion.a
                  href={icon.href}
                  key={index}
                  target={"_blank"}
                  title={icon.title}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="md:text-lg text-xl"
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
        </motion.div>
      ) : null}

      <div className="absolute left-[50%]  translate-x-[-50%] top-1">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
