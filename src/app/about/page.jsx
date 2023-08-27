"use client";
import { AnimatedText, Layout, Skills } from "@/components";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Img from "../../assets/jagmeet.jpeg";

import { useInView, useMotionValue, useSpring } from "framer-motion";

const paraData = [
  {
    para: "Hi, I'm Jagmeet Singh, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my client's visions to life.",
  },
  {
    para: "I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users.",
  },
  {
    para: "  While I'm working on a website, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.",
  },
];

const sideBar = [
  {
    title: "10",
    text: "Projects Completed",
  },
  {
    title: "1",
    text: "Years of Experience",
  },
];

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const page = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center ">
      <Layout className="pt-10">
        <AnimatedText text="Sky is the Limit..." className="mb-16 !text-6xl" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            {paraData.map((item, index) => {
              return (
                <p
                  key={index}
                  className={
                    !index % 2 === 0 ? "font-medium my-4" : "font-medium"
                  }
                >
                  {item.para}
                </p>
              );
            })}
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8">
            <Image
              src={Img}
              alt="Jagmeet Singh"
              className="w-[30rem] h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end ">
            {sideBar.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-end justify-center mt-20"
                >
                  <span className="inline-block text-5xl font-semibold">
                    <AnimatedNumbers value={item.title} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75">
                    {item.text}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
        <Skills />
      </Layout>
    </main>
  );
};

export default page;
