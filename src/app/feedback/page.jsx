import { AnimatedText, Layout } from "@/components";
import React from "react";

const Page = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16  xl:p-24 lg:p-16 md:p-12 sm:p-8">
        <AnimatedText
          text="Strive for continuous improvement"
          className="!text-5xl mb-16 lg:!text-5xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className=" ">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-dark dark:border-light dark:border-[0.5px] dark:text-light">
            <div class="mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 dark:text-light"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline dark:text-light dark:bg-dark"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 dark:text-light"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-light dark:bg-dark"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2 dark:text-light"
                for="feedback"
              >
                Feedback
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-light dark:bg-dark"
                id="feedback"
                placeholder="Enter your feedback here..."
                rows="4"
              ></textarea>
            </div>
            <div class="flex items justify-end">
              <button className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </main>
  );
};

export default Page;
