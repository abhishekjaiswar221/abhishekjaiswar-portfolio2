"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CodeXml,
  Github,
  Home,
  Linkedin,
  Menu,
  Monitor,
  SquareTerminal,
  Twitter,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const HeaderNavigation: FC = () => {
  return (
    <header className="w-full flex bg-white items-center justify-between py-4 px-6 lg:px-16 xl:px-28 shadow-sm fixed top-0 z-10">
      {/* Desktop Navigation */}
      <div>
        <Link href="/contact">
          <Button className="p-2 flex items-center justify-center gap-2">
            <span>Contact Me</span>
            <UserRound size={17} />
          </Button>
        </Link>
      </div>
      <NavigationMenu className="w-full items-center justify-center hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(navigationMenuTriggerStyle())}
            >
              <Link href="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/skills">Skills</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(navigationMenuTriggerStyle())}
            >
              <Link href="/experience">Work Experience</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="w-full flex justify-end items-center">
          <div className="w-full md:hidden">
            <Menu />
          </div>
        </SheetTrigger>

        <SheetContent className="w-full">
          <VisuallyHidden>
            <SheetTitle
              aria-describedby="Name"
              className="text-lg font-semibold tracking-tight"
            >
              Abhishek D Jaiswar
            </SheetTitle>
            <SheetDescription>Header Navigation</SheetDescription>
          </VisuallyHidden>

          <ul className="flex flex-col text-base items-start justify-start h-screen pt-6">
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <Home />
                  <Link href="/">Home</Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <CodeXml />
                  <Link href="/projects">Projects</Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <SquareTerminal />
                  <Link href="/skills">Skills</Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <Monitor />
                  <Link href="/experience">Work Experience</Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <UserRound />
                  <Link href="/contact">Contact</Link>
                </div>
              </SheetTrigger>
            </li>
            <div className="pt-5">
              <h1>Socials</h1>
            </div>
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <Github className="text-[#7440c7]" />
                  <Link href="/">Github</Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <Linkedin className="text-[#0a66c2]" />
                  <Link href="/projects">LinkedIn</Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex gap-2 items-center justify-center p-4">
                  <Twitter className="text-[#029dee]" />
                  <Link href="/skills">Twitter</Link>
                </div>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default HeaderNavigation;
