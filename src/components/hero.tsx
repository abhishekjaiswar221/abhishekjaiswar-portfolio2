import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { socialIcons } from "@/data/data";

const Hero: FC = () => {
  return (
    <section className="flex flex-col h-screen md:h-fit justify-center gap-5 py-auto md:pt-28 lg:pt-32">
      <div className="flex flex-col-reverse items-center justify-start gap-8 md:flex-row md:items-start w-full lg:w-4/5 xl:w-3/4">
        <div className="space-y-4 text-center md:text-start">
          <p className="scroll-m-20 text-2xl lg:text-4xl font-medium tracking-tight">
            Hola Amigos !👋 <br />
            <span>I&apos;m Abhishek Jaiswar</span>
          </p>
          <p className="scroll-m-20 tracking-tight xl:text-xl">
            I transform ideas into stunning realities
          </p>
          <span className="scroll-m-20 text-base tracking-tight xl:text-xl">
            A Frontend Web Developer, with expertise in frontend frameworks like
            React Js
          </span>
        </div>
        <div className="rounded-full p-1 border-[3px]">
          <Image
            className="rounded-full border"
            src={"/images/profile-picture.png"}
            width={150}
            height={150}
            alt="Photo"
            priority={true}
          />
        </div>
      </div>

      <div className="flex flex-row items-center pt-5 md:pt-4 gap-5 justify-center md:justify-start">
        {socialIcons.map(({ id, href, imgSrc, altText }) => {
          return (
            <div key={id}>
              <Link
                href={href}
                className={`h-10 w-10 rounded-full flex items-center justify-center border-2 shadow-md`}
              >
                <Image
                  className="h-8 w-8"
                  src={`/socials/${imgSrc}`}
                  width={19}
                  height={19}
                  alt={altText}
                />
              </Link>
            </div>
          );
        })}
        {/* <Button
          className="rounded-full w-fit shadow-none"
          variant={"outline"}
        >
          Get in touch
        </Button>
        <Button
          className="rounded-full w-fit shadow-none"
          variant={"outline"}
        >
          Contact Me
        </Button> */}
      </div>
      <div className="text-center md:text-start pt-2">
        <Button asChild className="w-fit shadow-none">
          <Link href="/contact">Connect With Me</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
