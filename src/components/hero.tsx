import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero: FC = () => {
  return (
    <section className="flex flex-col h-screen lg:h-fit justify-center gap-5 py-auto lg:pt-32">
      <div className="flex flex-col-reverse items-center justify-start gap-4 lg:flex-row lg:items-start w-full lg:w-4/5 xl:w-3/4">
        <div className="space-y-4 text-center lg:text-start">
          <p className="scroll-m-20 text-3xl lg:text-4xl font-medium tracking-tight xl:text-5xl">
            Hola, I&apos;m Abhishek 👋
          </p>
          <p className="scroll-m-20 md:text-lg tracking-tight xl:text-xl">
            A Frontend Developer, with expertise in frontend frameworks like
            React Js.
            <br /> <span>I transform ideas into stunning realities.</span>
          </p>
          {/* <p>
            Bold and Confident Headline: Your Vision, My Code Subheadline: I
            transform ideas into stunning realities. Call to Action: View My
            Work
          </p> */}
        </div>
        <div>
          <Image
            className="rounded-full border-2 p-1 border-gray-400"
            src={"/images/profile-picture.png"}
            width={150}
            height={150}
            alt="Photo"
          />
        </div>
      </div>

      <div className="flex flex-row items-center pt-4 gap-5 justify-center lg:justify-start">
        <Link
          href={"http://github.com/abhishekjaiswar221"}
          className="h-10 w-10 rounded-full border-2 flex items-center justify-center"
        >
          <Github size={18} strokeWidth={1.5} />
        </Link>
        <Link
          href={"http://github.com/abhishekjaiswar221"}
          className="h-10 w-10 rounded-full border-2 flex items-center justify-center"
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </Link>
        <Link
          href={"http://github.com/abhishekjaiswar221"}
          className="h-10 w-10 rounded-full border-2 flex items-center justify-center"
        >
          <Twitter size={18} strokeWidth={1.5} />
        </Link>
        {/* <Button
          className="rounded-full w-fit shadow-none border-gray-300"
          variant={"outline"}
        >
          Connect with me
        </Button>
        <Button
          className="rounded-full w-fit shadow-none border-gray-300"
          variant={"outline"}
        >
          Get in touch
        </Button>
        <Button
          className="rounded-full w-fit shadow-none border-gray-300"
          variant={"outline"}
        >
          Contact Me
        </Button> */}
      </div>
    </section>
  );
};

export default Hero;
