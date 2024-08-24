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
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const HeaderNavigation: FC = () => {
  return (
    <header className="w-full flex bg-white gap-10 items-center justify-center p-4 lg:px-16 xl:px-28 shadow-sm fixed top-0 z-10">
      <div className="w-full justify-start items-center">
        <Link href="/" className="flex items-center">
          <h3 className="text-lg font-semibold tracking-tight">
            Abhishek Jaiswar
          </h3>
        </Link>
      </div>
      <NavigationMenu className="w-full items-center justify-center hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Projects</Link>
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
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* <div className="w-full justify-end items-center hidden md:flex">
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </div> */}
      <Sheet>
        <SheetTrigger asChild className="w-full flex justify-end items-center">
          <div className="w-full md:hidden">
            {/* <Button variant="outline" size="icon"> */}
            <Menu size={22} strokeWidth={1.5} />
            {/* </Button> */}
          </div>
        </SheetTrigger>

        <SheetContent className="w-full">
          <VisuallyHidden>
            <SheetTitle
              aria-describedby="Menu"
              className="text-lg font-semibold tracking-tight"
            >
              Abhishek D Jaiswar
            </SheetTitle>
            <SheetDescription>Header Navigation</SheetDescription>
          </VisuallyHidden>

          <SheetTrigger asChild>
            <Link className="flex items-center gap-2" href="/">
              <h3 className="text-lg font-semibold tracking-tight">
                Abhishek D Jaiswar
              </h3>
            </Link>
          </SheetTrigger>
          <ul className="flex flex-col items-center justify-center h-screen gap-3 mt-4">
            <li>
              <SheetTrigger asChild>
                <Link href="/">Projects</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/experience">Work Experience</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/skills">Skills</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/about">About</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/contact">Contact</Link>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default HeaderNavigation;
