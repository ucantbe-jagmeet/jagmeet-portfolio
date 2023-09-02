"use client";
import React, { useState } from "react";
import axios from "axios";
import { AnimatedText, Layout } from "../../components";
import toast, { Toaster } from "react-hot-toast";
const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/form", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setFormData({ name: "", email: "", feedback: "" });
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <Toaster position="top-right" reverseOrder={true} className="z-[1000]" />
      <Layout className="pt-16 xl:p-24 lg:p-16 md:p-12 sm:p-8">
        <AnimatedText
          text="Strive for continuous improvement"
          className="!text-5xl mb-16 lg:text-5xl sm:mb-8 sm:text-6xl xs:text-4xl"
        />
        <div>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-dark dark:border-light dark:border-[0.5px] dark:text-light"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold mb-2 dark:text-light"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline dark:text-light dark:bg-dark"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold mb-2 dark:text-light"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-light dark:bg-dark"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <label
                htmlFor="feedback"
                className="block text-sm font-bold mb-2 dark:text-light"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                placeholder="Enter your feedback here..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-light dark:bg-dark"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
              >
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
