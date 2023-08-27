import { AnimatedText, Layout } from "@/components";

import Img from "../assets/jagmeet.jpeg";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen ">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={Img} alt="Jagmeet Singh" className="w-96 rounded-xl " />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Hi I am Jagmeet Singh 👋"
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              With a passion for building and learning, I have strong
              understanding of both front-end and back-end development, and I am
              excited to put my skills to use in a professional setting. I am a
              quick learner and a team player, and I am confident that I can be
              a valuable asset to any Web Development Team
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/JagmeetSingh_19124027_resume.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume <LinkArrow className="ml-2" />
              </Link>
              <Link
                href="mailto:jagmeetsingh2921@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
