"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
// import { Badge } from "./ui/badge";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col h-screen lg:h-fit justify-center gap-5 lg:pb-4 py-auto lg:pt-48">
      {/* <Badge className="my-2" variant="secondary">
        Website in development
      </Badge> */}
      {/* <div>
        <Image
          className="rounded-full"
          src={"/images/photo.jpg"}
          width={200}
          height={200}
          alt="Photo"
        />
      </div> */}
      {/* <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
          Hola, I am a Software engineer driven by learning and challenges
        </h1>
        <p className="text-lg font-light max-w-xl text-center text-foreground">
          I aim to create websites that are clean, well-organized, and provide
          an excellent user experience.
        </p>
      </div> */}
      {/* <div className="flex gap-4 py-4 md:pb-10 items-center">
        <Button asChild>
          <Link href="/about">Learn more</Link>
        </Button>
        <Link
          href="https://github.com/abhishekjaiswar221"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </div> */}
      <div className="flex flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:items-start w-full lg:w-4/5 xl:w-3/4">
        <div className="space-y-4 text-center lg:text-start">
          <p className="scroll-m-20 text-3xl lg:text-4xl font-medium tracking-tight xl:text-5xl">
            Hola, I&apos;m Abhishek 👋
          </p>
          <p className="scroll-m-20 md:text-lg tracking-tight xl:text-xl">
            A Frontend Developer,with expertise in frontend frameworks like
            React Js and Next Js.
            <br></br> <span>I transform ideas into stunning realities</span>
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

      <div className="flex flex-row items-center pt-6 gap-5 justify-center lg:justify-start">
        <Link
          href={"http://github.com/abhishekjaiswar221"}
          className="h-10 w-10 rounded-full border-2   flex items-center justify-center"
        >
          <Github size={18} strokeWidth={1.5} />
        </Link>
        <Link
          href={"http://github.com/abhishekjaiswar221"}
          className="h-10 w-10 rounded-full border-2   flex items-center justify-center"
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </Link>
        <Link
          href={"http://github.com/abhishekjaiswar221"}
          className="h-10 w-10 rounded-full border-2   flex items-center justify-center"
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
          Contact
        </Button> */}
      </div>
    </section>
  );
}
