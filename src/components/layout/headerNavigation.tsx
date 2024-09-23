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
    <header className="sticky top-0 flex w-full items-center justify-between bg-opacity-30 px-6 py-4 backdrop-blur-lg backdrop-filter md:px-10 lg:px-20 xl:px-40">
      {/* Desktop Navigation */}
      <div>
        <Button
          asChild
          className="flex items-center justify-center gap-1 p-2 font-semibold"
        >
          <Link href="/contact">
            <span>Contact Me</span>
            <UserRound size={17} />
          </Link>
        </Button>
      </div>
      <NavigationMenu className="hidden lg:flex lg:w-full lg:items-center lg:justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-transparent focus:bg-transparent"
              )}
            >
              <Link href="/">
                <p className="font-semibold">Home</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-transparent focus:bg-transparent"
              )}
            >
              <Link href="#skills">
                <p className="font-semibold">Skills</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-transparent focus:bg-transparent"
              )}
            >
              <Link href="/projects">
                <p className="font-semibold">More Projects</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:bg-transparent focus:bg-transparent"
              )}
            >
              <Link href="/experience">
                <p className="font-semibold">Work Experience</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="flex w-full items-center justify-end">
          <div className="lg:hidden">
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

          <ul className="flex h-screen flex-col items-start justify-start pt-6">
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <Home />
                  <Link href="/">
                    <p className="font-medium">Home</p>
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <SquareTerminal />
                  <Link href="/skills">
                    <p className="font-medium">Skills</p>
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <CodeXml />
                  <Link href="/projects">
                    <p className="font-medium">More Projects</p>
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <Monitor />
                  <Link href="/experience">
                    <p className="font-medium">Work Experience</p>
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <UserRound />
                  <Link href="/contact">
                    <p className="font-medium">Contact</p>
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <div className="pt-5">
              <h1 className="font-medium">Socials</h1>
            </div>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <Github className="text-github" />
                  <Link href="https://github.com/abhishekjaiswar221">
                    <p className="font-medium">Github</p>
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <Linkedin className="text-linkedin" />
                  <Link href="https://linkedin.com/in/abhishekjai221">
                    <p className="font-medium">Linkedin</p>
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <Twitter className="text-twitter" />
                  <Link href="https://x.com/abhishekjai221">
                    <p className="font-medium">Twitter</p>
                  </Link>
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
