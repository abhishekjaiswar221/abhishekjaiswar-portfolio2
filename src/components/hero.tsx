import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { socialIcons } from "@/data/socialIcons";

const Hero: FC = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-5 md:h-[37rem] xl:h-[42rem]">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="rounded-full border-[5px] border-[#a6a6a6] p-[5px]">
          <Image
            className="rounded-full border"
            src={"/images/profile-picture.png"}
            width={150}
            height={150}
            alt="Photo"
            priority={true}
          />
        </div>
        <div className="space-y-4 text-center">
          <p className="scroll-m-20 text-2xl font-medium leading-none tracking-tight text-[#3d3d3d] md:text-3xl lg:text-5xl lg:font-semibold">
            <span className="text-4xl text-[#a6a6a6]">
              👋🏼Hola amigos ! I&apos;am
            </span>
            <br />
            I&apos;m Abhishek Jaiswar
            {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#242424] to-gray-400/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Abhishek Jaiswar
            </span> */}
          </p>
          <p className="scroll-m-20 tracking-tight text-[#a6a6a6] md:text-lg xl:text-xl">
            A <span className="text-[#3d3d3d]">Frontend Web Developer</span>,
            {/* with expertise in frontend frameworks like React Js */}I
            transform ideas into stunning realities
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-3 pt-5">
        {socialIcons.map(
          ({ id, imgSrc, altText, bgColor, borderColor, href }) => {
            return (
              <div
                key={id}
                className={`rounded-full border-2 p-[2px] ${borderColor} shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]`}
              >
                <Link
                  href={href || "/"}
                  target="_blank"
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${bgColor}`}
                >
                  <Image
                    src={`/socials/${imgSrc}`}
                    alt={altText}
                    width={19}
                    height={19}
                  />
                </Link>
              </div>
            );
          }
        )}
      </div>

      <div className="flex items-center justify-center gap-5">
        <Button asChild className="w-fit border hover:bg-background">
          <Link href="/contact">Connect</Link>
        </Button>
        <Button asChild variant={"outline"} className="w-fit border">
          <Link href="/resume">Resume</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
