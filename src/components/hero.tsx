"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
// import { Badge } from "./ui/badge";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="mx-auto flex flex-col justify-center gap-5 lg:gap-12 xl:gap-16 py-8 md:py-12 md:pb-8 lg:py-28 lg:pb-20">
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
      <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start w-full lg:w-4/5 xl:w-3/4 justify-center gap-4">
        <div className="space-y-4 text-center lg:text-start">
          <p className="scroll-m-20 text-3xl lg:text-4xl font-medium tracking-tight xl:text-5xl">
            Hola, I&apos;m Abhishek 👋
          </p>
          <p className="scroll-m-20 md:text-lg tracking-tight xl:text-xl">
            Frontend Developer, with expiries in React and node pushing for
            FullStack with Node,Go and Docker
          </p>
        </div>
        <div>
          <Image
            className="rounded-full"
            src={"/images/photo.jpg"}
            width={150}
            height={150}
            alt="Photo"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between w-full">
        <div className="basis-52 lg:basis-64 xl:basis-[300px]">
          <Card className="shadow-none h-52 lg:h-64 xl:h-[300px] relative">
            <CardHeader className="flex flex-row items-center justify-start gap-2 space-y-0 p-4">
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  React Js
                </Button>
              </div>
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  Shadcn/ui
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>Full Web Development</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between absolute bottom-0 w-full p-4">
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  Github
                </Button>
              </div>
              <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="basis-52 sm:basis-60 lg:basis-[340px] xl:basis-[550px]">
          <Card className="shadow-none h-52 lg:h-64 xl:h-[300px] relative">
            <CardHeader className="flex flex-row items-center justify-start gap-2 space-y-0 p-4">
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  React Js
                </Button>
              </div>
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  Shadcn/ui
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between absolute bottom-0 w-full p-4">
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  Github
                </Button>
              </div>
              <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="basis-52 lg:basis-64 xl:basis-[300px]">
          <Card className="shadow-none h-52 lg:h-64 xl:h-[300px] relative">
            <CardHeader className="p-4 flex flex-row items-center justify-start gap-2 space-y-0">
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  React Js
                </Button>
              </div>
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  Shadcn/ui
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardContent>
            <CardFooter className="p-4 flex items-center justify-between absolute bottom-0 w-full">
              <div>
                <Button
                  className="rounded-full w-fit shadow-none border-gray-300"
                  variant={"outline"}
                >
                  Github
                </Button>
              </div>
              <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
