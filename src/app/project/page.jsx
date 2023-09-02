import { AnimatedText, Layout } from "../../components";
import { GithubIcon } from "../../components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import featured1 from "../../assets/featured1.png";
import featured2 from "../../assets/featured2.png";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark shadow-2xl p-12 dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl ">
      <Link
        href={link}
        target="_blank"
        className="w-1/2  cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto !shadow-2xl !dark:shadow-white"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="flex items-center font-semibold py-0.5 border-2 px-2 rounded-lg border-dark"
          >
            <GithubIcon className="mr-1" /> Github
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-1 px-3 dark:text-dark dark:bg-light dark:font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-3 ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto !shadow-2xl" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 lg:text-lg md:text-base">
        <span className="text-primary font-medium text-xl dark:text-primaryDark sm:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl sm:text-base">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center w-full justify-between sm:flex-col sm:items-start">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark text-light p-1 px-3 dark:text-dark dark:bg-light dark:font-semibold md:text-base "
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="flex items-center font-semibold py-0.5 border-2 px-2 rounded-lg border-dark sm:px-0"
          >
            <GithubIcon className="mr-1 md:w-6 sm:hidden" /> Github
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProjectsData = [
  {
    type: "Featured Project",
    title: "NFTIFY Developers",
    summary:
      "I made this website as a Assignment for The Matrix Labs. This website was a great task to fetch data from Drex Api and it also has pair address searching functionality",
    img: featured1,
    link: "https://nftify-project.vercel.app/",
    github: "https://github.com/ucantbe-jagmeet/nftify-project",
  },
  {
    type: "Featured Project",
    title: "Yummy Slice Pizza",
    summary:
      "This website was made for my cousin's startup. I found this oppurtunity when i learned react concepts and want to create project to examine myself. ",
    img: featured2,
    link: "https://yummy-slice-pizza-gagret.vercel.app/",
    github: "https://github.com/ucantbe-jagmeet/yummy-slice-pizza",
  },
];
const ProjectsData = [
  {
    type: "Figma Replicate",
    title: "Offiql Technologies",
    img: project1,
    link: "https://offiql-technologies.vercel.app/",
    github: "https://github.com/ucantbe-jagmeet/offiql-technologies",
  },
  {
    type: "Frontend App",
    title: "User One",
    img: project2,
    link: "https://user-one-phi.vercel.app/",
    github: "https://github.com/ucantbe-jagmeet/user-one",
  },
  {
    type: "Figma Replicate",
    title: "AKP Project",
    img: project3,
    link: "https://akp-project.vercel.app/",
    github: "https://github.com/ucantbe-jagmeet/akp-project",
  },
  {
    type: "Google Form Replicate",
    title: "Google Form",
    img: project4,
    link: "https://g-form-project.vercel.app/",
    github: "https://github.com/ucantbe-jagmeet/g-form-project",
  },
];

const Page = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16  xl:p-24 lg:p-16 md:p-12 sm:p-8">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="!text-6xl mb-16 lg:!text-5xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            {FeaturedProjectsData.slice(0, 1).map((project, index) => {
              return (
                <FeaturedProject
                  key={index}
                  title={project.title}
                  link={project.link}
                  summary={project.summary}
                  github={project.github}
                  img={project.img}
                  type={project.type}
                />
              );
            })}
          </div>
          <div className="col-span-12 flex gap-x-10 sm:gap-x-2">
            {ProjectsData.slice(0, 2).map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  link={project.link}
                  github={project.github}
                  img={project.img}
                  type={project.type}
                />
              );
            })}
          </div>
          <div className="col-span-12 ">
            {FeaturedProjectsData.slice(1, 2).map((project, index) => {
              return (
                <FeaturedProject
                  key={index}
                  title={project.title}
                  link={project.link}
                  summary={project.summary}
                  github={project.github}
                  img={project.img}
                  type={project.type}
                />
              );
            })}
          </div>
          <div className="col-span-12 flex gap-x-10 sm:gap-x-2">
            {ProjectsData.slice(2, 4).map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  link={project.link}
                  github={project.github}
                  img={project.img}
                  type={project.type}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Page;
