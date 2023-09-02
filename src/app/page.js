import { AnimatedText, Layout } from "../components";
import Img from "../assets/jagmeet1.jpg";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
      <Layout className="pt-0 xl:p-24 lg:p-16 md:p-12 sm:p-8 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-2/3 md:mb-10">
            <Image
              src={Img}
              alt="Jagmeet Singh"
              className="w-[28rem] rounded-xl lg:hidden md:inline-block md:w-full"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Hi, I am Jagmeet Singh 👋"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              With a passion for building and learning, I have strong
              understanding of both front-end and back-end development, and I am
              excited to put my skills to use in a professional setting. I am a
              quick learner and a team player, and I am confident that I can be
              a valuable asset to any Web Development Team
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/JagmeetSingh_19124027_resume.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                download={true}
              >
                Resume <LinkArrow className="ml-2" />
              </Link>
              <Link
                href="mailto:jagmeetsingh2921@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:p-2 md:px-4 md:text-base"
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
