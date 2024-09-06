import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { socialIcons } from "@/data/data";

const Hero: FC = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-5 md:h-[37rem] xl:h-[42rem]">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="rounded-full border-[5px] border-[#f2f2f3] p-1">
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
          <p className="scroll-m-20 text-2xl font-medium tracking-tight text-[#3c3c43] md:text-3xl lg:text-4xl">
            Hola Amigos !👋🏼 <br />
            <span>I&apos;m Abhishek Jaiswar</span>
          </p>
          <p className="scroll-m-20 tracking-tight text-[#65656a] md:text-lg xl:text-xl">
            I transform ideas into stunning realities
          </p>
          <span className="scroll-m-20 tracking-tight text-[#65656a] md:text-lg xl:text-xl">
            A <span className="text-[#3c3c43]">Frontend Web Developer</span>,
            with expertise in frontend frameworks like React Js
          </span>
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
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${bgColor} hover:scale-95`}
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
        <Button
          asChild
          className="w-fit border-2 border-primaryColor hover:bg-background hover:text-secondaryColor"
        >
          <Link href="/contact">Connect</Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          className="w-fit border-2 border-primaryColor text-secondaryColor hover:bg-primaryColor hover:text-white"
        >
          <Link href="/resume">Resume</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
