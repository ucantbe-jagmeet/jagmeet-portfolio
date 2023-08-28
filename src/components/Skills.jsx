"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-5  shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light"
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 1.05 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const skillsData = [
  {
    skill: "HTML",
    x: "-25vw",
    y: "4vw",
  },
  {
    skill: "Tailwind CSS",
    x: "-5vw",
    y: "-10vw",
  },
  {
    skill: "Javascript",
    x: "25vw",
    y: "2vw",
  },
  {
    skill: "ReactJS",
    x: "-10vw",
    y: "12vw",
  },
  {
    skill: "NextJS",
    x: "-20vw",
    y: "-15vw",
  },
  {
    skill: "NodeJS",
    x: "15vw",
    y: "12vw",
  },
  {
    skill: "ExpressJS",
    x: "0vw",
    y: "-20vw",
  },
  {
    skill: "MongoDB",
    x: "25vw",
    y: "-8vw",
  },
  {
    skill: "Typescript",
    x: "18vw",
    y: "-18vw",
  },
  {
    skill: "Github",
    x: "-28vw",
    y: "-5vw",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-64 w-full text-center md:text-5xl mb-5 ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg
      lg:dark:bg-circularDarkLg
      "
      >
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-5 shadow-dark dark:text-dark dark:bg-light lg:p-4 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skillsData.map((skill, index) => {
          return (
            <Skill key={index} name={skill.skill} x={skill.x} y={skill.y} />
          );
        })}
      </div>
    </>
  );
};

export default Skills;
