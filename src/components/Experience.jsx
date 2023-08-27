"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from ".";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <LiIcon reference={ref} />
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const data = [
  {
    position: "Software Engineer",
    company: "google",
    companyLink: "www.google.com",
    time: "2022-Present",
    address: "Mountain View, Ca",
    work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut fuga, dolore error nisi aperiam facere ea iste officia a!",
  },
  {
    position: "FULL STACK Engineer",
    company: "Yahoo",
    companyLink: "www.Yahoo.com",
    time: "2023-Present",
    address: "Mountain View, USA",
    work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut fuga, dolore error nisi aperiam facere ea iste officia a!",
  },
  {
    position: "Software Engineer",
    company: "google",
    companyLink: "www.google.com",
    time: "2022-Present",
    address: "Mountain View, Ca",
    work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut fuga, dolore error nisi aperiam facere ea iste officia a!",
  },
  {
    position: "FULL STACK Engineer",
    company: "Yahoo",
    companyLink: "www.Yahoo.com",
    time: "2023-Present",
    address: "Mountain View, USA",
    work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut fuga, dolore error nisi aperiam facere ea iste officia a!",
  },
  {
    position: "Software Engineer",
    company: "google",
    companyLink: "www.google.com",
    time: "2022-Present",
    address: "Mountain View, Ca",
    work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut fuga, dolore error nisi aperiam facere ea iste officia a!",
  },
  {
    position: "FULL STACK Engineer",
    company: "Yahoo",
    companyLink: "www.Yahoo.com",
    time: "2023-Present",
    address: "Mountain View, USA",
    work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut fuga, dolore error nisi aperiam facere ea iste officia a!",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-5xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="flex w-full flex-col items-start justify-between ml-4">
          {data.map((detail, index) => {
            return (
              <Details
                key={index}
                position={detail.position}
                company={detail.company}
                companyLink={detail.companyLink}
                time={detail.time}
                address={detail.address}
                work={detail.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
