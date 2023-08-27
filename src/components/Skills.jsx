"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-5  shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 1.05 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
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
      <h2 className="font-bold text-6xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-5 shadow-dark"
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
