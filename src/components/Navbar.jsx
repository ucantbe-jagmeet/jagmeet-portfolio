import React from "react";
import Link from "next/link";
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
    title: "T",
    href: "/",
  },
  {
    title: "T",
    href: "/",
  },
  {
    title: "T",
    href: "/",
  },
  {
    title: "T",
    href: "/",
  },
  {
    title: "T",
    href: "/",
  },
  {
    title: "T",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <main className="w-full px-28 py-6 font-medium flex items-center justify-between">
      <nav>
        {navPages.map((page, index) => {
          return (
            <Link href={page.href} key={index}>
              {page.title}
            </Link>
          );
        })}
      </nav>
      <div>Logo</div>
      <nav>
        {navIcons.map((page, index) => {
          return (
            <Link href={page.href} key={index} target={"_blank"}>
              {page.title}
            </Link>
          );
        })}
      </nav>
    </main>
  );
};

export default Navbar;
